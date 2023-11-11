// import React from "react";

const EventCard = ({ event }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden relative">
      {event.image && (
        <img
          src={event.image}
          alt={event.title}
          className="object-cover w-full h-auto"
        />
      )}

      <div className="absolute top-3 right-3 bg-olive text-white px-3 py-1 rounded">
        {event.category}
      </div>

      <div className="p-8 text-left">
        <h3 className="text-olive font-medium text-2xl mb-4">{event.title}</h3>
        <p className="text-olive text-lg mb-8">{event.description}</p>

        <div className="flex items-center justify-between">
          <p className="text-olive font-medium text-lg">{event.date}</p>

          <button className="bg-olive text-white px-4 py-2 rounded hover:bg-dirtyPink transition-colors flex items-center">
            →
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
