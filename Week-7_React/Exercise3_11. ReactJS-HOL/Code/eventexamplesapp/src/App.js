import React, { useState } from 'react';
import CurrencyConverter from './components/CurrencyConverter';

function App() {
  const [count, setCount] = useState(0);

  // Multiple method call
  const handleIncrement = () => {
    increment();
    sayHello();
  };

  const increment = () => {
    setCount(prev => prev + 1);
  };

  const decrement = () => {
    setCount(prev => prev - 1);
  };

  const sayHello = () => {
    alert("Hello! Count updated successfully.");
  };

  const sayWelcome = (msg) => {
    alert(msg);
  };

  const handleClick = (e) => {
    alert("I was clicked!");
  };

  // Styling
  const containerStyle = {
    fontFamily: 'Segoe UI, sans-serif',
    padding: '30px',
    backgroundColor: '#f4f7fb',
    minHeight: '100vh',
    color: '#333',
  };

  const card = {
    background: '#fff',
    padding: '25px',
    borderRadius: '10px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    marginBottom: '30px',
    maxWidth: '500px',
    margin: 'auto',
  };

  const heading = {
    textAlign: 'center',
    color: '#2c3e50',
    marginBottom: '20px',
  };

  const button = {
    padding: '10px 20px',
    margin: '10px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    backgroundColor: '#2980b9',
    color: '#fff',
    fontSize: '1rem',
  };

  return (
    <div style={containerStyle}>
      <h1 style={heading}>⚙️ React Events & Currency Converter</h1>

      <div style={card}>
        <h2>🔢 Counter: {count}</h2>
        <button style={button} onClick={handleIncrement}>Increment</button>
        <button style={{ ...button, backgroundColor: '#e74c3c' }} onClick={decrement}>Decrement</button>
      </div>

      <div style={card}>
        <h2>🎉 Welcome Message</h2>
        <button style={button} onClick={() => sayWelcome("Welcome to React Events!")}>Say Welcome</button>
      </div>

      <div style={card}>
        <h2>🖱️ Synthetic Event</h2>
        <button style={button} onClick={handleClick}>Click Me</button>
      </div>

      <CurrencyConverter />
    </div>
  );
}

export default App;
