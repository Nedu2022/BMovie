
import Header from './Header/Header';
import HeroSlide from './Hero-Slide/HeroSlide';
import UpcomingMovieList from './MovieList/UpcomingMovieList';
import TrendingMovieList from './MovieList/TrendingMovieList';
import TopRatedMovies from './MovieList/TopRatedMovieList';
import PopularMovies from './MovieList/PopularMovieList';

function App() {
  return (
    <><div className="bg-cover bg-no-repeat bg-center h-screen" >
      <Header />
      <HeroSlide />
    </div>
      <UpcomingMovieList/>
      <TrendingMovieList/>
      <TopRatedMovies/>
      <PopularMovies/>
    </>
  );
}

export default App;
