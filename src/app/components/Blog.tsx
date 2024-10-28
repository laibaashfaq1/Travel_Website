import React from 'react';
import Image from 'next/image'; // Using Next.js Image component

// Array of blog images with titles, sources, and dates
const destinationItems = [
    { 
      id: 1, 
      title: 'A complete guide to do best thing in Tokyo, Japan', 
      date: '2 July, 2021', 
      src: '/1.png' 
    },
    { 
      id: 2, 
      title: 'The most unforgettable moments in my travels were the ones I never planned..', 
      date: '7 Sep, 2020', 
      src: '/2.png' 
    },
    { 
      id: 3, 
      title: 'Why Lisbon, Portugal should be on your travel bucket list in 2024.', 
      date: '1 Sep, 2024', 
      src: '/3.png' 
    },
    { 
      id: 4, 
      title: 'What solo travel taught me about independence and self-discovery.', 
      date: '14 April, 2024', 
      src: '/4.png' 
    },
];

const Blog = () => {
  return (
    <div id='blog' className='container mx-auto pt-16 px-8 md:px-16 lg:px-24'> {/* Reduced top padding */}

      {/* Header Section */}
      <div className='lg:w-1/2 mb-10'> {/* Reduced bottom margin m-10 */}
        <h3 className='text-xl font-medium'>Blog</h3>
      </div>

      {/* Latest Travel Blog Title */}
      <div className="text-center px-4 lg:px-0 mb-14">
        <h1 className="text-5xl md:text-6xl font-bold text-black font-serif">
          Latest Travel Blog
        </h1>
      </div>

      {/* Blog Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 pt-8">
        {destinationItems.map(item => (
          <div key={item.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
            {/* Blog Image */}
            <Image 
              src={item.src} 
              alt={item.title} 
              width={500} 
              height={300} 
              className="object-cover w-full"
            />

            {/* Card Footer (Date + Title) */}
            <div className="p-4">
              <p className="text-gray-500 text-sm">{item.date}</p>
              <h4 className="mt-2 text-lg font-semibold text-gray-800">
                {item.title}
              </h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;

