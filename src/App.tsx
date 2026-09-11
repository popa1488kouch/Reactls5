import MovieCard from "./Components/MovieCard/moviecard";
function App() {
  return (
    <div style={{ padding: '20px', display: 'flex', flexWrap: 'wrap' }}>
      <MovieCard title="Интерстеллар" genre="Научная фантастика" year={2014} />
      <MovieCard title="Начало" genre="Триллер/Экшен" year={2010} />
      <MovieCard title="Темный рыцарь" genre="Комикс/Драма" year={2008} />  
    </div>
  );
}

export default App;
