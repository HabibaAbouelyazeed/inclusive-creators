import { useEffect, useState } from "react";
import Coursesinput from "../components/Courses/Coursesinput";
import CarouselWithContent from "../components/Courses/CarouselWithContent";
import { CardDefault } from "../components/Courses/AllCourses";
import LoaderComponent from "../components/Loader";
import useFetch from "../components/useFetch";

const CoursesPage = () => {
  const [filteredItems, setFilteredItems] = useState([]);

  const { data, isLoading, error } = useFetch("courses");
  useEffect(() => {
    setFilteredItems(data);
  }, [data]);

  if (isLoading) {
    return <LoaderComponent />;
  }
  if (error) {
    return <div>Error: {error}</div>;
  }
  const filterbyAll = () => {
    setFilteredItems(data);
  };
  const filterbyF = () => {
    const filtered = data.filter((course) => course.type === "forensic");
    setFilteredItems(filtered);
  };
  const filterbyscience = () => {
    const filtered = data.filter((course) => course.type === "science");
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
