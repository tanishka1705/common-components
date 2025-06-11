import React from 'react';

const Button = ({ label , onClick , disabled = false, style = {},}) => {
  return (
    <button
      style={{
        padding: '10px 20px',
         backgroundColor: disabled ? '#ccc' : '#007bff',
        color: '#fff',
        border: 'none',
        borderRadius: '4px',
        cursor: disabled ? 'not-allowed' : 'pointer',
        ...style
      }}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default Button;
