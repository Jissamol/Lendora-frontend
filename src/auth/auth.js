const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8000";

export function getAccessToken() {
    return localStorage.getItem("accessToken");
}

export function getRefreshToken() {
    return localStorage.getItem("refreshToken");
}

export function clearAuthTokens() {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("userRole");
}

export async function logout() {
    const refreshToken = getRefreshToken();

    if (refreshToken) {
        await fetch(`${API_URL}/api/auth/logout/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${getAccessToken()}`,
            },
            body: JSON.stringify({ refresh: refreshToken }),
        }).catch(() => undefined);
    }

    clearAuthTokens();
}

export async function refreshAccessToken() {
    const refreshToken = getRefreshToken();
    if (!refreshToken) return null;

    const response = await fetch(`${API_URL}/api/auth/refresh/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ refresh: refreshToken }),
    });

    if (!response.ok) {
        clearAuthTokens();
        return null;
    }

    const data = await response.json();
    localStorage.setItem("accessToken", data.access);
    if (data.refresh) {
        localStorage.setItem("refreshToken", data.refresh);
    }
    return data.access;
}

export async function authFetch(path, options = {}) {
    let accessToken = getAccessToken();

    async function send(token) {
        return fetch(`${API_URL}${path}`, {
            ...options,
            headers: {
                ...options.headers,
                ...(token ? { Authorization: `Bearer ${token}` } : {}),
            },
        });
    }

    let response = await send(accessToken);
    if (response.status === 401) {
        accessToken = await refreshAccessToken();
        if (!accessToken) return response;
        response = await send(accessToken);
    }
    return response;
}
