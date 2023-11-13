import React from "react";

const Post = (props) => {
  return (
    <div>
      <div className="bg-olive p-6 overflow-hidden rounded-lg shadow text-neutral-100 mt-6">
        <div className="flex  mt-8 space-x-4">
          <img
            src="https://source.unsplash.com/100x100/?portrait"
            alt=""
            className="w-10 h-10 rounded-full dark:bg-gray-500"
          />
          <div>
            <h3 className="text-sm font-semibold">Leroy Jenkins</h3>
            <time dateTime="2021-02-18" className="text-sm dark:text-gray-400">
              Feb 18th 2021
            </time>
          </div>
        </div>
        <article className="text-left mt-4">
          <h2 className="text-xl">{props.post.title}</h2>
          <p className="mt-4 dark:text-gray-400">
            {props.post.body}
          </p>
        </article>
        <div className="flex  mt-8 space-x-4">
          <button
            type="button"
            className="w-1/4 px-8 py-3 font-bold rounded-full shadow bg-dirtyPink  text-olive">
            Like
          </button>
          <input
            type="text"
            className="w-3/4 px-8 py-3 font-bold rounded-full"
            placeholder="Comment"></input>
        </div>
      </div>
    </div>
  );
};

export default Post;
