import { useState, useEffect } from "react";

import Post from "./Post";

import {
  addDoc,
  deleteDoc,
  doc,
  collection,
  getDocs,
} from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../../configuration";
import { getFirestore } from "firebase/firestore";

const PostList = () => {
  const firebaseApp = initializeApp(firebaseConfig);
  const db = getFirestore(firebaseApp);
  const [posts, setPosts] = useState([]);

  const [body, setBody] = useState(" ");
  const fetchData = async () => {
    try {
      const colRef = collection(db, "posts");
      const snapshot = await getDocs(colRef);
      let posts = [];
      console.log(snapshot);
      snapshot.docs.forEach((doc) => {
        posts.push({ ...doc.data(), id: doc.id });
        setPosts(posts);
        console.log(posts);
      });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const handleChange = (event) => {
    setBody(event.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const docRef = await addDoc(collection(db, "posts"), {
        body,
        AllComments: [],
      });
      setBody("");
      fetchData();
    } catch (error) {
      console.error("Error adding comment:", error);
    }
  };

  return (
    <>
      <div className="mt-4 sm:w-full lg:w-3/5 mr-10">
        <div className="container ms-auto">
          <form onSubmit={handleSubmit}>
            <div className="mt-4 mr-10">
              <div className="mt-1">
                <textarea
                  id="post"
                  name="post"
                  value={body}
                  onChange={handleChange}
                  className="shadow-lg block w-full sm:text-xl text-dark border-gray-300 rounded-md p-4 focus:border-neutral-700 focus:ring focus:ring-neutral-700 outline-none"
                  placeholder="Write a post here..."
                ></textarea>
              </div>
            </div>
            <div className="mt-4 flex justify-end">
              <button
                type="submit"
                className="px-8 py-3 font-bold rounded-full bg-neutral-800 text-dirtyPink mr-10"
              >
                Post
              </button>
            </div>
          </form>
          {posts?.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </div>
      </div>
    </>
  );
};

export default PostList;
