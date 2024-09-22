import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function HeroSlide({ currentMovie }) {
  if (!currentMovie) {
    return <div>Loading...</div>; 
  }

  return (
    <div className="py-10 sm:pl-5 lg:pl-24 text-white relative max-w-screen-lg h-full justify-center flex flex-col">
      <p className="border-l-2 pl-1 border-Cred text-white text-xs">
        NEW RELEASES
      </p>
      <h1 className="lg:text-6xl sm:text-xl font-bold py-3">{currentMovie.original_title}</h1>
      <div className="flex items-center gap-10 py-2 sm:hidden">
        <div className="flex items-center ">
          <img
            className="w-12 pr-2"
            src="http://digiflex.themezinho.net/wp-content/themes/digiflex/images/imdb-logo.svg"
            alt="IMDB"
          />
          <span>{currentMovie.vote_average.toFixed(1)}</span>
        </div>
        <p>{currentMovie.release_date}</p>
        <p>4k Ultra HD</p>
        <span className="flex items-center gap-3">
          <p>{currentMovie.original_language}</p>
        </span>
      </div>
      <p className="text-sm pt-5">{currentMovie.overview}</p>
      <Link  to={`/movie/${currentMovie.id}`}  className="rounded-full bg-red w-fit border-2 mt-10 px-10 py-3 hover:bg-Cred hover:border-Cred">
        Watch Now
      </Link>
    </div>
  );
}

HeroSlide.propTypes = {
  currentMovie: PropTypes.object.isRequired
};

export default HeroSlide;
