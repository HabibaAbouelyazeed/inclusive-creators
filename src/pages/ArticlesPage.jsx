import React from "react";
import ArticlesBanner from "../components/articles/ArticlesBanner";
import ArticlesList from "../components/articles/ArticlesList";
import ArticlesSearch from "../components/articles/ArticlesSearch";
const ArticlesPage = () => {
  return (
    <>
      <ArticlesBanner />
      <ArticlesSearch />
      <ArticlesList />
    </>
  );
};

export default ArticlesPage;
