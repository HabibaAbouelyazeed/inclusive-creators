import React from "react";

const ArticlesDetails = ({ article }) => {
  if (!article) return null;
  const { title, img, author, content, source } = article;
  return (
    <section className="py-8">
      <div className="container mx-auto">
        <h1 className="capitalize text-olive font-medium md:font-bold text-lg md:text-xl lg:text-5xl mb-8">
          {title}
        </h1>
        <figure className="w-3/5 m-auto">
          <img src={img} alt="" className="max-h-[350px]" />
        </figure>
        <div className="flex flex-col items-center my-4">
          <h3 className="mt-2 text-olive font-medium text-md">By: {author}</h3>
          <h4 className="text-dirtyPink font-medium text-md">{article.date}</h4>
        </div>
        <p className="text-left text-olive py-4 text-sm md:text-base lg:text-lg font-medium max-w-[80%] mx-auto">
          {content}
        </p>
        <h3 className="text-xl text-dirtyPink hover:underline hover:text-olive">
          <a href={source} target="blank">
            More details: {source}
          </a>
        </h3>
      </div>
    </section>
  );
};

export default ArticlesDetails;
