import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header/Header';
import Similar from './MovieList/Similar';
import MovieTrailer from './MovieTrailer/MovieTrailer';
import LoadingPage from './Widgets/LoadingPage';
import ErrorPage from './Widgets/ErrorPage';

const MovieDetails = () => {
  const { id } = useParams(); // Access the movie ID from the URL
  const [movie, setMovie] = useState(null); // Movie details state
  const [cast, setCast] = useState([]); // Cast information state
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error handling

  const imageBaseUrl = "https://image.tmdb.org/t/p/original"; // Base URL for images

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        // Fetch movie details
        const movieRes = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${import.meta.env.VITE_APP_API_KEY}`);
        if (!movieRes.ok) throw new Error('Movie not found');
        const movieData = await movieRes.json();
        setMovie(movieData);

        // Fetch cast details
        const creditsRes = await fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${import.meta.env.VITE_APP_API_KEY}`);
        if (!creditsRes.ok) throw new Error('Credits not found');
        const creditsData = await creditsRes.json();
        setCast(creditsData.cast.slice(0,5)); // Set cast data with images

        setLoading(false); // Set loading to false when both API calls succeed
      } catch (err) {
        console.error('Error fetching movie data:', err);
        setError(err.message);
        setLoading(false); // Set loading to false on error
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (loading) {
    return <LoadingPage/>; // Show loading state
  }

  if (error) {
    return <ErrorPage/>; // Show error message
  }

  return (
    <>
      <div
        className="relative inset-0 h-screen w-full bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(to top right, rgba(8, 8, 8, 0.81), rgba(0, 0, 0, 0.7)), url(${imageBaseUrl}${movie.backdrop_path})`, // Apply gradient directly to background image
        }}
      >
        {/* Header and movie details content */}
        <Header />

        <div className="movie-details p-6 text-white relative z-20">
          <div className="flex mt-36 ml-32 ">
            <img
              src={`${imageBaseUrl}${movie.poster_path}`}
              alt={movie.title}
              className="w-96 rounded-2xl shadow-3xl"
            />
            <div className="ml-6 max-w-screen-lg flex flex-col justify-center">
              <h1 className="text-6xl font-bold mb-6">{movie.title}</h1>
              <p>{movie.overview}</p>
              <div className="flex flex-col">
              <h2 className="text-2xl mt-6">Cast:</h2>
              <div className='flex flex-row space-x-8'>
            {cast.map((actor) => (
              <div key={actor.id} className="text-center">
                <img
                  src={actor.profile_path ? `${imageBaseUrl}${actor.profile_path}` : 'https://via.placeholder.com/150'} // Default image if no profile picture is available
                  alt={actor.name}
                  className="w-24 h-24 object-cover rounded-lg"
                />
                <h3 className="text-sm align-center mt-2">{actor.name}</h3>
              </div>
            ))}
            </div>
          </div>
            </div>
          </div>




        </div>
      </div>

      <div>
        <MovieTrailer/>
      </div>

      <Similar />
      <Footer />
    </>
  );
};

export default MovieDetails;
