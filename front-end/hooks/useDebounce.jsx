import { useState, useEffect } from "react";

const useDebounce = (value, delay = 500) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(handler);
  }, [value, delay]);

  return debouncedValue;
};

export default useDebounce;

// Usage example in a component
// const SearchComponent = () => {
//     const [searchQuery, setSearchQuery] = useState("");
//     const debouncedSearchQuery = useDebounce(searchQuery, 1000);
  
//     useEffect(() => {
//       if (debouncedSearchQuery) {
//         // Call API with debouncedSearchQuery
//         console.log("Making API call with: ", debouncedSearchQuery);
//       }
//     }, [debouncedSearchQuery]);
  
//     return (
//       <input
//         type="text"
//         value={searchQuery}
//         onChange={(e) => setSearchQuery(e.target.value)}
//         placeholder="Search..."
//       />
//     );
//   };
  