import { Link } from "react-router-dom";

const avatarImage = "https://placehold.co/48x48/DDD3D2/5D6B6B";

const HeroEvent = ({ event }) => {

  if (!event) {
    // Handle the case when event is not provided
    return null;
  }

  const { title, category, host, date, imagePath } = event;

  return (
    <div className="container py-8 md:py-12">
      <div className="relative min-h-[300px] md:min-h-[450px] lg:min-h-[600px] flex items-center">
  
      
        <div className="z-10 w-full md:w-1/2 bg-white p-6 md:p-10 shadow-md rounded-md text-left border-2 border-pinkGrey" style={{ backgroundColor: `rgba(255, 255, 255, 0.95)` }}>
          <div className="bg-olive text-white px-2 py-1 inline-block rounded text-sm">
            {category}
          </div>
          <Link to={`/event/${event.id}`}>
          <h2 className="text-2xl md:text-4xl lg:text-5xl text-olive font-semibold my-4">
            {title}
          </h2>
          </Link>
          <div className="flex items-center mt-4 md:mt-8">
            <img
              src={avatarImage}
              alt="Author"
              className="w-8 h-8 md:w-10 md:h-10 rounded-full mr-2"
            />
            <div>
              <p className="text-olive font-semibold text-xs md:text-sm">{host}</p>
              <p className="text-neutral-800 text-xs md:text-sm">{date}</p>
            </div>
          </div>
        </div>

        <img
          src={imagePath}
          alt="Event"
          className="w-full md:w-4/5 object-cover rounded-md absolute right-0 top-0 h-full"
        />

      </div>
    </div>
  );
};

export default HeroEvent;
