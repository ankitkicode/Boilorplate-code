import Cookies from "js-cookie";
import  store  from "../Redux/Store"; // ✅ Redux store import karo

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

export const getOsType = () => {
  return localStorage.getItem("deviceOs") || "web"; // Replace "deviceOs" with your LocalConfig.deviceOs
};
