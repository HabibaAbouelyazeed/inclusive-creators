import EventCard from "./EventCard";

const ExploreEvents = ({ events }) => {
  
  return (
    <div className="container py-3">
      <div className="header flex flex-col md:flex-row items-center justify-between">
        <h2 className="text-3xl md:text-5xl text-olive font-bold my-4 md:mb-0">
          Explore Other Events
        </h2>
        
      </div>
      <hr className="my-6 md:my-10" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
};

export default ExploreEvents;
