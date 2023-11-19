import React from "react";
import { Card, CardBody, Typography } from "@material-tailwind/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBullseye, faEye, faGem } from "@fortawesome/free-solid-svg-icons";

const Strategy = () => {
  return (
    <section className="py-8 bg-secondary-300">
      <div className="container mb-6 flex flex-col md:flex-row gap-8 columns-1 md:columns-3">
        <Card className="mt-6 bg-secondary-300 text-neutral-800">
          <CardBody>
            <FontAwesomeIcon
              icon={faBullseye}
              className="fa-4x text-tealGrey"></FontAwesomeIcon>
            <Typography variant="h5" className="my-4 text-olive">
              Mission
            </Typography>
            <Typography>
              Our mission is to empower parents of children with disabilities by
              providing knowledge, fostering community connections, and offering
              educational opportunities. We are dedicated to equipping parents
              with the tools to navigate unique challenges, fostering
              confidence, support, and resilience in their parenting journey.
            </Typography>
          </CardBody>
        </Card>

        <Card className="mt-6 bg-secondary-300 text-neutral-800">
          <CardBody>
            <FontAwesomeIcon
              icon={faEye}
              className="fa-4x text-tealGrey"></FontAwesomeIcon>
            <Typography variant="h5" className="my-4 text-olive">
              Vision
            </Typography>
            <Typography>
              At InCreators, we aim to be the top platform for parents of
              children with disabilities, globally recognized for fostering a
              connected community and providing exceptional resources. Our
              vision is a world where parents feel informed and empowered,
              celebrating the uniqueness of each child for brighter futures.
            </Typography>
          </CardBody>
        </Card>

        <Card className="mt-6 bg-secondary-300 text-neutral-800">
          <CardBody>
            <FontAwesomeIcon
              icon={faGem}
              className="fa-4x text-tealGrey"></FontAwesomeIcon>
            <Typography variant="h5" className="my-4 text-olive">
              Values
            </Typography>
            <Typography>
              Our values are empathy, inclusivity, and
              knowledge. We prioritize building a supportive community where
              every parent is heard and respected. Celebrating diversity, we
              foster an inclusive space that values differences and empowers
              parents with accurate information.
            </Typography>
          </CardBody>
        </Card>
      </div>
    </section>
  );
};

export default Strategy;
