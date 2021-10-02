import React from "react";

function KeyBoard(props) {
  const firstRow = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
  const secondRow = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
  const thirdRow = ["Z", "X", "C", "V", "B", "N", "M"];
  const mesut = (x) => {
    props.addGuess([...props.playerGuessList, x]);
    if (props.moveCount > 0) {
      !props.wordLetterList.includes(x) && props.setCount(props.moveCount - 1);
    }
  };

  return (
    <div className="KeyBoard">
      <div className="keyboardRows">
        {KeyBoardRow(firstRow, props, mesut)}
        {KeyBoardRow(secondRow, props, mesut)}
        {KeyBoardRow(thirdRow, props, mesut)}
      </div>
    </div>
  );
}
function KeyBoardRow(row, props, mesut) {
  const datas = row.map((x) =>
    props.playerGuessList.includes(x) ? null : (
      <div className="keyboardLetter" key={x} onClick={() => mesut(x)}>
        <span>{x}</span>
      </div>
    )
  );
  return <div className="keyboardLetters">{datas}</div>;
}

export default KeyBoard;
