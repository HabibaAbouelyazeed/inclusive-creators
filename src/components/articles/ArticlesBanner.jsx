import React from "react";
import bannerImage from "../../assets/images/articlesbanner.jpg";
import { Link } from "react-router-dom";
import { Button } from "@material-tailwind/react";

const ArticlesBanner = () => {
  return (
    <>
      <section
        className="articles_banner bg-cover bg-center bg-no-repeat h-[85vh] relative flex items-center"
        style={{ backgroundImage: `url(${bannerImage})` }}
      >
        <div className="absolute top-0 bottom-0 left-0 w-full h-full  bg-black/75"></div>
        <div className="container mx-auto">
          <div className="articles_banner_header relative z-10 max-w-lg">
            <h3 className="text-2xl md:text-4xl font-bold mb-4  text-dirtyPink text-center md:text-left">
              Empowering Every Child
            </h3>
            <p className="text-lg text-white text-center md:text-left">
              Discover valuable insights and support for parents of children
              with disabilities. Our articles focus on building a brighter
              future for every unique child.
            </p>
            <div className="text-center md:text-left my-4 flex flex-col md:flex-row">
              <Link to="/register">
                <Button
                  variant="filled"
                  className="bg-dirtyPink text-olive font-bold text-xs uppercase"
                >
                  Sign Up
                </Button>
              </Link>
              <Link to="" className="mt-4 md:mt-0">
                <Button
                  variant="outlined"
                  className="md:ml-4 font-bold text-xs uppercase text-white border border-dirtyPink focus:outline-none focus:ring-0  "
                >
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ArticlesBanner;