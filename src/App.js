import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

let userCounter = 0;
let userName = "Arjun ";

let userDetails = prompt("What your name ?");

function App() {
  const [count,setCount] = useState(0);
  const getclick = () => {
    userCounter = userCounter + 1;
    setCount(userCounter)
  };

  return (
    <div className='App'>
      <h1>Emoji-Pedia</h1>
      <h2 style={{ fontSize: "2rem", color: "red" }}>Welcome,{userName}</h2>
      <h3>{"You'r Name is " + userDetails}</h3>

      <button onClick={getclick}>Like</button>
      <div>{count}</div>
    </div>
  );
}

export default App;
