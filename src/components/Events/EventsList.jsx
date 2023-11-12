import { useState } from "react";
import { Link } from "react-router-dom";

const EventsList = ({ events }) => {
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
    <div className="bg-dirtyPink">
      <div className="container py-12">
        <div className="flex justify-between">
          <div className="w-1/3 text-left">
            <h2 className="text-5xl text-olive font-bold mb-10">Events List</h2>
            {categories.map((category) => (
              <div
                key={category}
                className={`cursor-pointer font-bold px-3 py-3 text-xl transition-colors ${
                  activeCategory === category
                    ? "text-olive"
                    : "text-neutral-300"
                }`}
                onClick={() => handleCategoryChange(category)}
              >
                {category}
              </div>
            ))}
          </div>

          <div className="w-2/3">
            {filteredEvents.map((event) => (
              <div key={event.id} className="text-left">
                <p className="text-olive font-medium text-md">
                  {event.category} - {event.date}
                </p>
                <h3 className="text-olive font-medium text-2xl py-2">
                  {event.title}
                </h3>
                <Link to={`/event/${event.id}`}>
                  <button className="text-olive py-2 font-semibold rounded hover:bg-neutral-300 transition-colors">
                    Learn more →
                  </button>
                </Link>
                <hr className="my-10" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsList;
