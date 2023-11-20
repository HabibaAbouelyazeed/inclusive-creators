import React from "react";
import ArticlesBanner from "/src/components/Articles/ArticlesBanner";
import ArticlesList from "/src/components/Articles/ArticlesList";
import useFetch from "/src/components/useFetch";
import LoaderComponent from "/src/components/Loader";
import SearchComponent from "/src/components/Search/SearchComponent";

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
      <ArticlesList articles={articlesData} />
    </>
  );
};

export default ArticlesPage;
