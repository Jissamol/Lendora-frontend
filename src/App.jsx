import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Home from './Home/Home.jsx'
import Login from './Login/Login.jsx'
import Portal from './Portal/Portal.jsx'
import Signup from './Login/Signup.jsx'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/lender-portal" element={<Portal role="lender" />} />
        <Route path="/borrower-portal" element={<Portal role="borrower" />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App



