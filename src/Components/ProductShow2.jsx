import React from "react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 50 },
};

const ProductFeatures = () => {
  return (
    <section className="w-full flex flex-col items-center justify-center gap-10 px-4">
      {/* Row 1 */}
      <motion.div
        className="flex flex-col md:flex-row items-center text-center md:text-left gap-6 md:gap-8 max-w-5xl"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        exit="exit"
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        {/* Image */}
        <img
          src="/images/headset/show-2.png"
          alt="Charging Case"
          className="w-[180px] h-[180px] md:w-[200px] md:h-[200px] object-cover rounded-lg"
        />

        {/* Short Paragraph */}
        <p className="text-black text-md md:text-md max-w-xl md:max-w-[600px] leading-relaxed font-bold">
          Sleek Charging Case with fast charging, LED battery indicator, and
          secure storage for your earbuds.
        </p>
      </motion.div>

      {/* Row 2 */}
      <motion.div
        className="flex flex-col md:flex-row items-center text-center md:text-left gap-6 md:gap-8 max-w-5xl"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        exit="exit"
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {/* Image */}
        <img
          src="/images/headset/show-3.png"
          alt="Earbuds Comfort"
          className="w-[180px] h-[180px] md:w-[200px] md:h-[200px] object-cover rounded-lg"
        />

        {/* Short Paragraph */}
        <p className="text-black text-md md:text-md max-w-xl md:max-w-[600px] leading-relaxed font-bold">
          Ergonomic Comfort with crystal-clear audio, touch controls, and sweat
          & water resistance for active use.
        </p>
      </motion.div>
    </section>
  );
};

export default ProductFeatures;
