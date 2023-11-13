import React from "react";
import articleImage from "../../assets/images/31343C.svg";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const ArticleCard = ({ article }) => {
  const arrowIcon = <FontAwesomeIcon icon={faArrowRight} />;
  return (
    <div className="grid grid-cols-12 my-8 shadow-lg rounded">
      <figure className="col-span-full md:col-span-4 p-4 md:p-8">
        <img src={articleImage} alt="" />
      </figure>
      <div className="col-span-full md:col-span-8 text-left p-4 md:p-8">
        <h3 className="text-olive font-medium text-lg md:text-xl lg:text-2xl mb-2 md:mb-4">
          {article.title}
        </h3>
        <p className="text-olive text-sm md:text-base lg:text-lg mb-4 md:mb-8">
          {article.content}
        </p>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <figure>
              <img
                src="https://placehold.co/48x48/DDD3D2/5D6B6B"
                alt=""
                className="rounded-full"
              />
            </figure>
            <h4 className="capitalize text-dirtyPink text-sm md:text-base lg:text-lg font-semibold mx-4">
              by : {article.author}
            </h4>
          </div>
          <h5 className="text-dirtyPink text-sm md:text-base lg:text-lg  font-semibold">
            {article.date}
          </h5>
        </div>
        <Link
          to={`/article/:${article.id}`}
          className="text-olive text-sm md:text-base lg:text-lg font-medium inline-block my-2 hover:text-dirtyPink transition-all ease-in-out duration-300"
        >
          Learn more <span className="mx-1 text-base">{arrowIcon}</span>
        </Link>
      </div>
    </div>
  );
};

export default ArticleCard;
