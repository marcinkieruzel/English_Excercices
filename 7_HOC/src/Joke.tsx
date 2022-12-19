import React, { useEffect, useState } from "react";
import "./App.css";

// function Comp2() {
//   return <h1>TEST</h1>;
// }

function Comp1({joke} : {joke: string}) {
  const [additionalJoke, setAdditionalJoke] = useState("");

  useEffect(() => {
    fetch("https://official-joke-api.appspot.com/random_joke")
      .then((res) => res.json())
      .then((res) => {
        setAdditionalJoke(`${res.setup} ${res.punchline}`);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return <Joke joke={joke} additionalJoke={additionalJoke} />;
}

function withAdditionalJoke(Comp: React.ComponentClass<any>) {
  return class AdditionalJoke extends React.Component<{ joke: string }> {
    state = {
      additionalJoke: "",
    };

    componentDidMount() {
      fetch("https://official-joke-api.appspot.com/random_joke")
        .then((res) => res.json())
        .then((res) => {
          this.setState({
            additionalJoke: `${res.setup} ${res.punchline}`,
          });
        })
        .catch((error) => {
          console.error(error);
        });
    }

    render() {
      return (
        <Comp
          joke={this.props.joke}
          additionalJoke={this.state.additionalJoke}
        />
      );
    }
  };
}

class Joke extends React.Component<{ joke: string; additionalJoke?: string }> {
  render() {
    return (
      <>
        <p>{this.props.joke}</p>
        {this.props.additionalJoke && <p>{this.props.additionalJoke}</p>}
      </>
    );
  }
}

export default Comp1;
