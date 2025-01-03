import React, { useState } from "react";
import logo from "../assets/spectacom-logo.webp";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-black py-4 flex justify-between items-center px-6 md:px-10">
      <div>
        <img
          src={logo}
          className="h-10  w-auto" 
          alt="Logo"
        />
      </div>

      <button
        onClick={toggleMenu}
        className="text-white md:hidden focus:outline-none"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
          />
        </svg>
      </button>

      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } absolute top-16 left-0 w-full bg-black md:static md:w-auto md:flex md:bg-transparent text-white z-10`}
      >
        <ol className="flex flex-col md:flex-row gap-4 md:gap-8 lg:gap-16 text-sm p-4 md:p-0">
          <li className="text-[#B89840] hover:text-white cursor-pointer">HOME</li>
          <li className="hover:text-[#B89840] cursor-pointer">FEATURES</li>
          <li className="hover:text-[#B89840] cursor-pointer">COMMUNITY</li>
          <li className="hover:text-[#B89840] cursor-pointer">CAREER</li>
          <li className="hover:text-[#B89840] cursor-pointer">CONTACT</li>
        </ol>
      </div>
    </div>
  );
}

export default Header;
