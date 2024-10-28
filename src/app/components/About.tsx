import React from 'react';
import Image from 'next/image';

// Array of about images with titles
const cardItems = [
  {
    id: '1',
    title: 'Travel Guide',
    src: '/travel guide.jpeg',
  },
  {
    id: '2',
    title: 'Personal Stories',
    src: '/personal stories.jpeg',
  },
  {
    id: '3',
    title: 'Adventure',
    src: '/adventure.jpeg',
  },
  {
    id: '4',
    title: 'Tips and Hack',
    src: '/tips and hack.jpeg',
  },
];

const About = () => {
  return (
    <div id="about" className="container mx-auto pt-16 px-8 md:px-16 lg:px-24">
      <div className="grid md:grid-cols-2 gap-10 items-center mb-12">
        
        {/* Left Side: Text Content */}
        <div className="lg:w-1/2">
          <h3 className="text-2xl font-semibold mb-4">About</h3>
          <p className="text-lg leading-relaxed">
            Welcome to Ocean Bloom your ultimate source for travel inspiration, helpful tips, and personal stories. For us, traveling is not just about reaching new places, 
            it is about the experiences, the people we meet, and the memories we create along the way.
          </p>
        </div>

        {/* Right Side: Image */}
        <div className="lg:w-1/2 flex justify-center">
          <Image
            src="/about image.jpg"
            alt="Image"
            width={350}
            height={300}
            priority
            className="object-contain"
          />
        </div>
      </div>

      {/* Section Heading */}
      <div className="text-left px-4 lg:px-0 mb-8">
        <h1 className="text-3xl font-medium text-black">What You Will Find Here</h1>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {cardItems.map((item) => (
          <div
            key={item.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden"
          >
            {/* Card Image */}
            <Image
              src={item.src}
              alt={item.title}
              width={200}
              height={200}
              className="object-cover w-full"
            />
            
            {/* Card Title */}
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800 text-center">
                {item.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
