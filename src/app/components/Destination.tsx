
import React from 'react'
import Image from 'next/image';

// Array of destination images with titles and sources
const destinationItems = [
  { 
    id: 1, 
    title: 'Tartu, Estonia, Europe', 
    src: '/Tartu, Estonia.jpeg' // Use actual image paths
  },
  { 
    id: 2, 
    title: 'Hill Country, Texas, USA', 
    src: '/Hill Country, Texas, USA.jpeg' // Use actual image paths
  },
  { 
    id: 3, 
    title: 'Rome, Italy', 
    src: '/Rome, Italy.jpeg' // Use actual image paths
  },
  { 
    id: 4, 
    title: 'Baku, Azerbaijan', 
    src: '/Baku, Azerbaijan.jpeg' // Use actual image paths
  },
];

const Destination = () => {
  return (
    <div
      id='destination'
      className='container mx-auto pt-32 px-8 md:px-16 lg:px-24'
    >
      {/* Header Section */}
      <div className='lg:w-1/2 mb-8'>
        <h3 className='text-xl mb-4 font-medium'>Top Destination</h3>
      </div>

      {/* Destination Image Grid */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8'>{/* grid-cols-2 */}
        {destinationItems.map((item) => (
          <div key={item.id} className='border border-accent rounded-lg p-4 w-full md:w-80 lg:w-96'> {/* Control box width here */}
            <Image
              className='w-full h-auto rounded-lg'
              src={item.src}
              width={350} //Image width
              height={250} //Image height
              alt={item.title}//If image is not shown the text is shown
            />
            <h2 className='text-lg font-semibold mt-2'>{item.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Destination;

