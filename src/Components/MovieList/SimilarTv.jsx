import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import MovieCard from '../MovieCard/MovieCard';

function SimilarTv() {
  const [similarTv, setSimilarTv] = useState([]);
  const { id } = useParams(); // Get movie ID from URL

  useEffect(() => {
    const fetchSimilarMovies = async () => {
      try {
        const apiKey = import.meta.env.VITE_APP_API_KEY; // Use your environment variable for API key
        const response = await fetch(
          `https://api.themoviedb.org/3/tv/${id}/similar?language=en-US&page=1&api_key=${apiKey}`
        );
        const data = await response.json();
        setSimilarTv(data.results || []);
      } catch (error) {
        console.error('Error fetching similar movies:', error);
        setSimilarTv([]); 
      }
    };

    fetchSimilarMovies();
  }, [id]); // Refetch when `id` changes

  return (
    <div className="bg-background text-white lg:px-8 py-8">
      <div className="items-center mb-8 mx-auto">
        <h2 className="text-2xl sm:pl-5 font-bold">Similar Tv Shows</h2>
      </div>
      <div className="flex overflow-x-scroll space-x-4 scrollbar-hide p-4" style={{ scrollBehavior: 'smooth' }}>
        {similarTv.map((tv) => (
          <Link to={`/tv/${tv.id}`} key={tv.id} className="min-w-[200px]">
            <MovieCard movie={tv} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default SimilarTv;
