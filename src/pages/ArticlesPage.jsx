import React, { useMemo } from "react";
import ArticlesBanner from "../components/articles/ArticlesBanner";
import ArticlesList from "../components/articles/ArticlesList";
import ArticlesSearch from "../components/articles/ArticlesSearch";
import useFetch from "../components/useFetch";
import LoaderComponent from "../components/Loader";
import SearchComponent from "../components/Search/SearchComponent";
const ArticlesPage = () => {
  const { data, isLoading, error } = useFetch("articles");
  const articles = useMemo(() => {
    if (data && data.length > 0) {
      return [...data].sort((a, b) => new Date(b.date) - new Date(a.date));
    }
    return [];
  }, [data]);
  if (isLoading) {
    return <LoaderComponent />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  return (
    <>
      <ArticlesBanner />
      <SearchComponent
        title={"Explore, Connect, and Grow"}
        searchCategory={"articles"}
      />
      {/* <ArticlesSearch /> */}
      <ArticlesList articles={articles} />
    </>
  );
};

export default ArticlesPage;
