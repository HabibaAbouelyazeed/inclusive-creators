import React from "react";

function Trending() {
  return (
    <section className="py-8 bg-olive text-secondary-300">
      <div className="container">
        <h3 className="mb-6 text-3xl">Trending</h3>
        <div className=" grid grid-cols-2 gap-4">
            <article className="row-span-2 bg-dirtyPink p-4">Courses</article>
            <article className="bg-dirtyPink p-4">Events</article>
            <article className="bg-dirtyPink p-4">Articles</article>
        </div>
      </div>
    </section>
  );
}

export default Trending;
