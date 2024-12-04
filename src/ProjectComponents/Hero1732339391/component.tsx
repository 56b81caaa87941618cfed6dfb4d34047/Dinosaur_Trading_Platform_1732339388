import React from 'react';

const Hero: React.FC = () => {
  
  return (
    <div className="bg-black py-16 text-white w-full h-full">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center h-full">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-4xl font-bold mb-4">Unleash Your Inner Paleontologist</h1>
          <p className="text-xl mb-6">Buy, sell, and trade preaaaaahistoric wonders in the world's premier dinosaur marketplace</p>
        </div>
        <div className="md:w-1/2">
          <img src={`https://raw.githubusercontent.com/56b81caaa87941618cfed6dfb4d34047/Dinosaur_Trading_Platform_1732339388/${window.MI_PROJECT_GIT_REF || 'main'}/src/assets/images/e06abc68a2994f44959707af090900a9.jpeg`} alt="Rock" className="w-full h-auto rounded-lg shadow-md" />
        </div>
      </div>
    </div>
  );
};

export { Hero as component };