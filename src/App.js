import "./App.css";
import { useState } from "react";

let emojiMeanings = {
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

const turnEmojiKeysIntoArray = Object.keys(emojiMeanings);

function App() {
  const [search, setSearch] = useState("Result will show here");

  // Event handler for input change
  const readUserValue = (event) => {
    let userInputEmoji = event.target.value;
    if (userInputEmoji in emojiMeanings) {
      setSearch(emojiMeanings[userInputEmoji]);
    } else {
      setSearch("Fail to recognize try another time");
    }
  };

  // Event Handler for Emoji Click:
  const handleEmojiClick = (emojiItem) => {
    let meaning = emojiMeanings[emojiItem];
    setSearch(meaning);
  };

  // JSX
  return (
    <div className='App'>
      <h1 style={{ fontSize: "3.5rem", color: "#fafafa" }}>Emoji-Pedia</h1>
      <input
        type='text'
        className='input'
        placeholder='Insert an emoji here to know its real meaning '
        onChange={readUserValue}
      />
      <h1 className='showMessage'>{search}</h1>
      {turnEmojiKeysIntoArray.map((item, index) => {
        return (
          <span
            key={index}
            style={{ fontSize: "2.5rem", cursor: "pointer" }}
            onClick={() => handleEmojiClick(item)}>
            {item}
          </span>
        );
      })}
    </div>
  );
}

export default App;
