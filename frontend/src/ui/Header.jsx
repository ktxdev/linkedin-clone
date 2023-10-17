import { Link, NavLink } from "react-router-dom";
import { HiHome, HiUsers, HiMiniMagnifyingGlass } from "react-icons/hi2";
import { GoTriangleDown } from "react-icons/go";
import Avatar from "./Avatar";
import { useMyProfile } from "../features/users/useMyProfile";

function Header() {
  const { user: { profileImageUrl } = {} } = useMyProfile();

  return (
    <header className="flex items-center justify-between max-w-7xl mx-auto">
      <div className="flex items-center gap-2">
        <Link to="feed">
          <img className="w-8 h-8" src="./linkedin-logo.svg" alt="logo" />
        </Link>
        <div className="bg-slate-200 rounded-md flex items-center gap-2 px-2 py-1 focus-within:border-2 focus-within:border-blue-500 ">
          <HiMiniMagnifyingGlass />
          <input
            className="bg-inherit outline-none placeholder:text-gray-600 focus:w-72 transition-transform duration-500"
            type="text"
            placeholder="Search"
          />
        </div>
      </div>
      <ul className="flex items-center gap-2">
        <li>
          <NavLink
            to="/feed"
            className="flex flex-col items-center text-gray-600 px-3 py-1"
          >
            <HiHome size={32} />
            <span className="text-xs">Home</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/mynetwork"
            className="flex flex-col items-center text-gray-600 px-3 py-1"
          >
            <HiUsers size={32} />
            <span className="text-xs">My Network</span>
          </NavLink>
        </li>
        <li>
          <button className="flex flex-col items-center text-gray-600 px-3 py-1">
            <Avatar size={8} avatar={profileImageUrl} />
            <span className="flex items-center">
              <span className="text-xs">Me</span>
              <GoTriangleDown />
            </span>
          </button>
        </li>
      </ul>
    </header>
  );
}

export default Header;
