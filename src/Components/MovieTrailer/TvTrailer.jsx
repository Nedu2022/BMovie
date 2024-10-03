import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LoadingPage from "../Widgets/LoadingPage";
import NoTrailerPage from "../Widgets/NoTrailerPage";

const MovieTrailer = () => {
  const { id } = useParams();
  const [tvtrailer, setTvTrailer] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTrailer = async () => {
      try {
        const movieResponse = await fetch(
          `https://api.themoviedb.org/3/tv/${id}/videos?api_key=${import.meta.env.VITE_APP_API_KEY}`
        );

        // Handle response errors
        if (!movieResponse.ok) throw new Error("Movie not found");

        const movieData = await movieResponse.json();

        // Log the movieData results to inspect the API response
        console.log("Movie Data Results:", movieData.results);

        // Find the official YouTube trailer from the results
        const trailerVideo = movieData.results.find(
          (video) => video.type === "Trailer" && video.site === "YouTube"
        );

        // Log the found trailer (if any)
        console.log("Trailer Video:", trailerVideo);

        // If a trailer is found, set the YouTube video key
        setTvTrailer(trailerVideo ? trailerVideo.key : null);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching movie trailer:", err);
        setError(err.message);
        setLoading(false);
      }
    };

    fetchTrailer();
  }, [id]);

  // Display loading page while fetching trailer
  if (loading) {
    return <LoadingPage />;
  }

  // Display error message if there's an error during fetch
  if (error) {
    return <div className="text-red-500 text-center">{error}</div>;
  }

  // Show NoTrailerPage if no trailer is found
  if (!tvtrailer) {
    console.log("No trailer available, showing NoTrailerPage");
    return <NoTrailerPage h1="No Trailer Available" p="Sorry, the trailer for this movie is not currently available." />;
  }

  // If trailer exists, render the YouTube iframe
  return (
    <div className="movie-trailer flex items-center justify-center bg-black py-8">
      <div className="w-full max-w-5xl mx-auto bg-black flex items-center justify-center px-4">
        <iframe
          width="100%"
          height="500"
          src={`https://www.youtube.com/embed/${tvtrailer}`}
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
