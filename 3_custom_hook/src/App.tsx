import { useEffect, useState } from "react";
import "./App.css";
import useWindowSize from "./useWindowSize";

// function App() {
//   const windowSize = useWindowSize();

//   console.log(windowSize);

//   return (
//     <div className="App">
//       <div>
//         <h2>Window width: {windowSize?.width}</h2>
//         <h2>Window height: {windowSize?.height}</h2>
//       </div>
//     </div>
//   );
// }

const Child = () => {
  useEffect(() => {
    const int = setInterval(() => {
      console.log("Did you kill me as well?");
    }, 1000);

    return () => {
      clearInterval(int);
    };
  }, []);

  return <h1>I'm still alive</h1>;
};

const App = () => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShow(false);
    }, 6000);
  }, []);

  if (!show) {
    return null;
  }

  return <Child />;
};

export default App;
