import React, { useState } from "react";
import { Link } from "react-router-dom";

const ListOfCategories: React.FC = () => {
  const [isCategoriesOpen, setIsCategoriesOpen] = useState<boolean>(false);

  const categories: string[] = ["Tv Shows", "Movies", "Categories"];
  const subCategories: string[] = ["Action", "Comedy", "Drama", "Sci-Fi", "Fantasy"];

  const toggleCategories = (): void => {
    setIsCategoriesOpen(!isCategoriesOpen);
  };

  return (
    <div className="text-white px-6">
      <ul className="flex sm:flex-row gap-12 justify-center items-center">
        {categories.map((item, index) => (
          <li
            key={index}
            className="text-xl font-medium cursor-pointer py-4 relative"
          >
            {item === "Categories" ? (
              <div
                onClick={toggleCategories}
                className="hover:text-gray-400 transition-colors"
              >
                {item}
              </div>
            ) : (
              <Link to="#" className="hover:text-gray-400 transition-colors">
                {item}
              </Link>
            )}

            {/* Dropdown Menu */}
            {isCategoriesOpen && item === "Categories" && (
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-48 bg-gray-900 rounded-lg shadow-lg z-10">
                <ul className="py-2">
                  {subCategories.map((subItem, subIndex) => (
                    <li key={subIndex}>
                      <Link
                        to="#"
                        className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white transition-colors"
                      >
                        {subItem}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListOfCategories;
