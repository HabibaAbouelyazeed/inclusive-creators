// const SearchResultCard = ({ title, description, date, url }) => {
//     return (
//         <div className="border-b border-gray-200 py-4">
//             <div className="text-sm text-gray-600">{date}</div>
//             <a href={url} className="text-blue-600 hover:text-blue-800 visited:text-purple-600">
//                 {title}
//             </a>
//             <p className="text-gray-700">{description}</p>
//         </div>
//     );
// }

// export default SearchResultCard;

const SearchResultCard = ({ title }) => {
    return (
        <div className="border-b border-gray-200 py-4">
            <div className="text-sm text-gray-600">{title}</div>
        </div>
    );
}

export default SearchResultCard;