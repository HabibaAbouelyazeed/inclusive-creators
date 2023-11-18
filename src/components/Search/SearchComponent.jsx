import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 

const SearchComponent = ({ title, searchCategory }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate(); 

    const handleSearch = async () => {
        console.log(`Searching for ${searchCategory}:`, searchTerm);
        // Navigate to the search page with the search term as a query parameter
        navigate(`/search?category=${searchCategory}&term=${searchTerm}`);
    };

    const containerClasses = title ? "flex flex-col items-center md:flex-row md:justify-between" : "flex flex-col items-center";
    const inputWrapperClasses = title ? "flex items-center border-2 border-secondary-300 rounded-md px-2 mt-4 md:mt-0" : "flex items-center border-2 border-secondary-300 rounded-md px-2 mt-4 md:mt-0 w-full";

    return (
        <div className="container py-3">
            <div className={containerClasses}>
                {title && (
                    <h2 className="text-2xl md:text-4xl text-olive font-bold mb-4 md:mb-0">
                        {title}
                    </h2>
                )}
                <div className={inputWrapperClasses}>
                    <input 
                        type="text"
                        className="px-4 py-2 w-full rounded-l text-black bg-white focus:border-0 outline-none"
                        placeholder={`Search for ${searchCategory}`}
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <button 
                        onClick={handleSearch}
                        className="p-2 md:p-1 bg-olive text-white text-sm md:text-base rounded-l md:rounded hover:bg-dirtyPink transition-colors"
                    >
                        Search
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SearchComponent;
