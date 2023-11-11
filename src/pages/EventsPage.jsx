// import React from 'react'
import EventsList from "../components/Events/EventsList";
import HeroEvent from "../components/Events/HeroEvent";
import HeroSection from "../components/Events/HeroSection";
import SearchComponent from "../components/Events/Serach";
import UpcommingEvents from "../components/Events/UpcomingEvents";

const EventsPage = () => {
  return (
    <div>
      <HeroSection />
      <SearchComponent />
      <HeroEvent />
      <UpcommingEvents />
      <EventsList />
    </div>
  );
};

export default EventsPage;
