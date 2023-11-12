import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import HeroEvent from '../components/Events/HeroEvent';
import ExploreEvents from '../components/Events/ExploreEvents';
import { fetchEvents } from '../components/Events/EventsApi';

const EventDetails = () => {
  const { eventId } = useParams();
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const eventsData = await fetchEvents();
        const sortedEvents = eventsData.sort((a, b) => new Date(b.date) - new Date(a.date));
        setEvents(sortedEvents);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const event = events.find((e) => e.id === parseInt(eventId, 10));

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  // Filter out the current event
  const filteredEvents = events.filter((e) => e.id !== event?.id);
  // Then slice for exploreEvents
  const exploreEvents = filteredEvents.slice(0, 6);

  return (
    <>
      {event && <HeroEvent key={event.id} event={event} />}
      <ExploreEvents events={exploreEvents} />
    </>
  );
};

export default EventDetails;
