import React from "react";
import articleImage from "../../assets/images/31343C.svg";

const ArticleCard = ({ article }) => {
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
        <div className="flex items-center">
          <h4 className="text-dirtyPink text-sm md:text-base lg:text-lg">
            {article.author}
          </h4>
          <h5 className="text-dirtyPink text-sm md:text-base lg:text-lg mx-4 md:mx-8">
            {article.date}
          </h5>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
