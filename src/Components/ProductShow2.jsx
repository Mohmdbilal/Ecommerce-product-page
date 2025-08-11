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
        className="flex flex-col md:flex-row items-center gap-6 md:gap-8 max-w-5xl"
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

        {/* Points */}
        <ul className="text-black text-sm md:text-md max-w-xl md:max-w-[600px] leading-relaxed">
          <li>
            <strong className="text-[#87cf1a] text-sm md:text-xl">
              Sleek Charging Case
            </strong>{" "}
            – Compact, stylish, and pocket-friendly
          </li>
          <li>
            <strong className="text-[#87cf1a] text-sm md:text-xl">
              Fast Charging
            </strong>{" "}
            – Get hours of playback in just minutes.
          </li>
          <li>
            <strong className="text-[#87cf1a] text-sm md:text-xl">
              LED Battery Indicator
            </strong>{" "}
            – Know your charge level at a glance.
          </li>
          <li>
            <strong className="text-[#87cf1a] text-sm md:text-xl">
              Secure Fit Storage
            </strong>{" "}
            – Keeps your earpods safe and protected.
          </li>
        </ul>
      </motion.div>

      {/* Row 2 */}
      <motion.div
        className="flex flex-col md:flex-row items-center gap-6 md:gap-8 max-w-5xl"
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

        {/* Points */}
        <ul className="text-black text-sm md:text-md max-w-xl md:max-w-[600px] leading-relaxed">
          <li>
            <strong className="text-[#87cf1a] text-sm md:text-xl">
              Ergonomic Comfort
            </strong>{" "}
            – Designed for all-day wear without fatigue.
          </li>
          <li>
            <strong className="text-[#87cf1a] text-sm md:text-xl">
              Crystal-Clear Audio
            </strong>{" "}
            – Hear every note with stunning clarity.
          </li>
          <li>
            <strong className="text-[#87cf1a] text-sm md:text-xl">
              Touch Controls
            </strong>{" "}
            – Play, pause, skip, or answer calls with a tap.
          </li>
          <li>
            <strong className="text-[#87cf1a] text-sm md:text-xl">
              Sweat & Water Resistant
            </strong>{" "}
            – Perfect for workouts and daily use.
          </li>
        </ul>
      </motion.div>
    </section>
  );
};

export default ProductFeatures;
