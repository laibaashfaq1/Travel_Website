
import React from 'react';
import Navbar from './Navbar';


// Hero Page 
const Hero = () => {
  return (
    <div
      id="hero"
      className="relative min-h-screen bg-cover bg-no-repeat"
      style={{
        backgroundImage: "url('/background.jpg')", // Ensure correct image path
        backgroundSize: "cover", // Cover the full background
        backgroundPosition: "center", // Center the image
      }}
    >
      
        <Navbar />
      

      {/* Content Section */}
      <div className="relative container mx-auto text-center px-4 lg:px-0 flex items-center justify-center min-h-screen">
        <div className="mt-[-400px]"> {/* Negative margin to move the text up */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black tracking-wide font-serif">
        TRAVEL THE WORLD
        </h1>

        </div>
      </div>
    </div>
  );
};

export default Hero;
