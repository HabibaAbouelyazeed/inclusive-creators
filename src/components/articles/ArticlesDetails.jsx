import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ArticlesDetails = () => {
  const [article, setArticle] = useState({});
  const params = useParams();
  const articalId = params.articalId;

  useEffect(() => {
    console.log("Artical ID:", articalId);
    axios
      .get(`http://localhost:3000/articles/${articalId}`)
      .then((response) => {
        setArticle(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [articalId]);
  
  
  return (
    <section className="py-8">
      <div className="container mx-auto">
        <h1 className="capitalize text-olive font-medium md:font-bold text-lg md:text-xl lg:text-5xl mb-8">
          {article.title}
        </h1>
        <figure className="w-3/5 m-auto">
          <img src={article.img} alt="" className="max-h-[350px]" />
        </figure>
        <div className="flex flex-col items-center my-4">
          
          <h3 className="mt-2 text-olive font-medium text-md">
            
            By: {article.author}
          </h3>
          <h4 className="text-dirtyPink font-medium text-md">{article.date}</h4>
        </div>
        <p className="text-left text-olive py-4 text-sm md:text-base lg:text-lg font-medium max-w-[80%] mx-auto">
          {article.content}
        </p>
        <h3 className="text-xl text-dirtyPink hover:underline hover:text-olive"><a href={article.source} target="blank">More details: {article.source}</a></h3>
      </div>
    </section>
  );
};

export default ArticlesDetails;
