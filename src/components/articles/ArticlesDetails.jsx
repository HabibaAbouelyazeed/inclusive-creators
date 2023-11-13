import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import articleImage from "../../assets/images/31343C.svg";
const ArticlesDetails = () => {
  const [article, setArticle] = useState({});
  const params = useParams();
  const articleId = params.id;
  //fetch data by articleId
  return (
    <section className="py-8">
      <div className="container mx-auto">
        <h1 className="capitalize text-olive font-medium md:font-bold text-lg md:text-xl lg:text-2xl mb-8">
          Inclusive Education for Children with Disabilities
        </h1>
        <figure className=" w-full ">
          <img src={articleImage} alt="" className="max-h-[350px] " />
        </figure>
        <div className="flex flex-col items-center my-4">
          <figure className="w-20 h-20">
            <img
              src="https://placehold.co/48x48/DDD3D2/5D6B6B"
              alt=""
              className="rounded-full"
            />
          </figure>
          <h3 className="mt-2 text-olive font-medium text-md">
            {" "}
            By : John Doe
          </h3>
          <h4 className="text-dirtyPink font-medium text-md">2023-02-01</h4>
        </div>
        <p className="text-left text-olive text-sm md:text-base lg:text-lg font-medium max-w-[80%] mx-auto">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia
          eveniet necessitatibus consequuntur facere odit ad dolor? Et ducimus
          facilis odit asperiores voluptatibus, pariatur, porro nostrum, modi
          expedita autem non molestiae?Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. A aperiam accusamus impedit pariatur enim ipsa aut
          vero aspernatur maiores quo, dolores ex deleniti accusantium, maxime
          dolorum distinctio doloribus voluptatum exercitationem.
        </p>
      </div>
    </section>
  );
};

export default ArticlesDetails;
