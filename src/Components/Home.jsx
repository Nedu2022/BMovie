import { useEffect, useState } from "react";
import Header from './Header/Header';
import HeroSlide from './Hero-Slide/HeroSlide';
import UpcomingMovieList from './MovieList/UpcomingMovieList';
import TrendingMovieList from './MovieList/TrendingMovieList';
import TopRatedMovies from './MovieList/TopRatedMovieList';
import PopularMovies from './MovieList/PopularMovieList';

function App() {
  const [movies, setMovies] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_APP_BASE_URL}/movie/now_playing?api_key=${import.meta.env.VITE_APP_API_KEY}`
        );
        const data = await response.json();
        setMovies(data.results);
      } catch (error) {
        console.error("Error in Fetching movie data: ", error);
      }
    };

    if (movies.length > 0) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % movies.length);
      }, 10000);

      return () => clearInterval(interval); // Cleanup interval on component unmount
    }

    fetchMovies();
  },  [movies],[]);


  // Get the current movie based on currentIndex
  const currentMovie = movies[currentIndex];

  return (
    <>
      <div
        className="inset-0 h-screen w-full bg-cover bg-center"
        style={{
          backgroundImage: currentMovie
            ? `url(https://image.tmdb.org/t/p/original${currentMovie.poster_path})`
            : "none"
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top right, rgba(8, 8, 8, 0.81), rgba(0, 0, 0, 0.7))",
          }}
        />
        <Header />
        {currentMovie && <HeroSlide currentMovie={currentMovie} />}
      </div>
      <UpcomingMovieList />
      <TrendingMovieList />
      <TopRatedMovies />
      <PopularMovies />
    </>
  );
}

export default App;
