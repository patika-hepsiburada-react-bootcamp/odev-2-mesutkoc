import React from "react";

function Win(props) {

  return (
    <div className="win">
      <div className="winText">Win</div>
      <p className="winPText">Congrats! You saved the man. </p>
      <div>{props.values.resButton}</div>
    </div>
  );
}

export default Win;
