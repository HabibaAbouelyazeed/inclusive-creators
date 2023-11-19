import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@material-tailwind/react";
import { NavLink } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="py-8 bg-olive">
      <div className="container flex flex-col md:flex-row gap-6">
        <div className="md:basis-1/2 flex flex-col justify-around text-start text-secondary-500">
          <h1 className="text-5xl font-bold text-secondary-300">Inclusive Creators</h1>
          <article className="my-6 md:my-0 text-lg">
            <p>
            Your dedicated hub for parents of kids with disabilities.
            </p>
            <p className="leading-6 my-2">
            Discover more about your children's conditions, connect with others facing similar journeys, and access expert guidance.
            Engage in events and articles designed for your unique needs. Additionally, explore STEM courses tailored to boost your confidence and tackle real-world challenges. 
            </p>

            <p>
            Join us for a stronger, informed, and connected parenting experience.
            </p>
          </article>
          <Button ripple={true} className="rounded-full self-center bg-dirtyPink text-olive">
            <NavLink to="/login">
            Get Started
            <FontAwesomeIcon icon={faAngleRight} className="ms-2"></FontAwesomeIcon>
            </NavLink>
          </Button>
        </div>

        <figure className="md:basis-1/2">
          <img
            className="h-96 w-full rounded-lg object-cover object-center"
            src="/assets/loginBanner.jpg"
            alt="nature image"
          />
        </figure>
      </div>
    </section>
  )
}

export default Hero