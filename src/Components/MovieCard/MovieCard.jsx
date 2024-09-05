import PropTypes from 'prop-types';

function MovieCard({ movie }) {
  return (
    <><div className="flex flex-col ">
      <img src={movie.posterImage} alt={movie.title} className="w-48 h-72 mb-2 rounded-3xl object-cover" />
      <h3 className="text-lg font-bold">{movie.title}</h3>
    </div></>
  );
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    posterImage: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  }).isRequired
}

export default MovieCard
