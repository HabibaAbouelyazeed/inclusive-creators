import React from "react";
import {
  Carousel,
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
} from "@material-tailwind/react";

const Testimonials = () => {
  return (
    <>
      <section className="py-8 bg-secondary-300">
        <div className="container">
          <h3 className="mb-8 text-olive text-4xl">Testimonials</h3>
          <Carousel className="rounded-xl bg-tealGrey py-8">
            {/* Card Item */}
            <Card
              color="transparent"
              shadow={false}
              className="w-full max-w-[32rem] px-16 md:px-0 md:mx-auto text-neutral-800">
              <CardHeader
                color="transparent"
                floated={false}
                shadow={false}
                className="w-full flex flex-col md:flex-row items-center gap-4 pt-0 pb-8 m-0">
                <Avatar
                  size="lg"
                  variant="circular"
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="tania andrew"
                />
                <div className="flex w-full flex-col gap-0.5">
                  <div className="flex flex-col md:flex-row items-center justify-between">
                    <Typography variant="h5" color="blue-gray">
                      Tania Andrew
                    </Typography>
                    <div className="5 flex items-center gap-0">
                      <StarIcon />
                      <StarIcon />
                      <StarIcon />
                      <StarIcon />
                      <StarIcon />
                    </div>
                  </div>
                  <Typography
                    color="blue-gray"
                    className="text-center md:text-left">
                    Parent of child with ADHD
                  </Typography>
                </div>
              </CardHeader>
              <CardBody className="mb-6 p-0">
                <Typography>
                  &quot;Transformative Experience! Inclusive Creators provides
                  an empowering platform for creativity and learning. The
                  diverse range of articles, engaging courses, and inspiring
                  events have truly enriched my creative journey. !!!&quot;
                </Typography>
              </CardBody>
            </Card>
            {/* Card Item */}
            <Card
              color="transparent"
              shadow={false}
              className="w-full max-w-[32rem] px-16 md:px-0 md:mx-auto text-neutral-800">
              <CardHeader
                color="transparent"
                floated={false}
                shadow={false}
                className="w-full flex flex-col md:flex-row items-center gap-4 pt-0 pb-8 m-0">
                <Avatar
                  size="lg"
                  variant="circular"
                  src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                  alt="tania andrew"
                />
                <div className="flex w-full flex-col gap-0.5">
                  <div className="flex flex-col md:flex-row items-center justify-between">
                    <Typography variant="h5" color="blue-gray">
                      John Walter
                    </Typography>
                    <div className="5 flex items-center gap-0">
                      <StarIcon />
                      <StarIcon />
                      <StarIcon />
                      <StarIcon />
                      <StarIcon />
                    </div>
                  </div>
                  <Typography
                    color="blue-gray"
                    className="text-center md:text-left">
                    Parent of child with Autism
                  </Typography>
                </div>
              </CardHeader>
              <CardBody className="mb-6 p-0">
                <Typography>
                  &quot;The community here is vibrant and supportive, making it
                  an exceptional space for individuals from all backgrounds to
                  thrive.!!!&quot;
                </Typography>
              </CardBody>
            </Card>
            {/* Card Item */}
            <Card
              color="transparent"
              shadow={false}
              className="w-full max-w-[32rem] px-16 md:px-0 md:mx-auto text-neutral-800">
              <CardHeader
                color="transparent"
                floated={false}
                shadow={false}
                className="w-full flex flex-col md:flex-row items-center gap-4 pt-0 pb-8 m-0">
                <Avatar
                  size="lg"
                  variant="circular"
                  src="https://images.unsplash.com/photo-1526835746352-0b9da4054862?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Jenna Doe"
                />
                <div className="flex w-full flex-col gap-0.5">
                  <div className="flex flex-col md:flex-row items-center justify-between">
                    <Typography variant="h5" color="blue-gray">
                      Jenna Doe
                    </Typography>
                    <div className="5 flex items-center gap-0">
                      <StarIcon />
                      <StarIcon />
                      <StarIcon />
                      <StarIcon />
                      <StarIcon />
                    </div>
                  </div>
                  <Typography
                    color="blue-gray"
                    className="text-center md:text-left">
                    Parent of child with ADHD
                  </Typography>
                </div>
              </CardHeader>
              <CardBody className="mb-6 p-0">
                <Typography>
                  &quot;I highly recommend Inclusive Creators for anyone seeking
                  to unlock their creative potential in a welcoming and
                  inclusive environment !!!&quot;
                </Typography>
              </CardBody>
            </Card>
            {/* Card Item */}
            <Card
              color="transparent"
              shadow={false}
              className="w-full max-w-[32rem] px-16 md:px-0 md:mx-auto text-neutral-800">
              <CardHeader
                color="transparent"
                floated={false}
                shadow={false}
                className="w-full flex flex-col md:flex-row items-center gap-4 pt-0 pb-8 m-0">
                <Avatar
                  size="lg"
                  variant="circular"
                  src="https://images.unsplash.com/photo-1534308143481-c55f00be8bd7?q=80&w=1930&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="tania andrew"
                />
                <div className="flex w-full flex-col gap-0.5">
                  <div className="flex flex-col md:flex-row items-center justify-between">
                    <Typography variant="h5" color="blue-gray">
                      Mike Peter
                    </Typography>
                    <div className="5 flex items-center gap-0">
                      <StarIcon />
                      <StarIcon />
                      <StarIcon />
                      <StarIcon />
                      <StarIcon />
                    </div>
                  </div>
                  <Typography
                    color="blue-gray"
                    className="text-center md:text-left">
                    Parent of child with Learning disability
                  </Typography>
                </div>
              </CardHeader>
              <CardBody className="mb-6 p-0">
                <Typography>
                  &quot;Exceptional Resource! Inclusive Creators has been a
                  game-changer for me. The thoughtfully curated articles,
                  insightful courses, and impactful events have significantly
                  enhanced my skills and perspective.!!!&quot;
                </Typography>
              </CardBody>
            </Card>
          </Carousel>
        </div>
      </section>
    </>
  );
};

function StarIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-5 w-5 text-yellow-700">
      <path
        fillRule="evenodd"
        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default Testimonials;
