import MovieCard from '../MovieCard/MovieCard';
import dummyMovies from '../../data/upcomingMovies';

function UpcomingMovieList() {
  return (
    <div className="bg-background text-white px-8 py-8">


      <div className="flex justify-between items-center mb-8  mx-auto">
        <h2 className="text-2xl font-bold">Upcoming Movies</h2>
        <button className="rounded-full border-2 px-3 py-1 border-Ptext">View more</button>
      </div>


      <div className="flex flex-wrap justify-center gap-5  mx-auto">
        {dummyMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>


      
    </div>
  );
}

export default UpcomingMovieList;
