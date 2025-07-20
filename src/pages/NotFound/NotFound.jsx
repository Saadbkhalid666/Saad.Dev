// 404.jsx
import React from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

export const NotFound = () => {
  return (
    <div className="h-screen bg-[#0f0f0f] flex flex-col items-center justify-center text-white text-center px-4">
      <h1 className="text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-500 animate-pulse">
        404
      </h1>
      <p className="text-2xl sm:text-3xl mt-4 font-semibold">
        Oops! Page not found
      </p>
      <p className="text-gray-400 mt-2 text-sm sm:text-base max-w-md">
        The page you're looking for doesn't exist, got deleted, or was never even real.
        Let’s get you back to something good!
      </p>

      <Link
        to="/"
        className="mt-6 inline-flex items-center gap-2 bg-gradient-to-r from-yellow-500 to-red-500 hover:from-red-500 hover:to-yellow-500 text-black font-bold py-2 px-6 rounded-full shadow-md transition-all duration-300"
      >
        <FaArrowLeft />
        Go Back Home
      </Link>

      <div className="absolute bottom-6 text-xs text-gray-600 tracking-wider">
        © {new Date().getFullYear()} | Built by Saad bro 🔥
      </div>
    </div>
  );
};

