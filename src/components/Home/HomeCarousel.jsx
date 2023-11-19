import React from "react";
import { Link } from "react-router-dom";
import { Carousel, Typography, Button } from "@material-tailwind/react";
import hero from "../../assets/images/child-with-autism.jpg";
import courseImage from "../../assets/images/ADHD-Strategies-1024x615.jpg";
import eventImage from "../../assets/images/about.jpg";

const HomeCarousel = () => {
  return (
    <Carousel className="h-[65vh] ">
      <div className="relative h-full w-full">
        <img src={hero} alt="image 1" className="h-full w-full object-cover" />
        <div className="absolute inset-0 grid h-full w-full items-center bg-black/75">
          <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32">
            <Typography
              variant="h1"
              className="mb-6 text-3xl md:text-4xl lg:text-6xl text-dirtyPink">
              Crafting Together: Inclusive Creators&apos; Corner
            </Typography>

          </div>
        </div>
      </div>
      <div className="relative h-full w-full">
        <img
          src={eventImage}
          alt="image 3"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
          <div className="w-3/4 pl-12 pb-12 md:w-2/4 md:pl-20 md:pb-20 lg:pl-32 lg:pb-32">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl text-neutral-300">
              Inspiration Unleashed: Check Out Our Events
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-60">
              Join us on a journey of discovery and learning, where limitless
              possibilities await.
            </Typography>
            <Link to={"/events"}>
              <Button
                size="lg"
                className="bg-dirtyPink text-olive font-semibold">
                Explore Events
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <div className="relative h-full w-full">
        <img
          src={courseImage}
          alt="image 2"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full items-center bg-black/75">
          <div className=" pl-12 md:w-2/4 md:pl-20 lg:pl-32">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl text-secondary-500">
              Skillful Journeys: Courses for Every Creator
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="my-12 opacity-60">
              Incorporate hands-on activities and experiments to engage learners
              with special needs. These activities can help individuals
              understand abstract STEM concepts through tangible experiences.
              Use manipulatives, models, and interactive simulations to make
              learning more concrete
            </Typography>
            <Link to={"/courses"}>
              <Button
                size="lg"
                className="bg-dirtyPink text-olive font-semibold">
                Explore Courses
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </Carousel>
  );
};

export default HomeCarousel;
