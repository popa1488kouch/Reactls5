import React, { useState } from 'react';

interface ProductCardProps {
  name: string;
  price: number;
  category: string;
}

export const ProductCard: React.FC<ProductCardProps> = ({ name, price, category }) => {
  const [count, setCount] = useState<number>(0);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const increaseCount = (): void => setCount((prev) => prev + 1);
  const decreaseCount = (): void => {
    if (count > 0) setCount((prev) => prev - 1);
  };

  const toggleVisibility = (): void => setIsVisible((prev) => !prev);

  const cardStyle: React.CSSProperties = {
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '16px',
    margin: '12px',
    maxWidth: '300px',
    fontFamily: 'Arial, sans-serif'
  };

  return (
    <div style={cardStyle}>
      <h2>{name}</h2>
      <p><strong>Цена:</strong> {price} руб.</p>

      {isVisible && <p><strong>Категория:</strong> {category}</p>}

      <button onClick={toggleVisibility} style={{ marginBottom: '12px', display: 'block' }}>
        {isVisible ? 'Скрыть информацию' : 'Показать информацию'}
      </button>

      <div style={{ marginTop: '10px' }}>
        <button onClick={decreaseCount} style={{ marginRight: '8px', padding: '2px 8px' }}>-</button>
        <span>Количество: {count}</span>
        <button onClick={increaseCount} style={{ marginLeft: '8px', padding: '2px 8px' }}>+</button>
      </div>
    </div>
  );
};
