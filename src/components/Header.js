import React from "react";
import "./Header.css";
import HangmanIcon from "../assets/hangman.png";

function Header(props) {
  return (
    <div className="header">
      <a href="#default" className="logo">
        Hangman!
      </a>
     
      <div className="header-right">
        <img className="headerIcon" src={HangmanIcon} alt="headerImg" />
      </div>
    </div>
  );
}

export default Header;
