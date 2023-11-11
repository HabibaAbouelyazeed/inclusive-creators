const { useParams } = require("react-router-dom");

const CourseDetails = () => {
  const params = useParams();
  console.log(params);
};

export default CourseDetails;
