import { useState } from "react";
import EventCard from "./EventCard";

// Mock data for events
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

const UpcommingEvents = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const categories = ["All", "Category", "Cat", "Categ"];
  const handleCategoryChange = (category) => {
    setActiveCategory(category);
  };

  return (
    <div className="container py-10">
      <div className="header flex items-center justify-between">

        <h2 className="text-5xl text-olive font-bold my-4">Upcoming Events</h2>

        <div className="w-1/4 flex items-center justify-between">
          {categories.map((category) => (
            <button
              key={category}
              className={`font-bold px-3 py-1 inline-block rounded text-sm transition-colors ${
                activeCategory === category
                  ? "bg-olive text-white"
                  : "bg-dirtyPink text-olive"
              }`}
              onClick={() => handleCategoryChange(category)}
            >
              {category}
            </button>
          ))}
        </div>

      </div>

      <hr className="my-10" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
};

export default UpcommingEvents;
