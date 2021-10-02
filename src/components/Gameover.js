import React from "react";
import FuneralCar from "../assets/funeralvehicle.png"
function Gameover(props) {

  return (
    <div className="gameover">
      <div className="gameoverDiv">
        <div className="gameoverText">Game Over!</div>
        <p className="gameoverPText">You hanged the man!</p>
        <p className="gameoverPText">The word is {props.values.selectedWord}.</p>
        <div>{props.values.resButton}</div>
      </div>
      <div className="funeralcar">
        <img src={FuneralCar} alt="funeralvehicle"></img>
      </div>
    </div>
  );
}
export default Gameover;
