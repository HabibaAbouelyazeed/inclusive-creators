import { useState } from "react";
import EventCard from "./EventCard";

const UpcomingEvents = ({ events }) => {
  const [activeCategory, setActiveCategory] = useState("All");
  const categories = ["All", "Technology", "Science", "Engineering"];

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
  };

  const filteredEvents =
    activeCategory === "All"
      ? events
      : events.filter((event) => event.category === activeCategory);

  return (
    <div className="container py-8 md:py-12">
      <div className="header flex flex-col md:flex-row items-center justify-between">
        <h2 className="text-3xl md:text-5xl text-olive font-bold my-4 md:mb-0">
          Upcoming Events
        </h2>
        <div className="w-full md:w-1/4 flex items-center justify-between mt-4 md:mt-0">
          {categories.map((category, index) => (
            <button
              key={category}
              className={`font-bold px-3 py-1 inline-block rounded text-sm transition-colors ${
                activeCategory === category
                  ? "bg-olive text-white"
                  : "bg-dirtyPink text-olive"
              } ${index < categories.length - 1 ? "mr-4" : ""}`}
              onClick={() => handleCategoryChange(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
      <hr className="my-6 md:my-10" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredEvents.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
};

export default UpcomingEvents;
