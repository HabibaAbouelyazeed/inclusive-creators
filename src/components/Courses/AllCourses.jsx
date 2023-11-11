import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

const courses = [
  {
    Title: "Young inventor",
    Image: "../assets/Autism1.jpg",
    Description:
      "Unleash the capabilties of you kid,Let him/her discover the world of Animations, Science and many more ",
    id: 1,
  },
  {
    Title: "Young inventor",
    Image: "../assets/Autism1.jpg",
    Description:
      "Unleash the capabilties of you kid,Let him/her discover the world of Animations, Science and many more ",
    id: 2,
  },
  {
    Title: "Young inventor",
    Image: "../assets/Autism1.jpg",
    Description:
      "Unleash the capabilties of you kid,Let him/her discover the world of Animations, Science and many more ",
    id: 3,
  },
  {
    Title: "Young inventor",
    Image: "../assets/Autism1.jpg",
    Description:
      "Unleash the capabilties of you kid,Let him/her discover the world of Animations, Science and many more ",
    id: 4,
  },
  {
    Title: "Young inventor",
    Image: "../assets/Autism1.jpg",
    Description:
      "Unleash the capabilties of you kid,Let him/her discover the world of Animations, Science and many more ",
    id: 5,
  },
  {
    Title: "Young inventor",
    Image: "../assets/Autism1.jpg",
    Description:
      "Unleash the capabilties of you kid,Let him/her discover the world of Animations, Science and many more ",
    id: 6,
  },
  {
    Title: "Young inventor",
    Image: "../assets/Autism1.jpg",
    Description:
      "Unleash the capabilties of you kid,Let him/her discover the world of Animations, Science and many more ",
    id: 7,
  },
  {
    Title: "Young inventor",
    Image: "../assets/Autism1.jpg",
    Description:
      "Unleash the capabilties of you kid,Let him/her discover the world of Animations, Science and many more ",
    id: 8,
  },
  {
    Title: "Young inventor",
    Image: "../assets/Autism1.jpg",
    Description:
      "Unleash the capabilties of you kid,Let him/her discover the world of Animations, Science and many more ",
    id: 9,
  },
];
export function CardDefault() {
  return (
    <div className="flex flex-wrap mt-5">
      {courses?.map((course) => (
        <div
          className="w-full sm:w-[100%] md:w-[50%] lg:w-[50%]  align-items-center m-auto xl:w-[32%] flex justify-center mt-3 mb-[2rem]"
          key={course.id}
        >
          <Card className="mt-6 w-96 ">
            <CardHeader color="blue-gray" className="relative h-56 shadow-none">
              <img src={course.Image} alt={course.Title} />
            </CardHeader>
            <CardBody>
              <Typography variant="h5" color="blue-gray" className="mb-2">
                {course.Title}
              </Typography>
              <Typography>{course.Description}</Typography>
            </CardBody>
            <CardFooter className="pt-0">
              <Link to={`/courses/${course.Title}/${course.id}`}>
                <Button>View Course</Button>
              </Link>
            </CardFooter>
          </Card>
        </div>
      ))}
    </div>
  );
}
