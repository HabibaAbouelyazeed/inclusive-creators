import React from "react";
import ArticleCard from "./ArticleCard";

const ArticlesList = ({ articles }) => {
  // console.log(articles);
  return (
    <section className="py-8" id="articleslist">
      <div className="container mx-auto">
        <h4 className="mb-12 capitalize text-center sm:text-left text-olive text-4xl font-bold">
          recent articles
        </h4>
        <main className="articles_list ">
          {articles?.map((article) => {
            return <ArticleCard key={article.id} article={article} />;
          })}
        </main>
      </div>
    </section>
  );
};

export default ArticlesList;
