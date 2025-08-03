import React from 'react';

function GuestPage() {
  return (
    <div>
      <h2>Welcome, Guest! 👋</h2>
      <p>Please log in to book your flight tickets.</p>

      <ul style={{ listStyle: 'none', padding: 0 }}>
        <li><strong>Flight:</strong> Mumbai to Delhi | <strong>Time:</strong> 10:30 AM</li>
        <li><strong>Flight:</strong> Bangalore to Hyderabad | <strong>Time:</strong> 1:00 PM</li>
      </ul>

      <p style={{ color: 'red', marginTop: '20px' }}>
        🔒 You must be logged in to book a ticket.
      </p>
    </div>
  );
}

export default GuestPage;
