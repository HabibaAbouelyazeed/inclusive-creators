// import React from 'react';

const backgroundImage = "https://placehold.co/1500x757";

const HeroSection = () => {
  return (
    <div className="pb-10">
      <div
        className="relative bg-cover bg-center h-screen flex items-center justify-left"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute top-0 right-0 bottom-0 left-0 bg-olive opacity-70"></div>
        <div className="container">
          <div className="relative z-10 text-left w-1/2">
            <h1 className="text-5xl font-bold mb-4 text-secondary-300">
              Discover Events That Inspire and Connect
            </h1>
            <p className="text-xl mb-8 text-secondary-300">
              Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit
              phasellus mollis sit aliquam sit nullam neque ultrices.
            </p>
            <button className="bg-white hover:bg-dirtyPink text-olive py-2 px-4 rounded mr-4">
              Sign Up
            </button>
            <button className="bg-olive border-2 border-neutral-800 text-secondary-300 font-bold py-2 px-4 rounded hover:border-dirtyPink hover:text-dirtyPink">
              Learn more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
