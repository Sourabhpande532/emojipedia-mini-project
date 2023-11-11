import "./App.css";
import { useState } from "react";

let emojiDictionary = {
  "🫡": "salute",
  "😍": "On the Moon",
  "😅": "Rat a smell",
  "😎": "Handsome",
  "😋": "Yummy",
  "😅": "Rat a smell",
  "😌": "Satisfy",
  "🤔": "doubt",
  "😏": "Not Interested",
  "😨": "Agitated(fearful)",
  "🥳": "Happy Birthday",
};

/* confirm befour */
console.log(emojiDictionary["😍"]);
console.log(Object.keys(emojiDictionary));

const turnDictionaryIntoArray = Object.keys(emojiDictionary);

function App() {
  const [search, setSearch] = useState("");

  /* handler section */
  const readUserValue = (event) => {
    let userInputQuerry = event.target.value;
    if (userInputQuerry in emojiDictionary) {
      setSearch(emojiDictionary[userInputQuerry]);
    } else {
      setSearch("Fail to recognize try another time");
    }
  };

  const getInfoOnClick = (emojiItem) => {
    let meaning = emojiDictionary[emojiItem];
    setSearch(meaning);
  };
  return (
    <div className='App'>
      <h1 style={{fontSize:"3.5rem",color:"#fafafa"}}>Emoji-Pedia</h1>
      <input
        type='text'
        className='input'
        placeholder='type here..'
        onChange={readUserValue}
      />
      <h1 className="showMessage">{search}</h1>
      {turnDictionaryIntoArray.map((item, index) => {
        return (
          <span
            style={{ fontSize: "2.5rem", cursor: "pointer" }}
            onClick={() => getInfoOnClick(item)}>
            {item}
          </span>
        );
      })}
    </div>
  );
}

export default App;
