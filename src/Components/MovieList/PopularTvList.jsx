import { Link } from 'react-router-dom';
import MovieCard from '../MovieCard/MovieCard';
import { useEffect, useState } from 'react';

function PopularTvList() {
  const [popularTv, setpopularTv] = useState([]);

  useEffect(() => {
    const fetchpopularTv = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_APP_BASE_URL}/tv/popular?api_key=${import.meta.env.VITE_APP_API_KEY}`);
        const data = await response.json();
        setpopularTv(data.results)
      } catch (error) {
        console.log("Error in Fetching Popular Movies:", error)
      }
    }

    fetchpopularTv();
  },[])
  return (
    <div className="bg-background text-white lg:px-8 py-8">
      <div className="items-center mb-8 mx-auto">
        <h2 className="text-2xl sm:pl-5 font-bold">Popular Tv Shows</h2>
      </div>
      <div className="flex overflow-x-scroll space-x-4 scrollbar-hide p-4" style={{scrollBehavior: 'smooth'}}>
        {popularTv.map((tv) => (
          <Link to={`/tv/${tv.id}`} key={tv.id} className='min-w-[200px]'>
               <MovieCard  movie={tv} />
          </Link>
       
        ))}
      </div>
    </div>
  );
}

export default PopularTvList;
