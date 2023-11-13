import React from "react";

const ArticlesSearch = () => {
  return (
    <section className="py-8">
      <div className="container mx-auto">
        <div className="px-2 sm:px-4 py-2  flex items-center justify-between w-9/12 mx-auto rounded-lg border border-gray-200">
          <input
            type="text"
            placeholder="search for articles"
            className="text-sm sm:text-lg w-full font-medium capitalize block text-olive  bg-white focus:outline-none focus:ring-0 "
          />
          <button
            type="submit"
            className="px-1 sm:px-4 py-2 bg-olive text-white text-sm md:text-base rounded md:rounded hover:bg-dirtyPink transition-colors"
          >
            Search
          </button>
        </div>
      </div>
    </section>
  );
};

export default ArticlesSearch;
