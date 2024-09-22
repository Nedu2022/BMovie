import MovieCard from '../MovieCard/MovieCard';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function UpcomingMovieList() {
  const [upcomingMovies, setupcomingMovies] = useState([]);


  useEffect(() => {
    const fetchupcomingMovies = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_APP_BASE_URL}/movie/upcoming?api_key=${import.meta.env.VITE_APP_API_KEY}`
        );
        const data = await response.json();
        setupcomingMovies(data.results);
      } catch (error) {
        console.error("Error in Fetching movie data: ", error);
      }
    };

    fetchupcomingMovies();
  }, []);


  return (
    <div className="bg-background text-white lg:px-8 py-8">
      <div className="flex justify-between items-center mb-8  mx-auto">
        <h2 className="text-2xl sm:pl-5 font-bold">Upcoming Movies</h2>
       
      </div>

      <div className="flex overflow-x-scroll space-x-4 scrollbar-hide p-4" style={{ scrollBehavior: 'smooth' }}>
        {upcomingMovies.map((movie) => (
          <Link to={`/movie/${movie.id}`} key={movie.id} className="min-w-[200px]">
                      <MovieCard  movie={movie} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default UpcomingMovieList;
