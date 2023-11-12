import { useState, useEffect } from 'react';
import EventsList from "../components/Events/EventsList";
import HeroEvent from "../components/Events/HeroEvent";
import HeroSection from "../components/Events/HeroSection";
import SearchComponent from "../components/Events/Serach";
import UpcomingEvents from "../components/Events/UpcomingEvents";
import { fetchEvents } from "../components/Events/EventsApi";

const EventsPage = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const eventsData = await fetchEvents();
      
      const sortedEvents = eventsData.sort((a, b) => new Date(b.date) - new Date(a.date));

      setEvents(sortedEvents);
    };

    fetchData();
  }, []);

  const newestEvent = events.length > 0 ? [events[0]] : [];
  const upcomingEvents = events.slice(1, 7); 
  const restOfEvents = events.slice(7);

  // console.log(newestEvent)
  // console.log(upcomingEvents)
  // console.log(restOfEvents)

  return (
    <>
      <HeroSection />
      <SearchComponent />
      <HeroEvent key={newestEvent.id} event={newestEvent[0]} />
      <UpcomingEvents events={upcomingEvents} />
      <EventsList events={restOfEvents} />
    </>
  );
};

export default EventsPage;
