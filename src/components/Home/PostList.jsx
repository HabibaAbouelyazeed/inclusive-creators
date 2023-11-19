import { useState, useEffect } from "react";
import { addDoc, collection, doc, getDoc, getDocs } from "firebase/firestore";
import { auth, db } from "../../config/Firebase/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

import Post from "./Post";

const PostList = () => {
  const [currentUser] = useAuthState(auth);
  const [posts, setPosts] = useState([]);
  const [body, setBody] = useState(" ");
  const [userInfo, setUserInfo] = useState("");
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    if (!!currentUser) {
      getUserInfo();
    } else {
      setUserInfo(false);
    }
    fetchData();
    updateDate();
  }, []);

  // Get current user info
  const getUserInfo = async () => {
    try {
      const userRef = doc(db, "users", currentUser.uid);
      const docSnap = await getDoc(userRef);

      if (docSnap.exists()) {
        setUserInfo(docSnap.data());
      } else {
        console.log("No such document!");
      }
    } catch (error) {
      console.log("Error getting user info: ", error);
    }
  };

  // Fetch Posts
  const fetchData = async () => {
    try {
      const colRef = collection(db, "posts");
      const snapshot = await getDocs(colRef);
      let posts = [];
      snapshot.docs.forEach((doc) => {
        posts.push({ ...doc.data(), id: doc.id });
        setPosts(posts);
      });
    } catch (error) {
      console.log(error);
    }
  };

  // Handle Post form
  const handleChange = (event) => {
    setBody(event.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "posts"), {
        body,
        AllComments: [],
        userName: userInfo.displayName || "Anonymous user",
        postTime: currentDate,
      });
      setBody("");
      fetchData();
    } catch (error) {
      console.error("Error adding comment:", error);
    }
  };

  const updateDate = () => {
    const today = new Date();
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    };
    const formattedDate = today.toLocaleDateString("en-US", options);
    setCurrentDate(formattedDate);
  };

  return (
    <>
      <div className="mt-14 sm:w-full lg:w-10/12 mr-6">
        <div className="container ms-auto">
          <form onSubmit={handleSubmit}>
            <div className="mt-4 mr-10">
              <div className="mt-1 border-2 border-neutral-800">
                <textarea
                  id="post"
                  name="post"
                  value={body}
                  onChange={handleChange}
                  className="shadow-lg block w-full sm:text-xl text-dark border-gray-300 rounded-md p-4 focus:border-neutral-700 focus:ring focus:ring-neutral-700 outline-none"
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
          {posts?.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </div>
      </div>
    </>
  );
};

export default PostList;
