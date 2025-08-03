import React from 'react';

function UserPage() {
  return (
    <div>
      <h2>Welcome, User! 🎫</h2>
      <p>You can now book tickets.</p>

      <ul style={{ listStyle: 'none', padding: 0 }}>
        <li><strong>Flight:</strong> Mumbai to Delhi | <strong>Time:</strong> 10:30 AM</li>
        <li><strong>Flight:</strong> Bangalore to Hyderabad | <strong>Time:</strong> 1:00 PM</li>
      </ul>

      <button style={{
        marginTop: '20px',
        padding: '10px 20px',
        backgroundColor: '#2ecc71',
        color: '#fff',
        border: 'none',
        borderRadius: '6px',
        cursor: 'pointer'
      }}>
        Book Now
      </button>
    </div>
  );
}

export default UserPage;
