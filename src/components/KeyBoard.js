import React from "react";

function KeyBoard(props) {
  //these const contains letter row as a list.
  const firstRow = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
  const secondRow = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
  const thirdRow = ["Z", "X", "C", "V", "B", "N", "M"];
  //this function add letter that user guessed and if list not includes decrease retries count.
  const checkLetter = (x) => {
    props.addGuess([...props.playerGuessList, x]);
    if (props.moveCount > 0) {
      !props.wordLetterList.includes(x) && props.setCount(props.moveCount - 1);
    }
  };
  //this component creates keyboard letter rows.
  return (
    <div className="KeyBoard">
      <div className="keyboardRows">
        {KeyBoardRow(firstRow, props, checkLetter)}
        {KeyBoardRow(secondRow, props, checkLetter)}
        {KeyBoardRow(thirdRow, props, checkLetter)}
      </div>
      <div className="userGuessList">
        {props.playerGuessList.map((letter, index) => (
          <p key={index} className="guessListLetter">
            {letter}
          </p>
        ))}
      </div>
    </div>
  );
}
//this function maps list and creates row.
function KeyBoardRow(row, props, checkLetter) {
  const datas = row.map((x) =>
    props.playerGuessList.includes(x) ? null : (
      <div className="keyboardLetter" key={x} onClick={() => checkLetter(x)}>
        <span>{x}</span>
      </div>
    )
  );
  return <div className="keyboardLetters">{datas}</div>;
}

export default KeyBoard;
