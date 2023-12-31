import { Dna } from "react-loader-spinner";

const LoaderComponent = () => {
  return (
    <div className="container py-8 md:py-12">
      <div className="flex justify-center align-items-center">
        <Dna
          visible={true}
          height="200"
          width="200"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper"
        />
      </div>
    </div>
  );
};

export default LoaderComponent;
