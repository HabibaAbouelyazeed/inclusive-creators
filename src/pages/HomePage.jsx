import React from "react";
import useFetch from "../components/useFetch.js";
import HomeCarousel from "../components/Home/HomeCarousel";
import PostList from "../components/Home/PostList";
import Sidebar from "../components/Home/Sidebar";


const HomePage = () => {
  const { data: articlesData } = useFetch("articles");
  const { data: courseData } = useFetch("courses");
  return (
    <div>
      <HomeCarousel />

      <div className="container mx-auto flex sm:flex-wrap lg:flex-nowrap  py-2">
        <PostList />
        <Sidebar articles={articlesData} courses={courseData} />
      </div>
    </div>
  );
};

export default HomePage;
