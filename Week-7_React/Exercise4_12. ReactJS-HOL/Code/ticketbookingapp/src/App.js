import React, { useState } from 'react';
import GuestPage from './GuestPage';
import UserPage from './UserPage';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => setIsLoggedIn(true);
  const handleLogout = () => setIsLoggedIn(false);

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1>✈️ Ticket Booking App</h1>
        {isLoggedIn ? (
          <button onClick={handleLogout} style={styles.button}>Logout</button>
        ) : (
          <button onClick={handleLogin} style={styles.button}>Login</button>
        )}
      </header>

      <main style={styles.main}>
        {isLoggedIn ? <UserPage /> : <GuestPage />}
      </main>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: 'Segoe UI, sans-serif',
    textAlign: 'center',
    padding: '30px',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '30px',
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#3498db',
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
  },
  main: {
    border: '1px solid #ccc',
    padding: '20px',
    borderRadius: '10px',
    maxWidth: '700px',
    margin: '0 auto',
    backgroundColor: '#f8f9fa',
  }
};

export default App;
