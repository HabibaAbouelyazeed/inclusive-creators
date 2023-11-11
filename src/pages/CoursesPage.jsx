import React from "react";
import Coursesinput from "../components/Courses/Coursesinput";
import CarouselWithContent from "../components/Courses/CarouselWithContent";
import { CardDefault } from "../components/Courses/AllCourses";

const CoursesPage = () => {
  return (
    <div>
      <CarouselWithContent />
      <Coursesinput />
      <CardDefault />
    </div>
  );
};

export default CoursesPage;
