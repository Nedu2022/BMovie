import PropTypes from 'prop-types';

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title || movie.name} // Use movie.title for movies and movie.name for TV shows
        className="movie-card-image"
      />
      <h3>{movie.title || movie.name}</h3> {/* Use title for movies, name for TV shows */}
    </div>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,  // Make this optional
    name: PropTypes.string,   // Add name for TV shows
    poster_path: PropTypes.string.isRequired,
  }).isRequired,
};

export default MovieCard;
