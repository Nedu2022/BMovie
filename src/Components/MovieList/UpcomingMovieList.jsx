import MovieCard from '../MovieCard/MovieCard';
import { useEffect, useState } from 'react';

function UpcomingMovieList() {
  const [upcomingMovies, setupcomingMovies] = useState([]);

  useEffect(() => {
    const fetchUpcomingMovies = async () => {
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

    fetchUpcomingMovies();
  }, []);

  return (
    <div className="bg-background text-white px-8 py-8">
      <div className="flex justify-between items-center mb-8 mx-auto">
        <h2 className="text-2xl font-bold">Upcoming Movies</h2>
      </div>

      {/* Scrollable container for movie cards */}
      <div className="flex overflow-x-scroll space-x-4 scrollbar-hide p-4" style={{ scrollBehavior: 'smooth' }}>
        {upcomingMovies.map((movie) => (
          <div className="min-w-[200px]">
            <MovieCard key={movie.id} movie={movie} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default UpcomingMovieList;
