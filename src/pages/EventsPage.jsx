import { useMemo } from 'react';
import EventsList from "../components/Events/EventsList";
import HeroEvent from "../components/Events/HeroEvent";
import HeroSection from "../components/Events/HeroSection";
import SearchComponent from "../components/SearchComponent";
import UpcomingEvents from "../components/Events/UpcomingEvents";
import LoaderComponent from "../components/Loader";
import useFetch from '../components/useFetch';

const EventsPage = () => {
  const { data, isLoading, error } = useFetch('events');

  const events = useMemo(() => {
    if (data && data.length > 0) {
      return [...data].sort((a, b) => new Date(b.date) - new Date(a.date));
    }
    return [];
  }, [data]);

  if (isLoading) {
    return <LoaderComponent />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const newestEvent = events.length > 0 ? [events[0]] : [];
  const upcomingEvents = events.slice(1, 7); 
  const restOfEvents = events.slice(7);

  return (
    <>
      <HeroSection />
      <SearchComponent title={"Explore, Connect, and Grow"} searchCategory={"events"} />
      {newestEvent.length > 0 && <HeroEvent key={newestEvent[0].id} event={newestEvent[0]} />}
      <UpcomingEvents events={upcomingEvents} />
      <EventsList events={restOfEvents} />
    </>
  );
};

export default EventsPage;
