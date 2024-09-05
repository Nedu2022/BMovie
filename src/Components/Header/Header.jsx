import { TbCircleLetterBFilled } from "react-icons/tb";
import { IoSearchOutline } from "react-icons/io5";
import { CiBookmark } from "react-icons/ci";
import { FaRegCircleUser } from "react-icons/fa6";

function Header() {
  return (
    <div className="text-lg flex flex-row justify-around p-4 items-center bg-opacity-100">
      <h1 className="text-Ptext flex items-center opacity-90"><TbCircleLetterBFilled />Movie</h1>

      <nav>
        <ul className="flex space-x-8 text-Ptext">
          <li className="cursor-pointer hover:underline hover:decoration-Cred text-md hover:underline-offset-4 opacity-90">Home</li>
          <li className="cursor-pointer hover:underline hover:decoration-Cred text-md hover:underline-offset-4 opacity-90">Movies</li>
          <li className="cursor-pointer hover:underline hover:decoration-Cred text-md hover:underline-offset-4 opacity-90">Series</li>
        </ul>
      </nav>

      <div className="flex items-center space-x-8 text-Ptext">
        <span className="opacity-90"><IoSearchOutline /></span>
        <span className="opacity-90"><CiBookmark /></span>
        <span className="flex items-center space-x-3">
          <p className="text-md opacity-90">Account</p>
          <FaRegCircleUser className="opacity-90" />
        </span>
      </div>
    </div>
  );
}

export default Header;
