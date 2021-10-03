import React, { useState } from "react";
import Hangman from "./Hangman";
import KeyBoard from "./KeyBoard";
import Gameover from "./Gameover";
import Win from "./Win";

function Game(props) {
  //const shows player guessed letters and selected word letters.
  const [playerGuessList, addGuess] = useState([]);
  const [selectedWord, setSelectedWord] = useState(props.word);
  const wordLetterList = props.word.split("");
  const list = wordLetterList.map((x) =>
    playerGuessList.includes(x) ? x : "_"
  );
  //function starts game if user win or lose.
  const startGame = () => {
    const wordGuessNew = props.defineWord();
    props.setWord(wordGuessNew);
    props.setCount(5);
    setSelectedWord(wordGuessNew);
    addGuess([]);
  };
  //button that used in win and gameover components to restart game.
  const resButton = (
    <button className="restartButton" onClick={() => startGame()}>
      Restart
    </button>
  );
  //use send button to components
  const values = {
    resButton,
  };

  //this component return 4 different components according to state.
  // Hangman, Gameover, Keyboard, Win components.
  return (
    <div>
      <div className="guess">
        {props.moveCount > 0 ? (
          list.map((x, index) => (
            <span className="guessWord" key={index} style={{ margin: "5px" }}>
              {x}
            </span>
          ))
        ) : (
          <h3>The word is {selectedWord}</h3>
        )}
      </div>
      <div className="hint">
        Hint?<span className="hintText"> Think about software terms.</span>
      </div>
      <div className="retries">Retries left: {props.moveCount}</div>
      <div className="keyBoardHangman">
        <Hangman moveCount={props.moveCount} />
        {props.moveCount === 0 ? (
          <Gameover values={values} />
        ) : list.includes("_") ? (
          <KeyBoard
            props={props}
            moveCount={props.moveCount}
            setCount={props.setCount}
            addGuess={addGuess}
            playerGuessList={playerGuessList}
            wordLetterList={wordLetterList}
          ></KeyBoard>
        ) : (
          <Win values={values} />
        )}
      </div>
    </div>
  );
}

export default Game;
