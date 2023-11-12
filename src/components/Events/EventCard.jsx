import { Link } from "react-router-dom";

const EventCard = ({ event }) => {
  return (
    <div className="hover:scale-105 transition-transform duration-300 ease-in-out bg-white shadow-lg rounded-lg overflow-hidden relative hover:shadow-xl transition-all duration-300 ease-in-out hover:bg-lightGray">
      {event.imagePath && (
        <img
          src={event.imagePath}
          alt={event.title}
          className="w-full h-auto"
        />
      )}

      <div className="absolute top-3 right-3 bg-dirtyPink text-black px-3 py-1 rounded">
        {event.category}
      </div>

      <div className="p-4 md:p-8 text-left flex flex-col h-full">
        <h3 className="text-olive font-medium text-lg md:text-xl lg:text-2xl mb-2 md:mb-4">
          {event.title}
        </h3>
        <p className="text-olive text-sm md:text-base lg:text-lg mb-4 md:mb-8">
          {event.description}
        </p>

        <div className="flex flex-col md:flex-row items-center justify-between text-sm md:text-base lg:text-lg">
          <div className="">
            <div className="mb-2 md:mb-0">
              <span className="text-black font-medium">Date:</span> {event.date}
            </div>
            <div className="mb-2 md:mb-0">
              <span className="text-black font-medium">Location:</span>{" "}
              {event.location}
            </div>
          </div>
          <Link to={`/event/${event.id}`}>
            <button className="bg-olive text-white px-3 py-1 rounded hover:bg-dirtyPink transition-colors flex items-center">
              →
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
