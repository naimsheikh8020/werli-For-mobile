import { useState } from 'react';
import { Link } from 'react-router-dom';

import logo from "../assets/Group.png";
import search from "../assets/Vector.png";
import profile from "../assets/Ellipse 6.png";

// Assume the Card component is in a separate file, e.g., Card.jsx
import Card from './Card';

const Navbar = () => {
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [isCardOpen, setIsCardOpen] = useState(false);

    const toggleSearch = () => {
        setIsSearchOpen(!isSearchOpen);
        setIsCardOpen(false); // Close card if search is opened
    };

    const toggleCard = () => {
        setIsCardOpen(!isCardOpen);
        setIsSearchOpen(false); // Close search if card is opened
    };

    return (
        <div className="relative z-10">
            {/* Main Navbar */}
            <div className="flex justify-between items-center w-full p-6">
                <div>
                    <img src={logo} alt="Logo" className="h-10 w-auto" />
                </div>
                <div className="flex items-center gap-4">
                    <img
                        src={search}
                        alt="Search"
                        onClick={toggleSearch}
                        className="h-6 w-6 cursor-pointer"
                    />
                    <img
                        src={profile}
                        alt="Profile"
                        onClick={toggleCard}
                        className="h-10 w-10 rounded-full cursor-pointer"
                    />
                </div>
            </div>

            {/* Profile Card Overlay (positioned just below the navbar) */}
            {isCardOpen && (
                <div className="absolute right-6 mt-2">
                    <Card />
                </div>
            )}

            {/* Search Overlay */}
            {isSearchOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-90 flex flex-col items-center justify-center p-4 z-[1000]">
                    <div className="w-full max-w-xl relative">
                        <input
                            type="text"
                            placeholder="Search your dreams..."
                            className="w-full py-4 pl-12 pr-16 rounded-full bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 text-lg"
                        />
                        <button
                            onClick={toggleSearch}
                            className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-lg font-bold"
                        >
                            X
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Navbar;