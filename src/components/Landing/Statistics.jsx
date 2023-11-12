import React from "react";

const Statistics = () => {
  return (
    <section className="py-8 bg-dirtyPink text-neutral-800">
    <div className="container">
      <h3 className="mb-6 text-3xl">Statistics</h3>
      <div className="columns-1 md:columns-2 lg:columns-4">
        <article className="mx-auto mb-4 w-32 h-32 flex flex-col justify-center bg-tealGrey rounded-full ">
            <p className="text-3xl">10k+</p>
            <p className="font-bold">Users</p>
        </article>
        <article className="mx-auto mb-4 w-32 h-32 flex flex-col justify-center bg-tealGrey rounded-full ">
            <p className="text-3xl">500+</p>
            <p className="font-bold">Courses</p>
        </article>
        <article className="mx-auto mb-4 w-32 h-32 flex flex-col justify-center bg-tealGrey rounded-full ">
            <p className="text-3xl">100+</p>
            <p className="font-bold">Events</p>
        </article>
        <article className="mx-auto mb-4 w-32 h-32 flex flex-col justify-center bg-tealGrey rounded-full ">
            <p className="text-3xl">5k+</p>
            <p className="font-bold">Articles</p>
        </article>
      </div>
    </div>
  </section>
  );
};

export default Statistics;
