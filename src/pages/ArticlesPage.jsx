import React from "react";
import ArticlesBanner from "../components/articles/ArticlesBanner";
import ArticlesList from "../components/articles/ArticlesList";
import useFetch from "../components/useFetch";
import LoaderComponent from "../components/Loader";
import SearchComponent from "../components/Search/SearchComponent";

const ArticlesPage = () => {
  // Use useMemo if you need to memoize the data
  const { data: articlesData, isLoading, error } = useFetch("articles");

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
      <ArticlesList articles={articlesData} />
    </>
  );
};

export default ArticlesPage;
