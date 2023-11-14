/* eslint-disable react/prop-types */
import { ButtonDefault } from "../Buttons";

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
            <input
              type="search"
              id="default-search"
              className="block w-full p-5 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search courses..."
              required
            />
            <button
              type="submit"
              className="text-olive absolute right-2.5 bottom-2.5 bg-tealGrey hover:bg-pinkGrey focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Search
            </button>
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
