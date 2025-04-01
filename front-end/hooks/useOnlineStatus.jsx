import { useState, useEffect } from "react";

const useOnlineStatus = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return isOnline;
};

export default useOnlineStatus;



//how to use it in a component
// const App = () => {
//     const isOnline = useOnlineStatus();
  
//     return (
//       <div>
//         <h1>You are currently {isOnline ? "Online" : "Offline"}</h1>
//       </div>
//     );
//   };
  
