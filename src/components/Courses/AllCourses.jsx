import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { Rating } from "@material-tailwind/react";
import { ButtonDefault } from "../Buttons";

const courses = [
  {
    Title: "Young inventor",
    Image: "../assets/Autism1.jpg",
    Description:
      "Unleash the capabilties of you kid,Let him/her discover the world of Animations, Science and many more ",
    id: 1,
    Duration: "15 minutes",
    level: "beginers",
    Age: "3-7",
    Free: true,
  },
  {
    Title: "Young inventor",
    Image: "../assets/Autism1.jpg",
    Description:
      "Unleash the capabilties of you kid,Let him/her discover the world of Animations, Science and many more ",
    id: 2,
    Duration: "15 minutes",
    level: "beginers",
    Age: "3-7",
    Free: false,
  },
  {
    Title: "Young inventor",
    Image: "../assets/Autism1.jpg",
    Description:
      "Unleash the capabilties of you kid,Let him/her discover the world of Animations, Science and many more ",
    id: 3,
    Duration: "15 minutes",
    level: "beginers",
    Age: "3-7",
    Free: false,
  },
  {
    Title: "Young inventor",
    Image: "../assets/Autism1.jpg",
    Description:
      "Unleash the capabilties of you kid,Let him/her discover the world of Animations, Science and many more ",
    id: 4,
    Duration: "15 minutes",
    level: "beginers",
    Age: "3-7",
    Free: false,
  },
  {
    Title: "Young inventor",
    Image: "../assets/Autism1.jpg",
    Description:
      "Unleash the capabilties of you kid,Let him/her discover the world of Animations, Science and many more ",
    id: 5,
    Duration: "15 minutes",
    level: "beginers",
    Age: "3-7",
    Free: false,
  },
  {
    Title: "Young inventor",
    Image: "../assets/Autism1.jpg",
    Description:
      "Unleash the capabilties of you kid,Let him/her discover the world of Animations, Science and many more ",
    id: 6,
    Duration: "15 minutes",
    level: "beginers",
    Age: "3-7",
    Free: false,
  },
  {
    Title: "Young inventor",
    Image: "../assets/Autism1.jpg",
    Description:
      "Unleash the capabilties of you kid,Let him/her discover the world of Animations, Science and many more ",
    id: 7,
    Duration: "15 minutes",
    level: "beginers",
    Age: "3-7",
    Free: false,
  },
  {
    Title: "Young inventor",
    Image: "../assets/Autism1.jpg",
    Description:
      "Unleash the capabilties of you kid,Let him/her discover the world of Animations, Science and many more ",
    id: 8,
    Duration: "15 minutes",
    level: "beginers",
    Age: "3-7",
    Free: false,
  },
  {
    Title: "Young inventor",
    Image: "../assets/Autism1.jpg",
    Description:
      "Unleash the capabilties of you kid,Let him/her discover the world of Animations, Science and many more ",
    id: 9,
    Duration: "15 minutes",
    level: "beginers",
    Age: "3-7",
    Free: false,
  },
];
export function CardDefault() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <section className="container">
      <div className="flex flex-wrap mt-5">
        {courses?.map((course) => (
          <article
            className="w-full sm:w-[100%] md:w-[50%] lg:w-[50%]  align-items-center m-auto xl:w-[32%] flex justify-center mt-3 mb-[2rem]"
            key={course.id}
          >
            <Card className="mt-6 w-96 transform scale-100 hover:scale-105 transition-transform duration-300">
              <CardHeader
                color="blue-gray"
                className="relative h-56 shadow-none"
              >
                <img src={course.Image} alt={course.Title} />
              </CardHeader>
              {course.Free ? (
                <div className="bg-pinkGrey text-oolive px-4 py-2 absolute top-0 right-5 rounded-md">
                  Free
                </div>
              ) : (
                ""
              )}

              <CardBody>
                <section>
                  <Typography variant="h5" color="blue-gray" className="mb-2">
                    {course.Title}
                  </Typography>
                  <Typography>{course.Description}</Typography>
                  <div className="flex justify-between">
                    <p>
                      <span className="font-bold ">Hours:</span>
                      {course.Duration}
                    </p>
                    <Rating value={4} readonly />
                  </div>
                  <div className="flex justify-between pt-4">
                    <p>
                      <span className="font-bold px-1">Age:</span>
                      {course.Age} <span>years</span>
                    </p>

                    <p>
                      <span className="font-bold px-1">Level:</span>
                      {course.level}
                    </p>
                  </div>
                </section>
              </CardBody>
              <CardFooter className="pt-0">
                <Link to={`/courses/${course.Title}/${course.id}`}>
                  <ButtonDefault
                    classname="text-olive bg-tealGrey"
                    Name="View Course"
                    onclick={scrollToTop}
                  />
                </Link>
              </CardFooter>
            </Card>
          </article>
        ))}
      </div>
    </section>
  );
}
