import React, { useState, useEffect } from "react";
import Navbar from "./Navbar"; // Import Navbar here

const Hero = () => {
  const images = [
   "/images/headset/View-1.png",
  "/images/headset/View-2.png",
  "/images/headset/View-3.png",
  "/images/headset/View-4.png",
  "/images/headset/View-5.png",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [cartCount, setCartCount] = useState(0);
  const [showBuyNowPopup, setShowBuyNowPopup] = useState(false);

  // Auto-slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  const handleThumbnailClick = (index) => {
    setCurrentIndex(index);
  };

  const handleAddToCart = () => {
    setCartCount(cartCount + 1);
  };

  const handleBuyNow = () => {
    setShowBuyNowPopup(true);
    setTimeout(() => setShowBuyNowPopup(false), 2000); // auto-close after 2s
  };

  return (
    <>
      {/* Pass cartCount to Navbar */}
      <Navbar cartCount={cartCount} />

      <div className="flex flex-col sm:flex-row sm:items-start gap-4 px-4 py-4 justify-between">
        {/* Left side */}
        <div className="flex flex-col sm:flex-row gap-4 items-center sm:items-start">
          {/* Thumbnails */}
          <div className="flex sm:flex-col gap-3 sm:pt-10 order-2 sm:order-1">
            {images.map((img, index) => (
              <img
                key={index}
                onClick={() => handleThumbnailClick(index)}
                className={`w-[55px] h-[55px] lg:w-[100px] lg:h-[100px] object-cover cursor-pointer border rounded-2xl ${
                  index === currentIndex ? "border-gray-600" : "border-gray-300"
                }`}
                src={img}
                alt={`Aero pro ${index + 1}`}
              />
            ))}
          </div>

          {/* Main Image */}
          <div className="order-1 sm:order-2">
            <img
              className="w-[300px] h-[300px] lg:w-[500px] lg:h-[500px] object-cover rounded-lg"
              src={images[currentIndex]}
              alt="Aero pro"
            />
          </div>
        </div>

        {/* Right side */}
        <div className="w-full sm:w-[600px] sm:h-[650px] bg-[#2E2E2E] text-white rounded-2xl p-6 sm:p-10">
          <h2 className="text-xl sm:text-2xl font-bold mb-2">Vortex Aero Pro</h2>
          <p className="text-sm mb-6 text-[#a5a5a5]">
            Clear highs and deep bass, Wireless Adaptive Hybrid ANC, up to 80 hours playback
          </p>
          <p className="text-2xl sm:text-3xl font-semibold mb-4 pt-3">₹2,499</p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 mb-8">
            <button
              onClick={handleBuyNow}
              className="px-4 py-2 bg-[#99ff00] text-md text-black hover:text-[#2e2e2e] font-bold rounded-xl hover:bg-[#a7a7a7] mt-1"
            >
              Buy Now
            </button>

            <button
              onClick={handleAddToCart}
              className="px-4 py-2 bg-[#dcdcdc] text-md text-black hover:text-[#2e2e2e] font-bold rounded-xl hover:bg-[#a7a7a7] mt-1"
            >
              Add To Cart
            </button>
          </div>

          {/* Popup for Buy Now */}
          {showBuyNowPopup && (
            <div className="fixed top-1/4 left-1/2 transform -translate-x-1/2 bg-white text-black px-6 py-4 rounded-xl shadow-lg animate-fade-in">
              ✅ Order placed successfully!
            </div>
          )}

          {/* Color Info */}
          <div className="mt-6">
            <p className="text-md font-semibold mb-2">Color: Black</p>
            <img
              src="/images/headset/View-1.png"
              alt="Black color"
              className="h-[50px] w-auto rounded"
            />
          </div>

          {/* Key Features Section */}
          <div className="mt-8">
            <h3 className="text-md font-semibold mb-4 text-[#a5a5a5]">
              Key Features
            </h3>

            <div className="grid grid-cols-2 gap-2 gap-y-3">
              <div className="flex flex-col items-center gap-2">
                <img
                  src="/images/features/Vector-1.png"
                  alt="Feature 1"
                  className="w-[50px] h-[50px] rounded object-cover"
                />
                <p className="text-sm text-[#a5a5a5]">High-Fidelity Acoustics</p>
              </div>

              <div className="flex flex-col items-center gap-3">
                <img
                  src="/images/features/Vector-2.png"
                  alt="Feature 2"
                  className="w-[50px] h-[50px] rounded object-cover"
                />
                <p className="text-sm text-[#a5a5a5]">Spatial Audio</p>
              </div>

              <div className="flex flex-col items-center gap-3">
                <img
                  src="/images/features/Vector-3.png"
                  alt="Feature 3"
                  className="w-[50px] h-[50px] rounded object-cover"
                />
                <p className="text-sm text-[#a5a5a5]">80 Hours Playtime</p>
              </div>

              <div className="flex flex-col items-center gap-3">
                <img
                  src="/images/features/Vector-4.png"
                  alt="Feature 4"
                  className="w-[50px] h-[50px] rounded object-cover"
                />
                <p className="text-sm text-[#a5a5a5]">Adaptive Hybrid ANC</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
