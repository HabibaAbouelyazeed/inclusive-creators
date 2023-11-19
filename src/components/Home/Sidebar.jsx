import React from 'react';
import { Link } from 'react-router-dom';
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";

const Sidebar = ({ articles, courses }) => {
  const displayedArticles = articles ? articles.slice(0, 3) : [];
  const displayedCourses = courses ? courses.slice(0, 2) : [];

  const articleElements = displayedArticles.map((article) => (
    <>
    
    <div key={article.id} className='mb-6'>
    
      <Card className="my-2 w-96 block mx-auto text-left scale-95 hover:scale-100 bg-neutral-100">
        <article className="max-w-2xl px-6 py-24 mx-auto space-y-16 dark:bg-gray-800 dark:text-gray-50">
          <div className="w-full mx-auto space-y-4">
            <h1 className="text-5xl font-bold">{article.title}</h1>
          </div>
          
          <div className="dark:text-gray-100">
          <Link to={`/article/${article.id}`} className='text-neutral-800 hover:underline'>
              Read More...
            </Link>
          </div>
          
        </article>
      </Card>
      
    </div>
    </>
  ));

  const courseElements = displayedCourses.map((course) => (
    <div key={course.id} className='mb-6'>
      <Link to={course.url}>
      <Card className="relative grid h-[40rem]  max-w-[28rem] items-end justify-center text-center my-2 w-96 mx-auto bg-neutral-200">
        <CardHeader
          color="transparent"
          className="absolute inset-0 m-0 h-full w-full rounded-none"
          style={{ backgroundImage: `url(${course.Image})`, backgroundSize: 'cover' }}
        >
          <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
        </CardHeader>
        <CardBody className="relative py-14 px-6 md:px-12">
          <Typography
            variant="h2"
            color="white"
            className="mb-6 font-bold leading-[1.5]"
          >
            {course.title}
          </Typography>
          <Typography
            variant="h3"
            className="mb-6 font-bold leading-[1.5] text-secondary-500"
          >
            {course.date}
          </Typography>
        </CardBody>
      </Card>
      </Link>
    </div>
  ));

  return (
    <div className="flex flex-col lg:w-1/5 sm:w-2/5 mt-6 py-6 pl-6 rounded  h-full bg-secondary-500">
      <h3 className="mb-4 text-2xl md:text-3xl lg:text-3xl text-left font-bold text-neutral-700" >Latest Articles</h3>
      {articleElements}
      <h3 className="my-4 p-2 text-2xl md:text-3xl lg:text-3xl text-left font-bold text-neutral-700" >Latest Courses</h3>
      {courseElements}
    </div>
  );
};

export default Sidebar;

