import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@material-tailwind/react";

const Hero = () => {
  return (
    <section className="py-8 bg-olive">
      <div className="container flex flex-col md:flex-row gap-6">
        <div className="md:basis-1/2 flex flex-col justify-around text-start text-secondary-500">
          <h1 className="text-5xl text-secondary-300">Inclusive Creators</h1>
          <p className="my-6 md:my-0">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            non pariatur ipsum placeat vitae, illum suscipit ratione dignissimos
            rerum tenetur a odio. Velit quod quis ab quidem aperiam sunt
            excepturi?
          </p>
          <Button ripple={true} className="rounded-full self-center bg-dirtyPink text-olive">
            Get Started
            <FontAwesomeIcon icon={faAngleRight} className="ms-2"></FontAwesomeIcon>
          </Button>
        </div>

        <figure className="md:basis-1/2">
          <img
            className="h-96 w-full rounded-lg object-cover object-center"
            src="../public/assets/loginBanner.jpg"
            alt="nature image"
          />
        </figure>
      </div>
    </section>
  )
}

export default Hero