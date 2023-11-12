import { Link } from "react-router-dom";

const EventCard = ({ event }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden relative">
      {event.imagePath && (
        <img
          src={event.imagePath}
          alt={event.title}
          className="object-cover w-full h-48 sm:h-64 md:h-56 lg:h-64 xl:h-80"
        />
      )}

      <div className="absolute top-3 right-3 bg-dirtyPink text-black px-3 py-1 rounded">
        {event.category}
      </div>

      <div className="p-4 md:p-8 text-left">
        <h3 className="text-olive font-medium text-lg md:text-xl lg:text-2xl mb-2 md:mb-4">
          {event.title}
        </h3>
        <p className="text-olive text-sm md:text-base lg:text-lg mb-4 md:mb-8">
          {event.description}
        </p>

        <div className="flex flex-col md:flex-row items-center justify-between">
          <p className="text-olive font-medium text-sm md:text-base lg:text-lg mb-2 md:mb-0">
            {event.date}
          </p>
          <p className="text-olive font-medium text-sm md:text-base lg:text-lg mb-2 md:mb-0">
            {event.location}
          </p>
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
