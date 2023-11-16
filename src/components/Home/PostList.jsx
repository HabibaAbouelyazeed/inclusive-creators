import React , { useState , useEffect}from "react";
import axios from "axios";
import Post from "./Post";
import { data } from "autoprefixer";
const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [postText ,setPostText] = useState(" ");
  useEffect(() => {
    axios
      .get("http://localhost:3000/posts")
      .then((response) => {
        console.log(response.data)
        setPosts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const postList = posts?.map((post) =>{
    return(
      <Post key={post.id} post={post}/>
    )
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  

    return (
      <>
        <div className='mt-4 sm:w-full lg:w-3/5 mr-10'>
        <div className="container ms-auto">
          <form onSubmit={handleSubmit}>
            <div className="mt-4 mr-10">
              <div className="mt-1">
                <textarea
                  id="post"
                  name="post"
                  value={postText}
                  
                  className="shadow-lg block w-full sm:text-xl border-gray-300 rounded-md p-4 focus:border-neutral-700 focus:ring focus:ring-neutral-700 outline-none"
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
          {postList}
        </div>
      </div>
    </>
  );
};

export default PostList;
