import React from 'react';
import { ProductCard } from './ProductCard';

const App: React.FC = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Список товаров</h1>
      
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        <ProductCard 
          name="Смартфон" 
          price={49999} 
          category="Электроника" 
        />
        <ProductCard 
          name="Кроссовки" 
          price={7500} 
          category="Обувь" 
        />
        <ProductCard 
          name="Кофеварка" 
          price={12300} 
          category="Бытовая техника" 
        />
      </div>
    </div>
  );
};

export default App;
