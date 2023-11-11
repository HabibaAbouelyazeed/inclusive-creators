import { useState } from 'react';

const SearchComponent = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = () => {
        // search logic
        console.log('Searching for:', searchTerm);
    };

    return (
        <div className="container py-10">
        <div className=" flex items-center justify-between">
            <h2 className="text-4xl text-olive font-bold">Explore, Connect, and Grow</h2>
            <div className="flex items-center border-2 border-secondary-300 rounded-md px-2">
                <input 
                    type="text"
                    className="px-4 py-2 w-full rounded-l text-secondary-300 bg-white"
                    placeholder="Search for events"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button 
                    onClick={handleSearch}
                    className="p-1 bg-olive text-white text-sm rounded"
                >
                    Search
                </button>
            </div>
        </div>
        </div>
    );
};

export default SearchComponent;
