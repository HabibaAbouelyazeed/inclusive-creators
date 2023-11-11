import { Carousel, Typography, Button } from "@material-tailwind/react";

const CarouselWithContent = () => {
  const godown = () => {
    window.scrollTo();
  };
  return (
    <Carousel className="rounded-l h-[45rem]">
      <div className="relative h-[100%] w-[100vw]">
        <img
          src="../assets/1.jpg"
          alt="image 1"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
          <div className="w-3/4 text-center md:w-2/4">
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
              Incorporate hands-on activities and experiments to engage learners
              with special needs. These activities can help individuals
              understand abstract STEM concepts through tangible experiences.
              Use manipulatives, models, and interactive simulations to make
              learning more concrete
            </Typography>
            <div className="flex justify-center gap-2">
              <Button size="lg" color="white">
                Explore
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="relative h-full w-full">
        <img
          src="../assets/2.jpg"
          alt="image 2"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
          <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32 text-center">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              The impact of STEM
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 p-5 text-center opacity-80"
            >
              STEM education for individuals with special needs involves
              adapting teaching strategies and learning environments to
              accommodate diverse abilities, strengths, and learning styles. It
              aims to provide an inclusive and accessible education in the
              fields of Science, Technology, Engineering, and Mathematics (STEM)
            </Typography>
            <div className="flex gap-2 justify-center">
              <Button size="lg" color="white">
                Explore
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="relative h-full w-full">
        <img
          src="../assets/3.jpg"
          alt="image 3"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full items-end bg-black/75">
          <div className="w-3/4 pl-12 pb-12 md:w-2/4 md:pl-20 md:pb-20 lg:pl-32 lg:pb-32">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              Explore, experiment, discover. Thats the heart of STEM learning
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
              Integrate adaptive technology tools that cater to the specific
              needs of learners. This may include assistive devices,
              speech-to-text software, screen readers, or other tools that
              support communication and interaction.
            </Typography>
            <div className="flex gap-2 justify-center">
              <Button size="lg" color="white">
                Explore
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="relative h-full w-full">
        <img
          src="../assets/4.jpg"
          alt="image 3"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full items-end bg-black/75">
          <div className="w-3/4 pl-12 pb-12 md:w-2/4 md:pl-20 md:pb-20 lg:pl-32 lg:pb-32">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              The heart of STEM learning
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
              Foster a collaborative learning environment where students can
              work together on projects. Collaboration helps build social
              skills, teamwork, and peer support, creating a positive and
              inclusive learning experience.
            </Typography>
            <div className="flex gap-2 justify-center">
              <Button
                size="lg"
                color="white"
                onClick={() => {
                  godown;
                }}
              >
                Explore
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Carousel>
  );
};

export default CarouselWithContent;
