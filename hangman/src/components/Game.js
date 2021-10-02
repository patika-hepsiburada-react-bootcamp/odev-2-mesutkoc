import React, { useState } from "react";
import Hangman from "./Hangman";
import KeyBoard from "./KeyBoard";
import Gameover from "./Gameover";
import Win from "./Win";

function Game(props) {
  const [playerGuessList, addGuess] = useState([]);
  const selectedWord = props.word;
  const wordLetterList = props.word.split("");
  const list = wordLetterList.map((x) =>
    playerGuessList.includes(x) ? x : "_"
  );
  const startGame = () => {
    window.location.reload();
  };

  const resButton = (
    <button className="restartButton" onClick={() => startGame()}>
      Restart
    </button>
  );
  const values = {
    resButton,
    selectedWord,
  };
  return (
    <div>
      <div className="guess">
        {props.moveCount > 0 &&
          list.map((x, index) => (
            <span className="guessWord" key={index} style={{ margin: "5px" }}>
              {x}
            </span>
          ))}
      </div>
      <div className="retries">Retries left: {props.moveCount}</div>
      <div className="keyBoardHangman">
        <Hangman moveCount={props.moveCount} />
        {props.moveCount === 0 ? (
          <Gameover values={values}/>
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
          <Win values={values}/>
        )}
      </div>
    </div>
  );
}

export default Game;
