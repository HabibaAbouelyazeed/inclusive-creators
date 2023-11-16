import React, { useState, useEffect } from "react";
import axios from "axios";
import ArticleCard from "./ArticleCard";

const ArticlesList = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/articles") 
      .then((response) => {
        console.log(response.data); 
        setArticles(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const articleList = articles?.map((article) => (
    <ArticleCard key={article.id} article={article} />
  ));

  return (
    <section className="py-8">
      <div className="container mx-auto">
        <h4 className="mb-12 capitalize text-center sm:text-left text-olive text-4xl font-bold">
          recent articles
        </h4>
        <main className="articles_list">{articleList}</main>
      </div>
    </section>
  );
};

export default ArticlesList;
