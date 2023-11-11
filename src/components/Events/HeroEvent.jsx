// import React from 'react';

const avatarImage = "https://placehold.co/48x48/DDD3D2/5D6B6B";
const eventImage = "https://placehold.co/917x450/DDD3D2/F1F6F8";

const HeroEvent = () => {
  return (
    <div className="container py-10">
      <div className="relative min-h-[450px] flex items-center">
  
        <div className="z-10 w-1/2 bg-white p-10 shadow-md rounded-md text-left border-2 border-pinkGrey">
          <div className="bg-olive text-white px-2 py-1 inline-block rounded text-sm">
            Category
          </div>
          <h2 className="text-4xl text-olive font-semibold my-4">
            An Evening Under the Stars: A Gala to Remember
          </h2>
          <div className="flex items-center mt-8">
            <img
              src={avatarImage}
              alt="Author"
              className="w-10 h-10 rounded-full mr-2"
            />
            <div>
              <p className="text-olive font-semibold text-sm">John Due</p>
              <p className="text-neutral-800 text-sm">Jan 18, 2022</p>
            </div>
          </div>
        </div>

        <img
          src={eventImage}
          alt="Event"
          className="w-4/5 object-cover rounded-md absolute right-0 top-0 h-full"
        />

      </div>
    </div>
  );
};

export default HeroEvent;
