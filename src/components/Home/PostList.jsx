import React from "react";
import Post from "./Post";
const PostList = () => {
  return (
    <>
      <div className="mt-4 w-3/5">
        <div className="container ms-auto">
          <form>
            <div className="mt-4 mr-10">
              <div className="mt-1">
                <textarea
                  id="post"
                  name="post"
                  className="shadow-sm block w-full sm:text-xl border-gray-300 rounded-md p-4 focus:border-neutral-700 focus:ring focus:ring-neutral-700 outline-none"
                  placeholder="Write a post here..."></textarea>
              </div>
            </div>
            <div className="mt-4 flex justify-end">
              <button
                type="submit"
                className="px-8 py-3 font-bold rounded-full bg-neutral-800 text-dirtyPink mr-10">
                Post
              </button>
            </div>
          </form>
          <Post></Post>
          <Post></Post>
          <Post></Post>
        </div>
      </div>
    </>
  );
};

export default PostList;
