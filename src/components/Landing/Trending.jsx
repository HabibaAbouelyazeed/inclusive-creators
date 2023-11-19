import React from "react";
import courseImg from "../../assets/images/autism4.jpg";
import articleImg from "../../assets/images/course-10.jpg";

function Trending() {
  return (
    <section className="py-8 bg-olive">
      <div className="container">
        <h3 className="mb-8 text-4xl text-secondary-300">Trending</h3>
        <div className=" flex flex-col md:flex-row justify-between">
          <div className="w-full md:w-2/5 mb-6 md:mb-0">
            <article className="row-span-2 bg-dirtyPink px-4 py-11 text-left rounded ">
              <img src={courseImg} className="w-3/5 m-auto block my-2 rounded" />
              <h3 className="text-neutral-700  font-bold text-2xl py-2 px-3">
                Inclusive Creators Courses
              </h3>
              <p className="text-lg py-2 text-neutral-800 px-3">
                Join our community of inclusive creators committed to making a
                positive impact through their work. Enroll in our courses today
                and embark on a journey towards creating a more inclusive and
                accessible digital world.
              </p>
            </article>
          </div>

          <div className="w-full md:w-7/12">
            <article className="bg-dirtyPink p-4 text-left mb-6 rounded">
              <div className="my-4 px-3">
                <h3 className="text-neutral-700  font-bold text-2xl py-2">
                  Inclusive Creators Events
                </h3>
                <p className="text-lg py-2 text-neutral-800">
                  Immerse yourself in a world of creativity, learning, and
                  collaboration with our Inclusive Creators events. From
                  workshops and webinars to community meetups, our events
                  provide a platform for like-minded individuals to connect,
                  share ideas, and explore the latest trends in inclusive design
                  and creativity.
                </p>
              </div>
            </article>
            <article className="bg-dirtyPink p-4 text-left flex flex-col md:flex-row rounded">
              <div className="px-3">
                <h3 className="text-neutral-700  font-bold text-2xl py-2">
                  Discover More
                </h3>
                <p className="text-lg py-2 text-neutral-800">
                  Our articles delve into diverse topics, fostering a community
                  of inclusive creators dedicated to shaping a more accessible
                  and equitable digital landscape
                </p>
              </div>
              <figure>
                <img src={articleImg} className="w-3/5 m-auto block my-3 rounded" />
              </figure>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Trending;
