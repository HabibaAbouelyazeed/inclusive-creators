import React, { useEffect } from "react";

import ArticleCard from "./ArticleCard";
import axios from "axios";

const ArticlesList = () => {
  const articles = [
    {
      id: 1,
      title: "Inclusive Education for Children with Disabilities",
      content:
        "Discussing the importance of inclusive education and its impact on the learning experiences of children with disabilities.",
      author: "John Doe",
      date: "2023-01-15",
    },
    {
      id: 2,
      title: "Assistive Technologies Transforming Learning",
      content:
        "Exploring how assistive technologies are revolutionizing the way children with disabilities learn and engage in educational activities.",
      author: "Jane Smith",
      date: "2023-02-01",
    },
    {
      id: 3,
      title: "Supportive Communities: A Key to Thriving",
      content:
        "Highlighting the role of supportive communities in providing assistance and understanding to families with children who have disabilities.",
      author: "Samuel Johnson",
      date: "2023-03-10",
    },
  ];
  // const apiKey = "7c84bb645b6b4de6b9e2dbbd59743cf4";
  // const searchQuery = "children with disabilities";
  // const url = `https://newsapi.org/v2/everything?q=${searchQuery}&from=2023-11-13&sortBy=popularity&apiKey=${apiKey}`;
  // useEffect(() => {
  //   axios
  //     .get(url)
  //     .then((res) => {
  //       if (res.data.status === "ok") {
  //         if (res.data.totalResults > 0) {
  //           console.log(res.data.articles);
  //         } else {
  //           console.log("No articles found for the search query.");
  //         }
  //       } else {
  //         console.log(
  //           "API request failed with the following error:",
  //           res.data.message
  //         );
  //       }
  //     })
  //     .catch((error) => {
  //       console.log(
  //         "An error occurred while making the API request:",
  //         error.message
  //       );
  //     });
  // }, []);
  return (
    <section className="py-8">
      <div className="container mx-auto">
        <h4 className="mb-12 capitalize text-center sm:text-left text-olive text-4xl font-bold">
          recent articles
        </h4>
        <main className="articles_list">
          {articles?.map((article) => {
            return <ArticleCard key={article.id} article={article} />;
          })}
        </main>
      </div>
    </section>
  );
};

export default ArticlesList;
