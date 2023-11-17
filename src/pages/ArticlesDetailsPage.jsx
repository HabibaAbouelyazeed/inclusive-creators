import React from "react";
import ArticlesDetails from "../components/articles/ArticlesDetails";
import useFetch from "../components/useFetch";
import { useParams } from "react-router-dom";
import LoaderComponent from "../components/Loader";
import { useMemo } from "react";
const ArticlesDetailsPage = () => {
  const params = useParams();
  const id = params.articleId;
  const { data, isLoading, error } = useFetch("articles");
  const articles = useMemo(() => {
    if (data && data.length > 0) {
      return [...data].sort((a, b) => new Date(b.date) - new Date(a.date));
    }
    return [];
  }, [data]);
  const article = articles.find((item) => item.id === parseInt(id));
  // console.log(article);
  if (isLoading) {
    return <LoaderComponent />;
  }
  if (error) {
    return <div>Error: {error}</div>;
  }
  return (
    <>
      <ArticlesDetails article={article} />
    </>
  );
};
export default ArticlesDetailsPage;
