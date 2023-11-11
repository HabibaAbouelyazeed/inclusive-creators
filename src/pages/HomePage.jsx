import React from "react";
import HomeCarousel from "../components/Home/HomeCarousel";
import PostList from "../components/Home/PostList";
import Sidebar from "../components/Home/Sidebar";

const HomePage = () => {
  return (
    <div>
      <HomeCarousel />

      <div className="container mx-auto flex justify-between py-2">
        <PostList />
        <Sidebar />
      </div>
    </div>
  );
};

export default HomePage;
