/* eslint-disable react/prop-types */
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
import { useEffect } from "react";
import { fetchCourses } from "./CoursesApi";

export function CardDefault({ courses }) {
  useEffect(() => {
    fetchCourses();
  }, []);

  return (
    <section className="container">
      <div className="flex flex-wrap mt-5 pb-5">
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
                <img src={course.Image} alt={course.title} />
              </CardHeader>
              {course.Free ? (
                <div className="bg-pinkGrey text-oolive px-4 py-2 absolute top-0 right-5 rounded-md">
                  Free
                </div>
              ) : (
                <div className="bg-pinkGrey text-oolive px-4 py-2 absolute top-0 right-5 rounded-md">
                  200$
                </div>
              )}

              <CardBody>
                <section className="flex flex-col">
                  <Typography variant="h5" color="blue-gray" className="mb-2">
                    {course.title}
                  </Typography>
                  <div className="details flex flex-col justify-between">
                    <Typography className="py-4">
                      {course.Description}
                    </Typography>
                    <div className="flex justify-between">
                      <p>
                        <span className="font-bold ">Hours:</span>
                        {course.Duration}
                      </p>
                      <Rating value={course.rate} readonly />
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
                  </div>
                </section>
              </CardBody>
              <CardFooter className="pt-0">
                {course.Free ? (
                  <Link to={`/courses/${course.title}/${course.id}`}>
                    <ButtonDefault
                      classname="text-olive bg-tealGrey"
                      Name="View Course"
                    />
                  </Link>
                ) : (
                  <ButtonDefault
                    classname="text-olive bg-tealGrey"
                    Name="View Course"
                    disabled={true}
                  />
                )}
              </CardFooter>
            </Card>
          </article>
        ))}
      </div>
    </section>
  );
}
