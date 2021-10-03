import React, { useState } from "react";
import Hangman from "./Hangman";
import KeyBoard from "./KeyBoard";
import Gameover from "./Gameover";
import Win from "./Win";

function Game(props) {
  const [playerGuessList, addGuess] = useState([]);
  const [selectedWord, setSelectedWord] = useState(props.word);
  const wordLetterList = props.word.split("");
  const list = wordLetterList.map((x) =>
    playerGuessList.includes(x) ? x : "_"
  );
  const startGame = () => {
    props.tryAgain();
    setSelectedWord(props.word);
    addGuess([]);
  };
  const resButton = (
    <button className="restartButton" onClick={() => startGame()}>
      Restart
    </button>
  );
  const values = {
    resButton,
  };
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
