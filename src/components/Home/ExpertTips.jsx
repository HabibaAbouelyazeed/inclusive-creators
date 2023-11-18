import React, {useState} from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
 
const expertTips= ()=> {
  const [open, setOpen] = useState(1);
 
  const handleOpen = (value) => setOpen(open === value ? 0 : value);
 
  return (
    <div className="w-10/12 p-9 my-9 bg-secondary-500">
    <h3 className='mb-6 text-2xl md:text-3xl lg:text-3xl text-left font-bold text-neutral-700'>Experts Tips</h3>
      <Accordion open={open === 1} >
        <AccordionHeader onClick={() => handleOpen(1)} className="dark:text-gray-50 lg:text-xl">Parenting Tips For Kids With Learning Difficulties</AccordionHeader>
        <AccordionBody className="text-left text-lg">
  {[
    "Teach your child to read early.",
    "Don’t blame your child; help them.",
    "Encourage their strengths and acknowledge their weaknesses.",
    "Keep a special box of rocks and stones in the house, as well as a small hammer!",
    "Help your child feel included and understood.",
    "Get the most out of school for your child with learning difficulties!",
    "Finding support for you and your child throughout the journey",
  ].map((point, index) => (
    <div key={index}>{`${index + 1}. ${point}`}</div>
  ))}

<a href="https://www.unitedwecare.com/7-parenting-tips-for-kids-with-learning-difficulties/#:~:text=7%20Parenting%20Tips%20For%20Learning%20Difficulties%3A%201%201.,your%20child%20with%20learning%20difficulties%21%20...%20More%20items" target="blank" className="my-4 block text-secoundry-500 underline">
           Read More.. </a>
</AccordionBody>


      </Accordion>
      <Accordion open={open === 2}>
        <AccordionHeader onClick={() => handleOpen(2)} className="dark:text-gray-50">
         Parenting Tips for Kids with ADHD
        </AccordionHeader>
        <AccordionBody className="text-left text-lg">
  {[
    "Set up a reward system for good behaviour",
    "Set up a reward system for good behaviour",
    " Give your child structure and routine",
    "Have an action plan for when things go wrong",
    " Be consistent in your discipline style",
    " Keep the communication open",
    "Include fun activities",
  ].map((point, index) => (
    <div key={index}>{`${index + 1}. ${point}`}</div>
  ))}

<a href="https://www.unitedwecare.com/7-parenting-tips-for-kids-with-adhd/" className="my-4 block text-secoundry-500 underline">
           Read More.. </a>
</AccordionBody>

      </Accordion>
      <Accordion open={open === 3}>
        <AccordionHeader onClick={() => handleOpen(3)} className="dark:text-gray-50">
        Parenting Tips For Kids With Autism
        </AccordionHeader>
        <AccordionBody className="text-left text-lg">
  {[
    "Never delay seeking a professional diagnosis",
    "Developing a treatment plan",
    "Early intervention",
    "Consistent supportKeep a special box of rocks and stones in the house, as well as a small hammer!",
    "Keep them safe at home",
    "Keep them safe at home",
    "Connect with the child",
  ].map((point, index) => (
    <div key={index}>{`${index + 1}. ${point}`}</div>
  ))}

<a href="https://www.unitedwecare.com/7-parenting-tips-for-kids-with-autism/" target="blank" className="my-4 block text-secoundry-500 underline">
           Read More.. </a>
</AccordionBody>
      </Accordion>
    </div>
  );
}
export default expertTips;