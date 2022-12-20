import React, { useEffect, useRef } from "react";
import $ from "jquery";

const style = {
  width: "100%",
  height: "100vh",
  backgroundColor: "red",
  position: "absolute",
};

const Useref: React.FC = (): JSX.Element => {
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {

      $(ref.current).animate({
        left: 300,
        top: 300,
      }, 2000);
    }
    
  }, []);

  return <div ref={ref} style={style}></div>;
};

export default Useref;
