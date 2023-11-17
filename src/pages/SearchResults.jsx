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
  const [searchTerm, setSearchTerm] = useState(term || "");

  const { data, isLoading, error } = useFetch(category);

  const [filters, setFilters] = useState({
    all: category === "all" || !category,
    events: category === "events",
    articles: category === "articles",
    courses: category === "courses",
  });

  useEffect(() => {
    if (data && data.length > 0) {
      const filtered = data.filter(
        (item) =>
          item.title &&
          item.title.toLowerCase().includes(searchTerm.toLowerCase())
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
      [filterCategory]: !prevFilters[filterCategory],
    }));
  
    navigate(`/search?category=${filterCategory}&term=${searchTerm}`, { replace: true });
  
    if (data && data.length > 0) {
      const newFilteredItems = data.filter(item => {
        return item.category === filterCategory && item.title.toLowerCase().includes(searchTerm.toLowerCase());
      });
      setFilteredItems(newFilteredItems);
    }
  };

  const handleSearch = () => {
    const activeFilter = Object.keys(filters).find(key => filters[key]);
  
    navigate(`/search?category=${activeFilter}&term=${searchTerm}`, { replace: true });
  
    if (data && data.length > 0) {
      const newFilteredItems = data.filter(item => {
        const titleMatch = item.title.toLowerCase().includes(searchTerm.toLowerCase());
        const categoryMatch = item.category === activeFilter || activeFilter === 'all';
        return titleMatch && categoryMatch;
      });
      setFilteredItems(newFilteredItems);
    }
  };

  if (isLoading) {
    return <LoaderComponent />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="container py-6 md:py-12">
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

      <div className="flex pt-6">
        <div className="w-1/5 text-left">
          <h3 className="text-xl text-olive font-bold mb-4">Category</h3>
          {Object.keys(filters).map((filterCategory) => (
            <div key={filterCategory} className="flex items-center mb-2">
              <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-olive mr-2"
                style={{ transform: "scale(1.5)", accentColor: "#F7CBCA" }}
                checked={filters[filterCategory]}
                onChange={() => handleFilterChange(filterCategory)}
              />
              <label className="text-lg">
                {filterCategory.charAt(0).toUpperCase() +
                  filterCategory.slice(1)}
              </label>
            </div>
          ))}
        </div>

        <div className="w-4/5">
        <h3 className="text-md text-olive font-semibold mb-4 text-left">{filteredItems.length} results found</h3>
          {filteredItems.map((item) => (
            <SearchResultCard
              key={item.id}
              title={item.title}
              description={item.description}
              date={item.date}
              url={item.url}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchResults;
