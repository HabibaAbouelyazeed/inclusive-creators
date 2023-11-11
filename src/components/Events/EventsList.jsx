import { useState } from "react";
import EventCard from "./EventCard";

// Mock data for upcoming events
const events = [
  {
    id: 1,
    category: "Category",
    title: "An Evening Under the Stars: A Gala to Remember",
    discription:
      "Lorem ipsum dolor sit amet conse ctetur adip iscing elit justo quis odio sit sit ac port titor sit males dolor sit.",
    date: "Jan 24, 2024",
    image: "https://via.placeholder.com/350x200/DDD3D2/F1F6F8",
  },
  {
    id: 2,
    category: "Category",
    title: "An Evening Under the Stars: A Gala to Remember",
    discription:
      "Lorem ipsum dolor sit amet conse ctetur adip iscing elit justo quis odio sit sit ac port titor sit males dolor sit.",
    date: "Jan 24, 2024",
    image: "https://via.placeholder.com/350x200/DDD3D2/F1F6F8",
  },
  {
    id: 3,
    category: "Category",
    title: "An Evening Under the Stars: A Gala to Remember",
    discription:
      "Lorem ipsum dolor sit amet conse ctetur adip iscing elit justo quis odio sit sit ac port titor sit males dolor sit.",
    date: "Jan 24, 2024",
    image: "https://via.placeholder.com/350x200/DDD3D2/F1F6F8",
  },
  {
    id: 4,
    category: "Category",
    title: "An Evening Under the Stars: A Gala to Remember",
    discription:
      "Lorem ipsum dolor sit amet conse ctetur adip iscing elit justo quis odio sit sit ac port titor sit males dolor sit.",
    date: "Jan 24, 2024",
    image: "https://via.placeholder.com/350x200/DDD3D2/F1F6F8",
  },
  {
    id: 5,
    category: "Category",
    title: "An Evening Under the Stars: A Gala to Remember",
    discription:
      "Lorem ipsum dolor sit amet conse ctetur adip iscing elit justo quis odio sit sit ac port titor sit males dolor sit.",
    date: "Jan 24, 2024",
    image: "https://via.placeholder.com/350x200/DDD3D2/F1F6F8",
  },
  {
    id: 6,
    category: "Category",
    title: "An Evening Under the Stars: A Gala to Remember",
    discription:
      "Lorem ipsum dolor sit amet conse ctetur adip iscing elit justo quis odio sit sit ac port titor sit males dolor sit.",
    date: "Jan 24, 2024",
    image: "https://via.placeholder.com/350x200/DDD3D2/F1F6F8",
  },
];

const EventsList = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const categories = ["All", "Category", "Cat", "Categ"];
  const handleCategoryChange = (category) => {
    setActiveCategory(category);
  };

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
            {events.map((event) => (
              <div key={event.id} className="text-left">
                <p className="text-olive font-medium text-md">
                  {event.category} - {event.date}
                </p>
                <h3 className="text-olive font-medium text-2xl py-2">
                  {event.title}
                </h3>
                <button className="text-olive py-2 font-semibold rounded hover:bg-neutral-300 transition-colors">
                  Learn more →
                </button>
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
