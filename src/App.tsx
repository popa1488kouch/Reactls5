import ProductCard from "./Components/ProductCard/productcard";

function App() {
  return (
    <div style={{ padding: '20px', display: 'flex', flexWrap: 'wrap' }}>
      <ProductCard name="Беспроводные наушники" price={4990} />
      <ProductCard name="Умные часы" price={12990} />
      <ProductCard name="Портативная колонка" price={3500} />
    </div>
  );
}

export default App;
