import { useParams } from 'react-router-dom';
import HeroEvent from '../components/Events/HeroEvent';
import ExploreEvents from '../components/Events/ExploreEvents';
import EventAllDetails from '../components/Events/EventAllDetails';
import LoaderComponent from '../components/Loader';
import useFetch from '../components/useFetch';

const EventDetails = () => {
  const { eventId } = useParams();
  const { data, isLoading, error } = useFetch('events');

  const event = data.find((e) => e.id === parseInt(eventId, 10));

  if (isLoading) {
    return <LoaderComponent />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const filteredEvents = data.filter((e) => e.id !== event?.id);
  const exploreEvents = filteredEvents.slice(0, 3);

  return (
    <>
      {event && <HeroEvent key={event.id} event={event} />}
      <EventAllDetails event={event} />
      <ExploreEvents events={exploreEvents} />
    </>
  );
};

export default EventDetails;
