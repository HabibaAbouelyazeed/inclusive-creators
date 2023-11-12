import { useState } from 'react';

const SearchComponent = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = () => {
        // search logic
        console.log('Searching for:', searchTerm);
    };

    return (
        <div className="container py-6 md:py-12">
            <div className="flex flex-col items-center md:flex-row md:justify-between">
                <h2 className="text-2xl md:text-4xl text-olive font-bold mb-4 md:mb-0">
                    Explore, Connect, and Grow
                </h2>
                <div className="flex items-center border-2 border-secondary-300 rounded-md px-2 mt-4 md:mt-0">
                    <input 
                        type="text"
                        className="px-4 py-2 w-full md:w-64 rounded-l text-black bg-white focus:border-0 outline-none"
                        placeholder="Search for events"
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
