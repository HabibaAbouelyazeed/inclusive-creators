import React from "react";
import { useMemo } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../components/useFetch";
import LoaderComponent from "../components/Loader";
import ArticlesDetails from "../components/Articles/ArticlesDetails";

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
