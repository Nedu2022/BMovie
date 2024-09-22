import backgroungImage from "../assets/images/wallpaper.jpeg";
import { TbCircleLetterBFilled } from "react-icons/tb";

const Footer = () => {
  return (
    <div
      className="h-96 relative inset-0 w-full bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroungImage})` }}
    >
      {/* Dark gradient overlay */}
      <span
        className="absolute inset-0 "
        style={{
          background:
            "linear-gradient(to bottom right, rgba(8, 8, 8, 0.91), rgba(0, 0, 0, 0.8))"
        }}
      ></span>

      {/* Content */}
      <div className="text-white  flex flex-col justify-center h-full opacity-90">
        <span className="text-4xl lg:pb-8 flex justify-center items-center">
        <TbCircleLetterBFilled /> Movie
        </span>
     
        <div className="flex lg:justify-around sm:flex-col sm:pl-5 lg:flex-row lg:items-center">
          <div className="pb-6">
            <p className="hover:text-Cred">Home</p>
            <p className="hover:text-Cred">Contact Us</p>
            <p className="hover:text-Cred">Terms of services</p>
            <p className="hover:text-Cred">About us</p>
          </div>

          <div className="pb-6">
            <p className="hover:text-Cred">Live</p>
            <p className="hover:text-Cred">FAQ</p>
            <p className="hover:text-Cred">Premium</p>
            <p className="hover:text-Cred">Privacy Policy</p>
          </div>

          <div className="pb-6">
            <p className="hover:text-Cred">You must watch</p>
            <p className="hover:text-Cred">Recent Release</p>
            <p className="hover:text-Cred">Top IMDB</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
