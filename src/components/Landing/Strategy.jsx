import React from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBullseye, faEye, faGem } from "@fortawesome/free-solid-svg-icons";

const Strategy = () => {
  return (
    <section className="py-8 bg-secondary-300">
      <div className="container mb-6 flex flex-col md:flex-row gap-8 columns-1 md:columns-3">
        <Card className="mt-6 bg-secondary-300 text-olive">
          <CardBody>
            <FontAwesomeIcon
              icon={faBullseye}
              className="fa-4x"></FontAwesomeIcon>
            <Typography variant="h5" className="my-4">
              Mission
            </Typography>
            <Typography>
              Because it&apos;s about motivating the doers. Because I&apos;m
              here to follow my dreams and inspire others.
            </Typography>
          </CardBody>
        </Card>

        <Card className="mt-6 bg-secondary-300 text-olive">
          <CardBody>
            <FontAwesomeIcon icon={faEye} className="fa-4x"></FontAwesomeIcon>
            <Typography variant="h5" className="my-4">
              Vision
            </Typography>
            <Typography>
              Because it&apos;s about motivating the doers. Because I&apos;m
              here to follow my dreams and inspire others.
            </Typography>
          </CardBody>
        </Card>

        <Card className="mt-6 bg-secondary-300 text-olive">
          <CardBody>
            <FontAwesomeIcon icon={faGem} className="fa-4x"></FontAwesomeIcon>
            <Typography variant="h5" className="my-4">
              Values
            </Typography>
            <Typography>
              Because it&apos;s about motivating the doers. Because I&apos;m
              here to follow my dreams and inspire others.
            </Typography>
          </CardBody>
        </Card>
      </div>
    </section>
  );
};

export default Strategy;
