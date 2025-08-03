import React from 'react';

function Welcome() {
  const sayWelcome = (message) => {
    alert(message);
  };

  return (
    <div style={{ marginBottom: '20px' }}>
      <button onClick={() => sayWelcome("Welcome!")}>Say Welcome</button>
    </div>
  );
}

export default Welcome;
