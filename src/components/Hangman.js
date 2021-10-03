import React, { useEffect, useState } from "react";
import HangmanHead from "../assets/HangmanHead.png";
import HangmanBody from "../assets/HangmanBody.png";
import HangmanFirstArm from "../assets/HangmanFirstArm.png";
import HangmanSecondArm from "../assets/HangmanSecondArm.png";
import HangmanFirstLeg from "../assets/HangmanFirstLeg.png";
import HangmanSecondLeg from "../assets/HangmanSecondLeg.png";
import "./Game.css";

export default function Hangman(props) {
  //const contains hagman pictures according to state.
  const [hangman, setHangman] = useState();

  useEffect(() => {
    switch (props.moveCount) {
      case 5: {
        return setHangman(HangmanHead);
      }
      case 4: {
        return setHangman(HangmanBody);
      }
      case 3: {
        return setHangman(HangmanFirstArm);
      }
      case 2: {
        return setHangman(HangmanSecondArm);
      }
      case 1: {
        return setHangman(HangmanFirstLeg);
      }
      case 0: {
        return setHangman(HangmanSecondLeg);
      }
      default:
        return;
    }
  }, [props.moveCount]);
  return (
    <div className="hangman">
      <img src={hangman} alt="one" />
    </div>
  );
}
