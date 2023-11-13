import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { ButtonDefault } from "../Buttons";
import { Breadcrumbs } from "@material-tailwind/react";
import { DrawerWithNavigation } from "./Drawer";
import axios from "axios";
import YoutubeEmbed from "./Iframe";

const CourseDetails = () => {
  const params = useParams();
  const [course, setCourse] = useState([]);
  const [videoNumber, setVideoNumber] = useState(0);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/Details/${params.courseId}`)
      .then((response) => {
        console.log(response.data);
        setCourse(response.data);
        console.log(response.data.videos);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  // /////////////////////////////
  useEffect(() => {
    console.log(course.videos);
  }, [course]);
  // /////////////////////////////////////////
  const GotoNext = () => {
    if (videoNumber < course.videos.length) {
      setVideoNumber(videoNumber + 1);
    }
  };
  const GotoPrev = () => {
    if (videoNumber > 0) {
      setVideoNumber((prev) => prev - 1);
    }
  };
  // ///////////////////////////////

  const [open, setOpen] = React.useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <article className="container">
      <section className="flex flex-col">
        <header className="title">
          <h1 className="text-[2rem] text-olive  font-semibold pt-2">
            Young Inventor
          </h1>
        </header>
        <div className="flex justify-center mt-2 p-2">
          <Breadcrumbs>
            <a
              href="/courses"
              className="opacity-60 text-olive font-bold text-sm shadow-none hover:bg-none hover:scale-105 transition-all duration-1000"
            >
              Courses
            </a>
            <a href="#" className="opacity-60">
              <DrawerWithNavigation videos={course.videos} />
            </a>
            {course && course.videos && course.videos.length > 0 ? (
              <a
                href="#"
                className="text-olive font-bold text-sm shadow-none hover:bg-none hover:scale-105 transition-all duration-1000"
              >
                {`video ${course?.videos[videoNumber]?.id}`}
              </a>
            ) : (
              ""
            )}
          </Breadcrumbs>
        </div>
        <article className="p-6">
          {course && course.videos && course.videos.length > 0 && (
            <YoutubeEmbed embedId={course.videos[videoNumber].url} />
          )}
        </article>

        <div className="flex w-[50%] m-auto mt-2 p-3 justify-between">
          <ButtonDefault
            Name="Prev"
            classname="text-olive bg-tealGrey"
            onclick={GotoPrev}
            disabled={videoNumber === 0}
          />

          {videoNumber < course?.videos?.length - 1 && (
            <div className="text-right ">
              <ButtonDefault
                Name="Next"
                classname="text-olive bg-tealGrey"
                onclick={GotoNext}
              />
            </div>
          )}
        </div>
        <section className="flex flex-col w-[50%] m-auto pt-5 pb-5">
          <h3 className="text-olive font-extrabold text-3xl p-4">Questions</h3>
          {course?.quiz?.map((question) => (
            <Accordion open={open === question.id} key={question.id}>
              <AccordionHeader
                onClick={() => handleOpen(question.id)}
                className="text-olive m-4 hover:text-tealGrey"
              >
                {question.id} - {question.question}
              </AccordionHeader>
              <AccordionBody className="m-4 font-medium ">
                {question.answer}
              </AccordionBody>
            </Accordion>
          ))}
        </section>
      </section>
    </article>
  );
};

export default CourseDetails;

// const questions = [
//   {
//     question: "what did you learn from here ?",
//     answer: "i learned all about inventions",
//     id: 1,
//   },
//   {
//     question: "what did you learn from here ?",
//     answer: "i learned all about inventions",
//     id: 2,
//   },
//   {
//     question: "what did you learn from here ?",
//     answer: "i learned all about inventions",
//     id: 3,
//   },
//   {
//     question: "what did you learn from here ?",
//     answer: "i learned all about inventions",
//     id: 4,
//   },
//   {
//     question: "what did you learn from here ?",
//     answer: "i learned all about inventions",
//     id: 5,
//   },
// ];
