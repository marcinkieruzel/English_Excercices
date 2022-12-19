import React, { useEffect, useState } from "react";
import Joke from "./Joke";
import "./App.css";

function App() {
  return (
    <Joke
      joke={
        "Found out I was color blind the other day. That one came right out of the orange."
      }
    />
  );
}

export default App;
