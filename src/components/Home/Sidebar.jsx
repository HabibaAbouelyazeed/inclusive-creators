import React from 'react';
import {
    Card,
    CardHeader,
  CardBody,
  Typography,
 
   } from "@material-tailwind/react";
import CourseImg from '../../assets/images/course.jpg'
const Sidebar = () => {
    return (
 
    <div className='lg:w-1/5 sm:w-2/5 mt-6 py-6 pl-6 rounded  h-full bg-secondary-500' >
  <h3 className='mb-4 text-2xl md:text-3xl lg:text-3xl text-left font-bold'>Latest Articles</h3>
  <Card className="my-2 w-96 block mx-auto text-left">
  
   <article className="max-w-2xl px-6 py-24 mx-auto space-y-16 dark:bg-gray-800 dark:text-gray-50">
	<div className="w-full mx-auto space-y-4">
		<h1 className="text-5xl font-bold leadi">Interdum et malesuada fames ac ante ipsum primis in faucibus?</h1>
		<div className="flex flex-wrap space-x-2 text-sm dark:text-gray-400">
			<a rel="noopener noreferrer" href="#" className="p-1 hover:underline">#MambaUI</a>
			<a rel="noopener noreferrer" href="#" className="p-1 hover:underline">#TailwindCSS</a>
			<a rel="noopener noreferrer" href="#" className="p-1 hover:underline">#Angular</a>
		</div>
		<p className="text-sm dark:text-gray-400">by
			<a href="#" target="_blank" rel="noopener noreferrer" className="hover:underline dark:text-violet-400">
				<span>Leroy Jenkins</span>
			</a>on
			<time dateTime="2021-02-12 15:34:18-0200">Feb 12th 2021</time>
		</p>
	</div>
	<div className="dark:text-gray-100">
		<a href='#' className='text-neutral-800 hover:underline'>Read More...</a>
	</div>
</article>
 </Card>
 <h3 className='my-4 p-2 text-2xl md:text-3xl lg:text-3xl text-left font-bold'>Latest Courses </h3>
 <Card
      
      className="relative grid h-[40rem]  max-w-[28rem] items-end justify-center  text-center my-2 w-96  mx-auto  bg-neutral-200"
    >
      <CardHeader
        
        color="transparent"
        className="absolute inset-0 m-0 h-full w-full rounded-none"
        style={{ backgroundImage: `url(${CourseImg})`, backgroundSize: 'cover' }}

      >
        <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
      </CardHeader>
      <CardBody className="relative py-14 px-6 md:px-12">
        <Typography
          variant="h2"
          color="white"
          className="mb-6 font-medium leading-[1.5]"
        >
         Young Scientists Unleashed: STEM Adventure Day
        </Typography>
    </CardBody>
    </Card>
</div>

    );
}

export default Sidebar;
