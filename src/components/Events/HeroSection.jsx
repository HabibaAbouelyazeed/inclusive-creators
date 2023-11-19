import backgroundImage from "/assets/Events/banner.webp";

const HeroSection = () => {
  return (
    <div className="pb-12">
      <div
        className="relative bg-cover bg-center flex items-center justify-left"
        style={{ backgroundImage: `url(${backgroundImage})`,
        height: '757px' }}
      >
        <div className="absolute top-0 right-0 bottom-0 left-0 bg-secondary-300 opacity-50"></div>
        <div className="container">
          <div className="relative z-10 text-center">
            <h1 className="text-7xl font-bold mb-8 text-neutral-800">
              Discover Events That Inspire and Connect
            </h1>
            <p className="text-3xl font-bold mb-8 text-neutral-800">
            Join us on a journey of discovery and learning, where limitless possibilities await.
            </p>
            {/* <button className="bg-neutral-800 hover:bg-dirtyPink text-neutral-200 py-2 px-4 rounded mr-4">
              Sign Up
            </button>
            <button className="bg-neutral-200 border-2 border-neutral-800 text-neutral-800 font-bold py-2 px-4 rounded hover:border-dirtyPink hover:text-dirtyPink">
              Learn more
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
