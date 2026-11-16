import Navbar from './Navbar.jsx';
function Home() {
    return (
        <>
            <Navbar />
            <div style={{ color: 'black', fontSize: '30px', textAlign: 'center', marginTop: '20px' }}>
                Welcome to the Home Page 
            </div>

            <div>
                <table style={{ width: '30%', marginTop: '10px', borderCollapse: 'collapse' }}>
                    <thead>
                        <tr>
                            <th style={{ border: '1px solid black', padding: '5px' }}>No</th>
                            <th style={{ border: '1px solid black', padding: '5px' }}>Name</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td style={{ border: '1px solid black', padding: '5px' }}>1</td>
                            <td style={{ border: '1px solid black', padding: '5px' }}>John Doe</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>     
    );
}

export default Home;
