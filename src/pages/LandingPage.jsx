import React from "react";
import Hero from "../components/Landing/Hero";
import Strategy from "../components/Landing/Strategy";
import Trending from "../components/Landing/Trending";
import Testimonials from "../components/Landing/Testimonials";
import Statistics from "../components/Landing/Statistics";

const LandingPage = () => {
  return (
    <>
      <Hero />
      <Strategy />
      <Trending />
      <Testimonials/>
      <Statistics />
    </>
  );
};

export default LandingPage;
