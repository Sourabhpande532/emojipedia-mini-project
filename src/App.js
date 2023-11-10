import logo from "./logo.svg";
import "./App.css";

let userName = "Arjun ";
let userDetails = prompt("What your name ?");
function App() {
  return (
    <div className='App'>
      <h1>Emoji-Pedia</h1>
      <h2 style={{ fontSize: "2rem", color:"red" }}>Welcome,{userName}</h2>
      <h3>{"You'r Name is "+ userDetails}</h3>
    </div>
  );
}

export default App;
