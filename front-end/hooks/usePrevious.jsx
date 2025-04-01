import { useRef, useEffect } from "react";

const usePrevious = (value) => {
  const ref = useRef();

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
};

export default usePrevious;


// Usage example in a component

// const Counter = () => {
//     const [count, setCount] = useState(0);
//     const prevCount = usePrevious(count);
  
//     return (
//       <div>
//         <h1>
//           Current: {count}, Previous: {prevCount}
//         </h1>
//         <button onClick={() => setCount(count + 1)}>Increment</button>
//       </div>
//     );
//   };
  