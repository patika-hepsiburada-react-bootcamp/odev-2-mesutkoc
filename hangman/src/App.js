import Header from "./components/Header";
import Game from "./components/Game";
import { useState } from "react";
import "./App.css";
import defineWord from "./files/game-start";


function App() {
  const wordGuess = defineWord();
  const [word] = useState(wordGuess);
  const [moveCount, setCount] = useState(5);
  return (
    <div className="App">
      <Header word={word} moveCount={moveCount}></Header>
      <Game
        word={word}
        setCount={setCount}
        moveCount={moveCount}
      ></Game>
    </div>
  );
}

export default App;
