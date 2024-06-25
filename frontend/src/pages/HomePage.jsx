// eslint-disable-next-line no-unused-vars
import React from 'react'

function HomePage() {
  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f8f9fa'
  };

  const imageStyle = {
    maxWidth: '100%',
    maxHeight: '100%',
    objectFit: 'contain',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
  };

  return (
    <div style={containerStyle}>
      <img style={imageStyle} src="../img/entregaindex.png" alt="entregaIndex" />
    </div>
  );
}


export default HomePage