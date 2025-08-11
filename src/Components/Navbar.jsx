import React from "react";
import { FaCartShopping } from "react-icons/fa6";

const Navbar = ({ cartCount }) => {
  return (
    <nav className="w-full flex flex-row justify-between items-center px-7 py-3 bg-[#99ff00] text-black">
      {/* Brand Name */}
      <h1 className="text-2xl md:text-3xl font-bold font-museo">Vortex</h1>

      {/* Cart Icon with Badge */}
      <div className="relative cursor-pointer">
        <FaCartShopping className="text-current size-5 md:size-6" />
        {cartCount > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full animate-bounce">
            {cartCount}
          </span>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
