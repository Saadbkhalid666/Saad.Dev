import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { Link } from "react-scroll"; // Import Link from react-scroll
import "./Navbar.css"; // Import custom CSS

export function Navbar() {
  const [navOpen, setNavOpen] = useState(false);

  const navItems = ["HOME", "ABOUT", "SKILLS", "SERVICES", "PROJECTS", "CONTACT"];

  return (
    <nav className="bg-black/20 backdrop-blur-sm text-white px-4 py-3 fixed top-0 left-0 w-full z-50 border-b-2 border-b-[#ffff70]">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold">Saad.Dev</h1>

        {/* Hamburger Icon */}
        <div
          className="md:hidden text-3xl cursor-pointer"
          onClick={() => setNavOpen(!navOpen)}
        >
          {navOpen ? <HiX /> : <HiMenu />}
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <li key={item} className="relative">
              <Link
                to={item.toLowerCase()} // Link corresponds to the section ID
                smooth={true}
                duration={500}
                offset={-70}
                className="cursor-pointer"
                activeClass="active-link" // Add activeClass
                spy={true} // Ensures the active class gets added when the section is in view
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#ffff70] transition-all duration-300" />
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Menu */}
      {navOpen && (
        <ul className="md:hidden mt-4 space-y-3 flex flex-col bg-black p-4 rounded-md">
          {navItems.map((item) => (
            <li key={item} className="relative">
              <Link
                to={item.toLowerCase()} // Link corresponds to the section ID
                smooth={true}
                duration={500}
                offset={-70}
                className="cursor-pointer"
                activeClass="active-link" // Add activeClass
                spy={true} // Ensures the active class gets added when the section is in view
              >
                {item}
                <span className="block h-[2px] w-0 bg-[#ffff70] transition-all duration-300" />
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
