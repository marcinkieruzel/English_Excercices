import React, { useEffect, useState } from "react";

function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    function listenToReset() {
      if (typeof window !== "undefined") {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }
    }
    if (typeof window !== "undefined") {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });

      window.addEventListener("resize", listenToReset);
    }

    return () => {
      typeof window !== "undefined" &&
        window.removeEventListener("resize", listenToReset);
    };
  }, []);

  console.log("XX", windowSize);

  return windowSize;
}

export default useWindowSize;
