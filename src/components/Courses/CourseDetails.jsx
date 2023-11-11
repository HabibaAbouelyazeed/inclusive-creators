import { useParams } from "react-router-dom";
import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { ButtonDefault } from "../Buttons";
import { Breadcrumbs } from "@material-tailwind/react";

const CourseDetails = () => {
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
            <a href="/courses" className="opacity-60">
              Courses
            </a>
            <a href="#" className="opacity-60">
              Younginventor
            </a>
            <a href="#">Video1</a>
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
          <Accordion open={open === 1}>
            <AccordionHeader
              onClick={() => handleOpen(1)}
              className="text-olive"
            >
              1- What do inventors do ?
            </AccordionHeader>
            <AccordionBody>
              We&apos;re not always in the position that we want to be at.
              We&apos;re constantly growing. We&apos;re constantly making
              mistakes. We&apos;re constantly trying to express ourselves and
              actualize our dreams.
            </AccordionBody>
          </Accordion>
          <Accordion open={open === 2}>
            <AccordionHeader onClick={() => handleOpen(2)}>
              2- What did Alexandar Graham invent?
            </AccordionHeader>
            <AccordionBody>
              We&apos;re not always in the position that we want to be at.
              We&apos;re constantly growing. We&apos;re constantly making
              mistakes. We&apos;re constantly trying to express ourselves and
              actualize our dreams.
            </AccordionBody>
          </Accordion>
          <Accordion open={open === 3}>
            <AccordionHeader onClick={() => handleOpen(3)}>
              3- What did Thomas adison invent?
            </AccordionHeader>
            <AccordionBody>
              We&apos;re not always in the position that we want to be at.
              We&apos;re constantly growing. We&apos;re constantly making
              mistakes. We&apos;re constantly trying to express ourselves and
              actualize our dreams.
            </AccordionBody>
          </Accordion>
          <Accordion open={open === 4}>
            <AccordionHeader onClick={() => handleOpen(4)}>
              3- What can I do with Material Tailwind?
            </AccordionHeader>
            <AccordionBody>
              We&apos;re not always in the position that we want to be at.
              We&apos;re constantly growing. We&apos;re constantly making
              mistakes. We&apos;re constantly trying to express ourselves and
              actualize our dreams.
            </AccordionBody>
          </Accordion>
          <Accordion open={open === 5}>
            <AccordionHeader onClick={() => handleOpen(5)}>
              3- What can I do with Material Tailwind?
            </AccordionHeader>
            <AccordionBody>
              We&apos;re not always in the position that we want to be at.
              We&apos;re constantly growing. We&apos;re constantly making
              mistakes. We&apos;re constantly trying to express ourselves and
              actualize our dreams.
            </AccordionBody>
          </Accordion>
        </section>
      </section>
    </article>
  );
};

export default CourseDetails;
