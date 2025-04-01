import { useState, useEffect } from "react";
import api from "../services/Apis"; // Assuming 'api' is the axios instance you created

const useAxiosRequest = (url, method = 'GET', body = null, interval = 5000) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;
    
    const fetchData = async () => {
      try {
        if (!isMounted) return;

        const config = {
          method,      // HTTP method (GET, POST, PUT, DELETE, etc.)
          url,         // The API endpoint URL
          data: body,  // Request body (for POST, PUT, etc.)
        };

        const response = await api(config); // Axios instance making request
        setData(response.data); // Assuming response data is in response.data
      } catch (err) {
        if (isMounted) {
          setError(err);
        }
      }
    };

    fetchData();
    const intervalId = setInterval(fetchData, interval);

    return () => {
      isMounted = false;
      clearInterval(intervalId);
    };
  }, [url, method, body, interval]);

  return { data, error };
};

export default useAxiosRequest;


// Usage example in a component

// const { data, error } = useAxiosRequest("/products");
// const { data, error } = useAxiosRequest("/products", "POST", {
//   name: "New Product",
//   price: 99.99
// });

// const { data, error } = useAxiosRequest("/products/123", "PUT", {
//   price: 79.99
// });

