import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const ArticleCard = ({ article }) => {
  const { id, title, img, description, author, date } = article;
  const arrowIcon = <FontAwesomeIcon icon={faArrowRight} />;
  return (
    <div className="grid grid-cols-12 my-8 shadow-lg rounded">
      <figure className="col-span-full lg:col-span-4 p-4 md:p-8">
        <img src={img} />
      </figure>
      <div className="col-span-full lg:col-span-8 text-left p-4 md:p-8">
        <h2 className="text-olive font-medium text-lg md:text-xl lg:text-4xl mb-2 md:mb-4">
          {title}
        </h2>
        <p className="text-neutral-800 text-sm md:text-base lg:text-lg mb-4 md:mb-8">
          {description}
        </p>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <figure>
              <img src="" alt="" className="rounded-full" />
            </figure>
            <h4 className="capitalize text-dirtyPink text-sm md:text-base lg:text-lg font-semibold mr-4">
              by : {author}
            </h4>
          </div>
          <h5 className="text-dirtyPink text-sm md:text-base lg:text-lg  font-semibold">
            {date}
          </h5>
        </div>
        <Link
          to={`/article/${id}`}
          className="text-olive text-sm md:text-base lg:text-lg font-medium inline-block my-2 hover:text-dirtyPink transition-all ease-in-out duration-300"
        >
          Read more <span className="mx-1 text-base">{arrowIcon}</span>
        </Link>
      </div>
    </div>
  );
};

export default ArticleCard;
