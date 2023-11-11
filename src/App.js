import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

let userName = "Arjun ";

// let userDetails = prompt("What your name ?");
let increment = 0;

let emojiDictionary = {
  "🫡": "salute",
  "😍": "On the Moon",
  "😅": "Rat a smell",
};
console.log(emojiDictionary["😍"]);

function App() {
  const [count, setCount] = useState(0);
  const [search, setSearch] = useState("");

  const getClickedForLiked = () => {
    increment += 1;
    setCount(increment);
  };

  const readUserValue = (event) => {
   let userInputQuerry = event.target.value;
   let userInputEmoji = emojiDictionary[userInputQuerry]
   if(userInputEmoji === undefined){
    userInputEmoji = "Currently Not Avalable"
   }
   setSearch(userInputEmoji)
  };

  return (
    <div className='App'>
      <h1>Emoji-Pedia</h1>
      <h2 style={{ fontSize: "2rem", color: "red" }}>Welcome,{userName}</h2>
      <button onClick={getClickedForLiked}>Like</button>
      <small>{count}</small>
      <hr></hr>
      <input type='text' placeholder='type here..' onChange={readUserValue} />
      <h1>{search}</h1>
    </div>
  );
}

export default App;
