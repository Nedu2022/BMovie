import { useEffect, useState } from "react";
import movies from "../../data/movies"; // Make sure this path is correct
import BorderlandsImage from "../../assets/images/Borderlands.png"; // Ensure path is correct

function HeroSlide() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically switch movies every 5 seconds, cycling from last to first
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % movies.length); // Forward cycle only
    }, 5000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  const currentMovie = movies[currentIndex]; // Get the current movie based on currentIndex

  return (
    <div
      className="relative h-screen w-full bg-cover bg-center flex items-center pl-40"
      style={{ backgroundImage: `url(${currentMovie.posterImage})` }} // Dynamically set background image
    >
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to top right, #080808, #000000)',
          opacity: 0.81,
          zIndex: 1,
        }}
      />
      <div
        className="w-full h-full flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)`, zIndex: 2 }}
      >
        <div className="w-full flex-shrink-0 h-full">
          <div className="py-10 text-white">
            <p className="border-l-2 pl-1 border-Cred text-Stext text-xs">
              NEW RELEASES
            </p>
            <h1 className="text-6xl font-bold mb-4">{currentMovie.title}</h1>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <img
                  className="w-12 pr-2"
                  src="http://digiflex.themezinho.net/wp-content/themes/digiflex/images/imdb-logo.svg"
                  alt="IMDB"
                />
                <span>{currentMovie.rating}</span>
              </div>
              <p>{currentMovie.year}</p>
              <p>{currentMovie.quality}</p>
              <p>{currentMovie.time}</p>
              <div className="rounded-full border-2 p-1">CC</div>
            </div>
            <p className="text-sm pt-5">{currentMovie.description}</p>
            <button className="rounded-full bg-red border-2 mt-12 px-10 py-3 hover:bg-Cred hover:border-Cred">
              Watch Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSlide;
