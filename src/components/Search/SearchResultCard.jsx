// const SearchResultCard = ({ title, description, date, url }) => {
//     return (
//         <div className="border-b border-gray-200 py-4 border-2 text-left">
//             <div className="text-sm text-gray-600">{date}</div>
//             <a href={url} className="text-blue-600 hover:text-blue-800 visited:text-purple-600">
//                 {title}
//             </a>
//             <p className="text-gray-700">{description}</p>
//         </div>
//     );
// }

// export default SearchResultCard;

const SearchResultCard = ({ title, description, date, url }) => {
    return (
        <div className="mb-2 border-b border-gray-200 py-4 px-4 bg-white hover:bg-gray-50 rounded-lg shadow text-left transition duration-300 ease-in-out">
            <div className="text-xs font-semibold text-gray-500 mb-1">{date.toUpperCase()}</div>
            <a href={url} className="text-lg text-neutral-700 hover:text-neutral-800 visited:text-purple-600 font-medium">
                {title}
            </a>
            <p className="text-gray-700 mt-2 line-clamp-3">{description}</p>
        </div>
    );
};

export default SearchResultCard;

