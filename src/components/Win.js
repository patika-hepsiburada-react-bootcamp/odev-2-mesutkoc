import React from "react";
import Medal from "../assets/medal.png";
function Win(props) {
  return (
    <div className="win">
      <div className="winDiv">
        <div className="winText">Win</div>
        <p className="winPText">Congrats! You saved the man. </p>
        <div>{props.values.resButton}</div>
      </div>
      <div className="medal">
        <img src={Medal} alt="medal"></img>
      </div>
    </div>
  );
}

export default Win;
