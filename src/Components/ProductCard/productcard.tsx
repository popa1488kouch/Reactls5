import React, { useState } from 'react';

interface ProductCardProps {
  name: string;
  price: number;
}

function ProductCard({ name, price }: ProductCardProps) {
  const [count, setCount] = useState<number>(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    } 
  };

  return (
    <div style={cardStyle}>
      <h2>{name}</h2>
      <p>Цена: {price} руб.</p>
      
      <div style={counterStyle}>
        <button onClick={handleDecrement} style={buttonStyle}>-</button>
        <span style={countStyle}>{count}</span>
        <button onClick={handleIncrement} style={buttonStyle}>+</button>
      </div>
    </div>
  );
}

const cardStyle: React.CSSProperties = {
  border: '1px solid #ccc',
  borderRadius: '8px',
  padding: '16px',
  margin: '10px',
  maxWidth: '200px',
  textAlign: 'center',
  boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
};

const counterStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '10px'
};

const buttonStyle: React.CSSProperties = {
  padding: '5px 10px',
  fontSize: '16px',
  cursor: 'pointer'
};

const countStyle: React.CSSProperties = {
  fontSize: '18px',
  fontWeight: 'bold'
};

export default ProductCard;
