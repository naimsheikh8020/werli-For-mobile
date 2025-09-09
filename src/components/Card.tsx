import React from 'react';
import { Link } from 'react-router-dom';
import profileImage from "../assets/profileImage.jpg";
import profileIcon from "../assets/profileIcon.png";
import coolicon from "../assets/coolicon.png";
import watchHistory from "../assets/watch_history.png";
import leave from "../assets/Frame.png";

const Card = () => {
  return (
    <div className="w-full max-w-sm bg-[#21222C] rounded-xl shadow-lg overflow-hidden text-white mx-auto my-10">
      {/* Profile Header Section */}
      <div className="flex flex-col items-center p-6 border-b border-gray-700">
        <img
          src={profileImage}
          alt="Profile"
          className="w-24 h-24 rounded-full border-4 border-gray-600 object-cover"
        />
        <h2 className="mt-4 text-xl font-semibold">Awad Arman</h2>
      </div>

      {/* Navigation Links Section */}
      <nav className="py-2">
        {/* Profile Link */}
        <Link to="/profile" className="flex items-center p-4 border-b border-gray-700 hover:bg-gray-800 transition-colors duration-200">
          <img src={profileIcon} alt="Profile Icon" className="h-6 w-6 mr-4" />
          <span className="text-lg">Profile</span>
        </Link>

        {/* My List Link */}
        <Link to="/my-list" className="flex items-center p-4 border-b border-gray-700 hover:bg-gray-800 transition-colors duration-200">
          <img src={coolicon} alt="My List Icon" className="h-6 w-6 mr-4" />
          <span className="text-lg">My List</span>
        </Link>

        {/* Watch History Link */}
        <Link to="/watch-history" className="flex items-center p-4 border-b border-gray-700 hover:bg-gray-800 transition-colors duration-200">
          <img src={watchHistory} alt="Watch History Icon" className="h-6 w-6 mr-4" />
          <span className="text-lg">Watch History</span>
        </Link>

        {/* Unsubscribe Link */}
        <Link to="/unsubscribe" className="flex items-center p-4 text-red-500 hover:bg-gray-800 transition-colors duration-200">
          <img src={leave} alt="Unsubscribe Icon" className="h-6 w-6 mr-4" />
          <span className="text-lg">Unsubscribe</span>
        </Link>
      </nav>
    </div>
  );
};

export default Card;