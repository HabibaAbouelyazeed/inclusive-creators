import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";
import useFetch from "../components/useFetch";
import LoaderComponent from "../components/Loader";
import SearchResultCard from "../components/Search/SearchResultCard";

const SearchResults = () => {
  const [filteredItems, setFilteredItems] = useState([]);
  const { search } = useLocation();
  const navigate = useNavigate();
  const { category, term } = queryString.parse(search);
  const [searchTerm, setSearchTerm] = useState(term || '');
  
  const { data, isLoading, error } = useFetch(category);

  const [filters, setFilters] = useState({
    all: category === 'all' || !category,
    events: category === 'events',
    articles: category === 'articles',
    courses: category === 'courses'
  });

  useEffect(() => {
    if (data && data.length > 0) {
      const filtered = data.filter(
        (item) => item.title && item.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredItems(filtered);
    }
  }, [data, searchTerm]);

  const handleFilterChange = (filterCategory) => {
    setFilters((prevFilters) => ({
      all: false,
      events: false,
      articles: false,
      courses: false,
      [filterCategory]: !prevFilters[filterCategory]
    }));

    // Update URL
    navigate(`/search?category=${filterCategory}&term=${searchTerm}`);
  };

  const handleSearch = () => {
    // Find active filter
    const activeFilter = Object.keys(filters).find(key => filters[key]);
    navigate(`/search?category=${activeFilter}&term=${searchTerm}`);
  };

  if (isLoading) {
    return <LoaderComponent />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="flex">
      <div className="w-1/3 p-4">
        {Object.keys(filters).map((filterCategory) => (
          <div key={filterCategory}>
            <label>
              <input
                type="checkbox"
                checked={filters[filterCategory]}
                onChange={() => handleFilterChange(filterCategory)}
              />
              {filterCategory.charAt(0).toUpperCase() + filterCategory.slice(1)}
            </label>
          </div>
        ))}
      </div>

      <div className="w-2/3 p-4">
        <div className="flex items-center border-2 border-secondary-300 rounded-md px-2 mt-4 w-full">
          <input 
            type="text"
            className="px-4 py-2 w-full rounded-l text-black bg-white focus:border-0 outline-none"
            placeholder="Search"
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

        {filteredItems.map((item) => (
          <SearchResultCard
            key={item.id}
            title={item.title}
            // description={item.description}
            // date={item.date}
            // url={item.url}
          />
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
