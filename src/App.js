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
console.log(Object.keys(emojiDictionary));

const turnDictionaryIntoArray = Object.keys(emojiDictionary)

function App() {
  const [count, setCount] = useState(0);
  const [search, setSearch] = useState("");

  const getClickedForLiked = () => {
    increment += 1;
    setCount(increment);
  };

  const readUserValue = (event) => {
    let userInputQuerry = event.target.value;
    if (userInputQuerry in emojiDictionary) {
      setSearch(emojiDictionary[userInputQuerry]);
    } else {
      setSearch("Fail to recognize try another time");
    }
    // let userInputEmoji = emojiDictionary[userInputQuerry];
    //  if(userInputEmoji === undefined){
    //   userInputEmoji = "Currently Not Avalable"
    //  }
    //  setSearch(userInputEmoji)
  };

  const getInfoOnClick = (emojiItem)=>{
    let meaning = emojiDictionary[emojiItem];
    setSearch(meaning);
  }

  return (
    <div className='App'>
      <h1>Emoji-Pedia</h1>
      <h2 style={{ fontSize: "2rem", color: "red" }}>Welcome,{userName}</h2>
      <button onClick={getClickedForLiked}>Like</button>
      <small>{count}</small>
      <hr></hr>
      <input type='text' placeholder='type here..' onChange={readUserValue} />
      <h1>{search}</h1>
      {turnDictionaryIntoArray.map((item,index)=>{
        return(
          <span 
          style={{fontSize:"3rem"}}
          onClick={()=>getInfoOnClick(item)}
          >
          {item}</span>
        )
  })}
    </div>
  );
}

export default App;
