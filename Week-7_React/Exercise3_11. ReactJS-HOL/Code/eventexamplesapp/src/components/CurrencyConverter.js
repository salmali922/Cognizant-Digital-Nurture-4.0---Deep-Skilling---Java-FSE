import React, { useState } from 'react';

function CurrencyConverter() {
  const [rupees, setRupees] = useState('');
  const [euro, setEuro] = useState('');

  const handleSubmit = () => {
    const euroValue = (parseFloat(rupees) / 90).toFixed(2); // Sample conversion rate
    setEuro(euroValue);
  };

  // UI Styling
  const container = {
    backgroundColor: '#ffffff',
    padding: '30px',
    borderRadius: '12px',
    boxShadow: '0 6px 18px rgba(0,0,0,0.1)',
    maxWidth: '500px',
    margin: '40px auto',
    fontFamily: 'Segoe UI, sans-serif',
    color: '#2c3e50',
  };

  const heading = {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '20px',
    textAlign: 'center',
  };

  const label = {
    fontSize: '16px',
    marginBottom: '8px',
    display: 'block',
  };

  const input = {
    width: '100%',
    padding: '12px',
    fontSize: '16px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    marginBottom: '20px',
  };

  const button = {
    padding: '12px 25px',
    fontSize: '16px',
    backgroundColor: '#27ae60',
    color: '#ffffff',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  };

  const result = {
    marginTop: '20px',
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#34495e',
    textAlign: 'center',
  };

  return (
    <div style={container}>
      <div style={heading}>💱 Currency Converter</div>
      <label style={label}>Amount in INR:</label>
      <input
        type="number"
        value={rupees}
        onChange={(e) => setRupees(e.target.value)}
        placeholder="Enter amount in Indian Rupees"
        style={input}
      />
      <div style={{ textAlign: 'center' }}>
        <button style={button} onClick={handleSubmit}>Convert to Euro</button>
      </div>
      {euro && <div style={result}>€ {euro}</div>}
    </div>
  );
}

export default CurrencyConverter;
