import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../Footer';
import Header from '../Header/Header';
import SimilarTv from './SimilarTv';

const TvDetails = () => {
  const { id } = useParams(); // Access the TV show ID from the URL
  const [tv, setTv] = useState(null); // TV show details state
  const [cast, setCast] = useState([]); // Cast information state
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error handling

  const imageBaseUrl = "https://image.tmdb.org/t/p/original"; // Base URL for images

  useEffect(() => {
    const fetchTvDetails = async () => {
      try {
        // Fetch TV show details
        const tvRes = await fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=${import.meta.env.VITE_APP_API_KEY}`);
        if (!tvRes.ok) throw new Error('TV show not found');
        const tvData = await tvRes.json();
        setTv(tvData);

        // Fetch cast details
        const creditsRes = await fetch(`https://api.themoviedb.org/3/tv/${id}/credits?api_key=${import.meta.env.VITE_APP_API_KEY}`);
        if (!creditsRes.ok) throw new Error('Credits not found');
        const creditsData = await creditsRes.json();
        setCast(creditsData.cast.slice(0, 5)); // Limit cast to the first 5 actors

        setLoading(false); // Set loading to false when both API calls succeed
      } catch (err) {
        console.error('Error fetching TV show data:', err);
        setError(err.message);
        setLoading(false); // Set loading to false on error
      }
    };

    fetchTvDetails();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>; // Show loading state
  }

  if (error) {
    return <div>Error: {error}</div>; // Show error message
  }

  return (
    <>
      <div
        className="relative inset-0 h-screen w-full bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(to top right, rgba(8, 8, 8, 0.81), rgba(0, 0, 0, 0.7)), url(${imageBaseUrl}${tv.backdrop_path})`, // Apply gradient directly to background image
        }}
      >
        {/* Header and TV show details content */}
        <Header />

        <div className="tv-details p-6 text-white relative z-20">
          <div className="flex mt-36 ml-32 ">
            <img
              src={`${imageBaseUrl}${tv.poster_path}`}
              alt={tv.name}
              className="w-96 rounded-2xl shadow-3xl"
            />
            <div className="ml-6 max-w-screen-lg flex flex-col justify-center">
              <h1 className="text-6xl font-bold mb-6">{tv.name}</h1>
              <p>{tv.overview}</p>
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
        <h1 className="text-3xl font-bold text-center my-8">International Trailer</h1>
      </div>

      <SimilarTv />
      <Footer />
    </>
  );
};

export default TvDetails;
