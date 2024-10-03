import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import MovieCard from '../MovieCard/MovieCard';
import NoTrailerPage from '../Widgets/NoTrailerPage';

function SimilarMovies() {
  const [similarMovies, setSimilarMovies] = useState([]);
  const { id } = useParams(); // Get movie ID from URL

  useEffect(() => {
    const fetchSimilarMovies = async () => {
      try {
        const apiKey = import.meta.env.VITE_APP_API_KEY; // Use your environment variable for API key
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}/similar?language=en-US&page=1&api_key=${apiKey}`
        );
        const data = await response.json();
        setSimilarMovies(data.results || []);
      } catch (error) {
        console.error('Error fetching similar movies:', error);
        setSimilarMovies([]); 
      }
    };

    fetchSimilarMovies();
  }, [id]); // Refetch when `id` changes

  return (
    <div className="bg-background text-white lg:px-8 py-8">
      <div className="items-center mb-8 mx-auto">
        <h2 className="text-2xl sm:pl-5 font-bold">Similar Movies</h2>
      </div>

      {similarMovies.length > 0 ? (

      
      <div className="flex overflow-x-scroll space-x-4 scrollbar-hide p-4" style={{ scrollBehavior: 'smooth' }}>
        {similarMovies.map((movie) => (
          <Link to={`/movie/${movie.id}`} key={movie.id} className="min-w-[200px]">
            <MovieCard movie={movie} />
          </Link>
        ))}
      </div>
      ) : <NoTrailerPage h1="No Similar Movies Available" p="Sorry, there are no similar movie available."/>}


    </div>
  );
}

export default SimilarMovies;
