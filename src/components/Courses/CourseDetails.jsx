import { useParams } from "react-router-dom";
import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { ButtonDefault } from "../Buttons";
import { Breadcrumbs } from "@material-tailwind/react";
import { DrawerWithNavigation } from "./Drawer";

const CourseDetails = () => {
  const questions = [
    {
      question: "what did you learn from here ?",
      answer: "i learned all about inventions",
      id: 1,
    },
    {
      question: "what did you learn from here ?",
      answer: "i learned all about inventions",
      id: 2,
    },
    {
      question: "what did you learn from here ?",
      answer: "i learned all about inventions",
      id: 3,
    },
    {
      question: "what did you learn from here ?",
      answer: "i learned all about inventions",
      id: 4,
    },
    {
      question: "what did you learn from here ?",
      answer: "i learned all about inventions",
      id: 5,
    },
  ];
  const GotoNext = () => {};
  const GotoPrev = () => {};
  const params = useParams();
  console.log(params);
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
              <DrawerWithNavigation />
            </a>
            <a
              href="#"
              className="text-olive font-bold text-sm shadow-none hover:bg-none hover:scale-105 transition-all duration-1000"
            >
              Video1
            </a>
          </Breadcrumbs>
        </div>

        <figure className="h-[30rem] w-[70%]  mt-4 m-auto rounded-lg">
          <iframe
            className="w-full h-full rounded-lg"
            src="https://www.youtube.com/embed/hm9dhgZQHtM"
            title="YouTube video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </figure>
        <div className="flex w-[50%] m-auto mt-2 p-3 justify-between">
          <ButtonDefault
            Name="Prev"
            classname="text-olive bg-tealGrey"
            onclick={GotoNext}
          />
          <ButtonDefault
            Name="Next"
            classname="text-olive bg-tealGrey"
            onclick={GotoPrev}
          />
        </div>
        <section className="flex flex-col w-[50%] m-auto pt-5 pb-5">
          <h3 className="text-olive font-extrabold text-3xl p-4">Questions</h3>
          {questions?.map((question) => (
            <Accordion open={open === question.id} key={question.id}>
              <AccordionHeader
                onClick={() => handleOpen(question.id)}
                className="text-olive"
              >
                {question.id} - {question.question}
              </AccordionHeader>
              <AccordionBody>{question.answer}</AccordionBody>
            </Accordion>
          ))}
        </section>
      </section>
    </article>
  );
};

export default CourseDetails;
