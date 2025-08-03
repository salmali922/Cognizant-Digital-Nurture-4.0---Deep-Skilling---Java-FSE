import React from 'react';

function SyntheticEventDemo() {
  const handleClick = (e) => {
    console.log("SyntheticEvent:", e);
    alert("I was clicked");
  };

  return (
    <div style={{ marginBottom: '20px' }}>
      <button onClick={handleClick}>OnPress</button>
    </div>
  );
}

export default SyntheticEventDemo;
