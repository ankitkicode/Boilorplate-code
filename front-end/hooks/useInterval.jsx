import { useState, useEffect } from "react";

const useInterval = (callback, delay) => {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    if (delay === null) return;

    const intervalId = setInterval(() => savedCallback.current(), delay);

    return () => clearInterval(intervalId);
  }, [delay]);
};

export default useInterval;



// Usage example in a component
// const Timer = () => {
//     const [seconds, setSeconds] = useState(0);
  
//     useInterval(() => {
//       setSeconds((prev) => prev + 1);
//     }, 1000);
  
//     return (
//       <div>
//         <h1>Timer: {seconds}s</h1>
//       </div>
//     );
//   };
  