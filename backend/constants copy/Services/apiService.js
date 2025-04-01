import axios from "axios";
import { toast } from 'react-hot-toast';
import { getAuthToken, getOsType } from "./auth";
import { checkInternetConnection } from "./internet";
import { handleStatusCodes } from "./errorHandler";
const BASE_URL = import.meta.env.VITE_BASE_URL;


 
  /* -------------------------------------------------------------------------- */
  /*                  if internate connection is not available                  */
  /* -------------------------------------------------------------------------- */
  

const callApi = async ({ url, method, jsonData = {}, navigate = null }) => {
  // console.log(jsonData,"from callapi")
  const isConnected = await checkInternetConnection();

  if (!isConnected) {
    toast.error("No internet connection.");
  }

  try {
    const token = getAuthToken();
    const osType = getOsType();

    // console.log(token)

    const headers = {
      "Content-Type": ["POST", "PUT","DELETE","GET"].includes(method)
        ? "application/json"
        : "multipart/form-data",
        Authorization: `Bearer ${token}`,
    };

    const apiUrl = `${BASE_URL}${url}`;

    const response = await axios({
      method,
      url: apiUrl,
      data: Object.entries(jsonData).length ? jsonData : { token },
      headers,
      withCredentials: true,
    });

    handleStatusCodes(response.status, navigate);
    return response.data;
  } catch (error) {
    console.error("API Error:", error);
    // toast.error(`Error: ${error.response?.data?.error || 'Something went wrong'}`);
    return null;
  }
};



export default callApi;
