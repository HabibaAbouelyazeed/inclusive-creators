import { useEffect, useState } from "react";
import Coursesinput from "../components/Courses/Coursesinput";
import CarouselWithContent from "../components/Courses/CarouselWithContent";
import { CardDefault } from "../components/Courses/AllCourses";
import { fetchCourses } from "../components/Courses/CoursesApi";

const CoursesPage = () => {
  const [courses, setCourses] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const CoursesData = await fetchCourses();
      setCourses(CoursesData);
      setFilteredItems(CoursesData);
    };

    fetchData();
  }, []);
  const filterbyAll = () => {
    setFilteredItems(courses);
  };
  const filterbyF = () => {
    const filtered = courses.filter((course) => course.type === "forensic");
    setFilteredItems(filtered);
  };
  const filterbyscience = () => {
    const filtered = courses.filter((course) => course.type === "science");
    setFilteredItems(filtered);
  };
  return (
    <div>
      <CarouselWithContent />
      <Coursesinput
        filterbyAll={filterbyAll}
        filterbyscience={filterbyscience}
        filterbyF={filterbyF}
      />
      <CardDefault courses={filteredItems} />
    </div>
  );
};

export default CoursesPage;
