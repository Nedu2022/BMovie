import PropTypes from 'prop-types';

function MovieCard({ movie }) {
  const posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  return (
    <div className="flex flex-col">
      <img
        src={posterUrl}
        alt={movie.title}
        className="w-48 h-72 mb-2 rounded-3xl object-cover"
      />
      <h3 className="text-sm font-bold">{movie.title}</h3>
    </div>
  );
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    poster_path: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default MovieCard;
