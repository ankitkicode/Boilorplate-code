import { useEffect } from "react";

const useEventListener = (eventType, handler, element = window) => {
  useEffect(() => {
    const elementRef = element;
    elementRef.addEventListener(eventType, handler);

    return () => {
      elementRef.removeEventListener(eventType, handler);
    };
  }, [eventType, handler, element]);
};

export default useEventListener;




// Usage example in a component
// const MousePosition = () => {
//     const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  
//     useEventListener("mousemove", (e) => {
//       setMousePos({ x: e.clientX, y: e.clientY });
//     });
  
//     return (
//       <div>
//         <h2>Mouse Position:</h2>
//         <p>X: {mousePos.x}, Y: {mousePos.y}</p>
//       </div>
//     );
//   };
  
