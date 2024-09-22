import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MovieTrailer = () => {
  const { id } = useParams();
  const [trailer, setTrailer] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTrailer = async () => {
      try {
        const movieResponse = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${import.meta.env.VITE_APP_API_KEY}`);
        if (!movieResponse.ok) throw new Error('Movie is not found');
        const movieData = await movieResponse.json();

        // Find the official YouTube trailer from the results
        const trailerVideo = movieData.results.find(
          (video) => video.type === 'Trailer' && video.site === 'YouTube'
        );
        
        // If a trailer is found, set the YouTube video key
        setTrailer(trailerVideo ? trailerVideo.key : null);
        setLoading(false);
      
      } catch (err) {
        console.error('Error fetching movie trailer:', err);
        setError(err.message);
        setLoading(false);
      }
    };

    fetchTrailer();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>; // Show loading state
  }

  if (error) {
    return <div>Error: {error}</div>; // Show error message
  }

  if (!trailer) {
    return <div>No trailer available.</div>; // Handle case when no trailer is found
  }

  return (
<div className="movie-trailer flex items-center justify-center bg-black py-8">
  <div className="w-full max-w-5xl mx-auto bg-black flex items-center justify-center px-4">
    <iframe
      width="100%"
      height="500"
      src={`https://www.youtube.com/embed/${trailer}`}
      title="Movie Trailer"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  </div>
</div>

  );
};

export default MovieTrailer;
