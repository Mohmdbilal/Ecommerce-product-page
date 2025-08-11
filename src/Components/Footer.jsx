import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#2E2E2E] w-full py-6 px-6 md:px-12 border-t border-gray-700">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <h1
          className="text-white text-2xl md:text-3xl font-bold font-museo cursor-pointer
                     hover:text-[#87cf1a] transition-colors duration-300"
          title="Vortex Brand"
        >
          Vortex
        </h1>
        <p className="text-gray-400 text-sm md:text-base select-none">
          &copy; {new Date().getFullYear()} Vortex. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
