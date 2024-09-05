import MovieCard from '../MovieCard/MovieCard';
import topRatedMovies from '../../data/popularMovies'

function PopularMovies() {
  return (
    <div className="bg-background text-white px-8 py-8">
      <div className="flex justify-between items-center mb-8 mx-auto">
        <h2 className="text-2xl font-bold">Popular Movies</h2>
        <button className="rounded-full border-2 px-3 py-1 border-Ptext">View more</button>
      </div>
      <div className="flex flex-wrap justify-center gap-5 mx-auto">
        {topRatedMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default PopularMovies;
