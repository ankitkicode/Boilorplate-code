export const setLocalStorage = (key, value) => localStorage.setItem(key, JSON.stringify(value));
export const getLocalStorage = (key) => JSON.parse(localStorage.getItem(key));


export const removeLocalStorage = (key) => localStorage.removeItem(key);

export const getAuthToken = () => {
  // ✅ 1. Manual `document.cookie` se token fetch karna
  const cookies = document.cookie.split("; ");
  const tokenCookie = cookies.find((row) => row.startsWith("token="));
  const manualToken = tokenCookie ? tokenCookie.split("=")[1] : null;

  // ✅ 2. `js-cookie` se token lena
  const jsCookieToken = Cookies.get("token");

  // ✅ 3. Redux Persist (Local Storage ya Redux store) se token lena
  const reduxToken = store.getState().auth?.token; // ✅ Redux store me se token directly getState() se lo

  // 🏆 **Priority Order:** Redux > js-cookie > Manual Cookie
  return reduxToken || jsCookieToken || manualToken;
};

export const formatDate = (date) => new Date(date).toLocaleDateString('en-US', {
    year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit'
});

export const capitalizeString = (str) => str.charAt(0).toUpperCase() + str.slice(1);

export const deepCloneObject = (obj) => JSON.parse(JSON.stringify(obj));
  
export const generateRandomId = () => '_' + Math.random().toString(36).substr(2, 9);
  
export const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);  


export const shortenString = (str, start = 5, end = 5, separator = '..') => {
    if (str.length <= start + end) return str; 
    return str.slice(0, start) + separator + str.slice(-end);
};

export const isEmptyObject = (obj) => {
    return Object.keys(obj).length === 0 && obj.constructor === Object;
  };

  export const getQueryParams = (url) => {
    const params = new URLSearchParams(new URL(url).search);
    let queryObject = {};
    for (let [key, value] of params.entries()) {
      queryObject[key] = value;
    }
    return queryObject;
  };

  export const copyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch (err) {
      console.error("Failed to copy:", err);
      return false;
    }
  };

  
  export const detectDeviceType = () => {
    const userAgent = navigator.userAgent;
    if (/tablet|iPad/i.test(userAgent)) return "Tablet";
    if (/mobile|Android|iPhone/i.test(userAgent)) return "Mobile";
    return "Desktop";
  };

  export const removeDuplicates = (arr, key) => {
    if (!key) return [...new Set(arr)]; // For simple arrays
    return arr.filter((obj, index, self) => 
      index === self.findIndex((t) => t[key] === obj[key])
    );
  };

  export const arrayChunk = (arr, size) => {
    return Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
      arr.slice(i * size, i * size + size)
    );
  };



  export const handleApiError = (error) => {
    if (error.response) {
      console.error("API Error:", error.response.data);
      return { success: false, message: error.response.data.message || "API Error" };
    } else if (error.request) {
      console.error("Network Error: No response received.");
      return { success: false, message: "Network error, please try again later." };
    } else {
      console.error("Unknown Error:", error.message);
      return { success: false, message: "Something went wrong." };
    }
  }; 
  
  
  export const fetchWithRetry = async (url, options = {}, retries = 3) => {
    for (let i = 0; i < retries; i++) {
      try {
        const response = await fetch(url, options);
        if (!response.ok) throw new Error("API request failed");
        return await response.json();
      } catch (error) {
        console.warn(`Retrying API... Attempt ${i + 1}`);
        if (i === retries - 1) throw error;
      }
    }
  };
  
  // Usage:
//   fetchWithRetry('https://api.example.com/data', {}, 3)
//     .then(data => console.log(data))
//     .catch(error => console.error("Final API Error:", error));  



export const debounceApiCall = (func, delay) => {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => func(...args), delay);
    };
  };
  
  // Usage:
//   const fetchProducts = debounceApiCall(async () => {
//     const data = await axios.get('/products');
//     console.log(data);
//   }, 500);
  
//   // Call fetchProducts multiple times but it will execute only once in 500ms
//   fetchProducts();
//   fetchProducts();
//   fetchProducts();

export const buildQueryString = (params) => {
    return Object.entries(params)
      .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
      .join("&");
  };
  
  // Usage:
//   const query = buildQueryString({ page: 1, search: "laptop", sort: "asc" });
//   console.log(query); // "page=1&search=laptop&sort=asc"


export const secureSetToken = (token) => {
    sessionStorage.setItem("token", token);
    document.cookie = `token=${token}; Secure; HttpOnly`;
  };
  
  export const secureGetToken = () => {
    return sessionStorage.getItem("token") || document.cookie.split("; ").find(row => row.startsWith("token="))?.split("=")[1];
  };
  
  export const secureRemoveToken = () => {
    sessionStorage.removeItem("token");
    document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
  };
  
  // Usage:
//   secureSetToken("your-jwt-token"); 
//   const userToken = secureGetToken();
//   console.log(userToken);

export const objectToFormData = (obj) => {
    const formData = new FormData();
    Object.entries(obj).forEach(([key, value]) => formData.append(key, value));
    return formData;
  };
  
  // Usage:
//   const formData = objectToFormData({ name: "John", profilePic: file });
//   fetch("/upload", { method: "POST", body: formData });

export const maskSensitiveData = (data, fields = ["password", "token"]) => {
    return JSON.stringify(data, (key, value) => fields.includes(key) ? "***" : value, 2);
  };
  
  // Usage:
//   const userData = { name: "John", password: "secret123", token: "abc123xyz" };
//   console.log(maskSensitiveData(userData)); 
  // Output: { name: "John", password: "***", token: "***" }


export const isValidUrl = (url) => {
    try {
        new URL(url);
        return true;
        } catch (_) {
        return false;
        }
    }

// Usage:
// const url = "https://example.com";
// console.log(isValidUrl(url)); // true
// console.log(isValidUrl("invalid-url")); // false



export const validateFeilds =  (values, validationRules) => {
    const errors = {};
  
    // Loop through each field and its corresponding validation rules
    for (const field in validationRules) {
      const value = values[field]; // Get the value of the field
      const rules = validationRules[field]; // Get the array of rules for the field
  
      // Loop through all validation rules for the field
      for (let i = 0; i < rules.length; i++) {
        const error = rules[i](value); // Apply rule function to the field's value
        if (error) {
          errors[field] = error; // Add error if validation fails
          break; // Stop further checks for this field if error found
        }
      }
    }
  
    return errors; // Return the validation errors
  };



  // how to use this 
  // Validation rule for email
// const validateEmail = (value) => {
//     if (!value) return "Email is required";
//     if (!/\S+@\S+\.\S+/.test(value)) return "Email is invalid";
//     return null; // No error
//   };
  
//   // Validation rule for password
//   const validatePassword = (value) => {
//     if (!value) return "Password is required";
//     if (value.length < 6) return "Password must be at least 6 characters long";
//     return null; // No error
//   };
  
//   // Group your validation rules for each field
//   const validationRules = {
//     email: [validateEmail], // Rules for the email field
//     password: [validatePassword], // Rules for the password field
//   };


    // Sample form values
// const values = {
//     email: "example@domain.com",
//     password: "12345", // This will fail the password validation
//   };
  
//   // Call the validate function
//   const errors = validate(values, validationRules);
  
//   // Print the errors object
//   console.log(errors);
  


  





  