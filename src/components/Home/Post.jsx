/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";
import { doc, getDoc, updateDoc } from "@firebase/firestore";
import { auth, db } from "../../config/Firebase/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const Post = ({ post }) => {
  const [currentUser] = useAuthState(auth);
  const [commentplace, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const [currentDate, setCurrentDate] = useState("");
  const [postReactions, setReactions] = useState(0);
  const [userInfo, setUserInfo] = useState("");

  useEffect(() => {
    if (!!currentUser) {
      getUserInfo();
    } else {
      setUserInfo(false);
    }

    fetchComments();
    updateDate();
  }, []);

  // Toggle like Function
  const toggleLike = async (index) => {
    const docRef = doc(db, "posts", index);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      const currentReactions = docSnap.data().reactions || 0;
      await updateDoc(docRef, { reactions: currentReactions + 1 });
      setReactions(currentReactions + 1);
    }
  };

  // Handle Comment form
  const handlechange = (e) => {
    setComment(e.target.value);
  };

  const handleSubmit = async (index) => {
    await updateDoc(doc(db, "posts", index), {
      AllComments: [
        ...comments,
        { userName: userInfo.displayName || "Anonymous", Text: commentplace },
      ],
    });
    setComments((prevComments) => [
      ...prevComments,
      { userName: userInfo.displayName || "Anonymous", Text: commentplace },
    ]);
    setComment("");
  };

  // Update Date
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

  // Fetch Comments
  const fetchComments = async () => {
    const docRef = doc(db, "posts", post.id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      const data = docSnap.data();
      setComments(data.AllComments);
      setReactions(data.reactions);
    }
  };

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
            <h3 className="text-sm font-semibold text-left">
              {post.userName || "Anonymous User"}
            </h3>
            <time dateTime="2021-02-18" className="text-sm dark:text-gray-400">
              {post.postTime || currentDate}
            </time>
          </div>
        </div>
        <article className="text-left mt-4">
          <h2 className="text-xl">{post.title}</h2>
          <p className="mt-4 dark:text-gray-400">{post.body}</p>
        </article>
        <div className="text-left mt-2 pl-3 text-lg text-pink-100">
          {postReactions} Likes
        </div>
        <div className="flex  mt-8 space-x-4">
          <button
            type="button"
            onClick={() => {
              toggleLike(post.id);
            }}
            className="w-1/4 px-8 py-3 font-bold rounded-full shadow bg-dirtyPink  text-olive"
          >
            Like
          </button>

          <input
            type="text"
            className="w-3/4 px-8 py-3 font-bold rounded-full text-olive border border-gray-300 ml-4 block"
            placeholder="Comment"
            value={commentplace}
            onKeyDown={(e) => e.key === "Enter" && handleSubmit(post.id)}
            onChange={handlechange}
          ></input>
        </div>
        {Array.isArray(comments) && comments.length > 0 && (
          <div className="mt-4 p-3 ">
            {comments?.map((comment) => (
              <div
                key={comment.Text}
                className="flex w-[100%] justify-center items-center  my-3"
              >
                <img
                  src="https://source.unsplash.com/100x100/?portrait"
                  alt=""
                  className="w-10 h-10 rounded-full dark:bg-gray-500 "
                />
                <p className="ps-2">{comment.userName}</p>

                <div className="text-sm dark:text-gray-400 bg-secondary text-dark text-left border-2  m-2 p-4 w-[80%]">
                  {comment.Text}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Post;
