import { ButtonDefault } from "../Buttons";
import SearchComponent from "../Search/SearchComponent";

const Coursesinput = ({ filterbyAll, filterbyF, filterbyscience }) => {
  return (
    <div>
      <div className="container">
        <form className="mt-4 p-4">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <SearchComponent
              title={"Explore, Connect, and Grow"}
              searchCategory={"courses"}
            />
          </div>
        </form>
        <div className="row">
          <div className="col-lg-3">
            <ButtonDefault
              onClick={() => {
                filterbyAll();
              }}
              Name="all"
              classname="m-2 text-olive bg-tealGrey"
            />
            <ButtonDefault
              onClick={() => {
                filterbyscience();
              }}
              Name="Science"
              classname="m-2 text-olive bg-tealGrey"
            />
            <ButtonDefault
              onClick={() => {
                filterbyF();
              }}
              Name="Forensic Science"
              classname="m-2 text-olive bg-tealGrey"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coursesinput;
