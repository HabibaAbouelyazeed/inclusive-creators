import React from 'react';
import { Carousel, Typography, Button } from "@material-tailwind/react";
import hero from '../../assets/images/child-with-autism.jpg'
import courseImage from '../../assets/images/ADHD-Strategies-1024x615.jpg'
import eventImage from '../../assets/images/about.jpg'

const HomeCarousel = () => {
    return (
       <Carousel className="h-[65vh] pb-2">
        <div className="relative h-full w-full">
  <img
    src={hero}
    alt="image 1"
    className="h-full w-full object-cover"
  />
          <div className="absolute inset-0 grid h-full w-full items-center bg-black/75">
            <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32">
              <Typography
                variant="h1"
                className="mb-6 text-3xl md:text-4xl lg:text-6xl  text-dirtyPink"
              >
                Crafting Together: Inclusive Creators&apos; Corner
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="my-12 opacity-60"
              >
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum maiores amet, est laboriosam tempora voluptatem dignissimos ullam accusamus vero sed beatae
                 eius iusto voluptas? Aliquam ut saepe architecto corporis totam.
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
                className="mb-4 text-3xl md:text-4xl lg:text-5xl text-neutral-300"
              >
                Inspiration Unleashed: Check Out Our Events
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="mb-12 opacity-60"
              >
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium odit error nostrum molestiae, ipsam in unde fugit minima quidem quaerat, assumenda,
               corporis voluptates eaque laborum eligendi praesentium voluptas nobis labore.
              </Typography>
              <Button size="lg" className="bg-dirtyPink text-olive font-semibold">
                  Explore Events
                </Button>
            </div>
          </div>
   </div>
        <div className="relative h-full w-full">
          <img
            src={courseImage}
            alt="image 2"
            className="h-full w-full object-fill"
          />
          <div className="absolute inset-0 grid h-full w-full items-center bg-black/75">
            <div className=" pl-12 md:w-2/4 md:pl-20 lg:pl-32">
              <Typography
                variant="h1"
                color="white"
                className="mb-4 text-3xl md:text-4xl lg:text-5xl  text-secondary-500"
              >
                Skillful Journeys: Courses for Every Creator
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="my-12 opacity-60"
              >
               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro iste, quis consectetur illum aliquid earum quia consequatur 
               odio in alias dolor vero, hic, ex aliquam? Aut sit iure nesciunt voluptatem.
              </Typography>
              
                <Button size="lg" className="bg-dirtyPink text-olive font-semibold">
                  Explore Courses
                </Button>
             </div>
          </div>
        </div>
             
      </Carousel>
    );
}

export default HomeCarousel;
