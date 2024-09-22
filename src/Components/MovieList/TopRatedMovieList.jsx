import MovieCard from "../MovieCard/MovieCard";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function TopRatedMovies() {
  const [topRatedMovies, settopRatedMovies] = useState([]);

  useEffect(() => {
    const fetchtopratedMovies = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_APP_BASE_URL}/movie/top_rated?api_key=${
            import.meta.env.VITE_APP_API_KEY
          }`
        );
        const data = await response.json();
        settopRatedMovies(data.results);
      } catch (error) {
        console.error("Error in Fetching Top Rated movie:", error);
      }
    };

    fetchtopratedMovies();
  });

  return (
    <div className="bg-background text-white lg:px-8 py-8">
      <div className="items-center mb-8 mx-auto">
        <h2 className="text-2xl sm:pl-5 font-bold">Top Rated Movies</h2>
      </div>
      <div
        className="flex overflow-x-scroll space-x-4 scrollbar-hide p-4"
        style={{ scrollBehavior: "smooth" }}
      >
        {topRatedMovies.map((movie) => (
          <Link to={`/movie/${movie.id}`}  key={movie.id} className="min-w-[200px]">
            <MovieCard movie={movie} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default TopRatedMovies;
