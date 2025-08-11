import React from "react";
import { motion } from "framer-motion";

const ProductShow = () => {
  return (
    <div
      className="
        flex flex-col lg:flex-row items-center lg:items-start
        justify-between px-4 sm:px-10 py-10
      "
    >
      {/* First Text - Mobile/Tablet above image */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 30 }}
        transition={{ duration: 0.6 }}
        viewport={{ amount: 0.3 }} // Trigger when 30% visible
        className="
          block lg:hidden text-xl sm:text-2xl font-bold text-black
          mb-4 text-center
        "
      >
        Immerse yourself in rich, powerful sound with unmatched clarity.
      </motion.h2>

      {/* Left: Product Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ amount: 0.3 }}
        className="lg:pl-32 flex-shrink-0"
      >
        <img
          src="src/assets/headset/show-1.png"
          alt="Vortex Aero Pro"
          className="w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] object-cover"
        />
      </motion.div>

      {/* Right: Text content */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 40 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ amount: 0.3 }}
        className="
          flex flex-col text-center lg:text-left
          mt-4 pt-4 lg:mt-6 max-w-[700px]
        "
      >
        {/* First Text - Desktop only */}
        <h2
          className="
            hidden lg:block text-3xl font-bold text-black
            mb-5 lg:mt-24 lg:mr-20
          "
        >
          Immerse yourself in rich, powerful sound with unmatched clarity.
        </h2>

        {/* Second Text */}
        <p
          className="
            text-base sm:text-xl font-normal text-[#404040]
            mb-4 sm:mb-8
          "
        >
          Vortex Aero Pro delivers powerful audio with clarity and style
        </p>
      </motion.div>
    </div>
  );
};

export default ProductShow;
