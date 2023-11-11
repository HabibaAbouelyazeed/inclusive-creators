import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@material-tailwind/react";

const LandingPage = () => {
  return (
    <section className="py-8 bg-olive">
      <div className="container flex flex-col md:flex-row gap-6 justify-between">
        <div className="md:basis-1/2 flex flex-col justify-around text-start text-secondary-500">
          <h1 className="text-5xl text-secondary-300">Inclusive Creators</h1>
          <p>
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
            src="https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
            alt="nature image"
          />
        </figure>
      </div>
    </section>
  );
};

export default LandingPage;
