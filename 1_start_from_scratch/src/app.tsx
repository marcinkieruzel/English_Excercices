import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

class Person2 extends React.Component<{ name: string }> {
  render() {
    return <h1>Hi my name is {this.props.name}</h1>;
  }
}

function Person({ name, lastName }: { name: string; lastName: string }) {
  let age1 = 23;
  let [age, setAge] = useState(23);
  let state = useState("Marcin");
  let [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log("Somthing changed");

    function followResize(event: Event) {
      console.log(this.innerHeight);
      console.log(this.innerWidth);
    }

    window.addEventListener("resize", followResize);

    const int = setInterval(() => {
      console.log("Interval changed");
      //   setCounter(prev => prev + 1);
    }, 1000);

    return () => {
      clearInterval(int);
      window.removeEventListener(followResize);
    };
  }, []);

  useEffect(() => {
    if (age !== 23) {
      console.log("I'm getting older");
    }
  }, [age]);

  console.log("Somthing changed however");

  return (
    <h1>
      Counter {counter} <br />
      I'm {state[0]} {lastName} and I'm {age} {age1}
      <button
        onClick={() => {
          age1 = 1000;
          state[1]("Adam");
          setAge((prev) => prev + 1);
        }}
      >
        Getting older
      </button>
    </h1>
  );
}

// new Person({name: "Marcin", lastName: "K"}) // <Person name="Marcin" />

const App = ({ name }: { name: string }) => {
  return (
    <>
      <Person name={name} lastName={"K"} />
      <Person2 name={name} />
    </>
  );
};

ReactDOM.render(<App name="Marcin" />, document.querySelector("#root2"));
