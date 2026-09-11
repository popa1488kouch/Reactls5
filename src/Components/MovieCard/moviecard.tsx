import React, { useState } from 'react';

interface MovieCardProps {
  title: string;
  genre: string;
  year: number;
}

export default function MovieCard({ title, genre, year }: MovieCardProps) {
  const [isFavorite, setIsFavorite] = useState<boolean>(false);

  const toggleFavorite = (): void => {
    setIsFavorite(!isFavorite);
  };

  return (
    <div style={cardStyle}>
      <h2>{title}</h2>
      <p><strong>Жанр:</strong> {genre}</p>
      <p><strong>Год:</strong> {year}</p>
      <button onClick={toggleFavorite} style={isFavorite ? activeBtnStyle : btnStyle}>
        {isFavorite ? '❤️ В избранном' : '🤍 В избранное'}
      </button>
    </div>
  );
}

const cardStyle: React.CSSProperties = {
  border: '1px solid #ccc',
  borderRadius: '8px',
  padding: '16px',
  width: '200px',
  boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
};

const btnStyle: React.CSSProperties = {
  padding: '8px 12px',
  cursor: 'pointer',
  backgroundColor: '#f0f0f0',
  border: '1px solid #aaa',
  borderRadius: '4px'
};

const activeBtnStyle: React.CSSProperties = {
  ...btnStyle,
  backgroundColor: '#ff4d4f',
  color: 'white',
  borderColor: '#ff4d4f'
};
