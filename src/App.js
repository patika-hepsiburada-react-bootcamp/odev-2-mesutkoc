import Header from "./components/Header";
import Game from "./components/Game";
import { useState } from "react";
import "./App.css";
import defineWord from "./files/game-start";

function App() {
  //these const define word from function and set a state.
  const wordGuess = defineWord();
  const [word, setWord] = useState(wordGuess);
  //this count is retries count.
  const [moveCount, setCount] = useState(5);

  //this component return header and game parts.
  return (
    <div className="App">
      <Header word={word} moveCount={moveCount}></Header>
      <Game
        defineWord={defineWord}
        word={word}
        setCount={setCount}
        moveCount={moveCount}
        setWord={setWord}
      ></Game>
    </div>
  );
}

export default App;
