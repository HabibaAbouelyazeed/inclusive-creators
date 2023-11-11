// import React from 'react';

const EventCard = ({ event }) => {
    return (
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            {event.image && (
                <img
                    src={event.image}
                    alt={event.title}
                    className="object-cover"
                />
            )}
            <div className="p-8 text-left">
                <h3 className="text-olive font-medium text-2xl mb-4">{event.title}</h3>
                <p className="text-olive text-lg mb-8">{event.discription}</p>
                <p className="text-olive font-medium text-lg">{event.date}</p>

                {/* Additional event details can be added here */}
            </div>
        </div>
    );
};

export default EventCard;
