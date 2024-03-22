import React, { useState } from "react";
import "./player.css";
import "./glass.css";
import "./toon.css";

interface Props {
  home: boolean;
  state: string;
  setHome: React.Dispatch<React.SetStateAction<boolean>>;
  setState: React.Dispatch<React.SetStateAction<string>>;
}

function Player({ home, setHome, state, setState }: Props) {
  const [theme, setTheme] = useState("glass");
  const handleState = function (nextState: string) {
    if (state === nextState && home === true) {
      setHome(false);
    } else {
      setState(nextState);
      setHome(true);
    }
  };
  return (
    <div className={`player-root ${theme}-player-root`}>
      <div
        className="player-element"
        onClick={() => {
          handleState("songs");
        }}
      >
        songs
      </div>
      <div
        className="player-element"
        onClick={() => {
          handleState("chats");
        }}
      >
        chats
      </div>
      <div className="player-element">prev</div>
      <div className="player-element">play / pause</div>
      <div className="player-element">next</div>
    </div>
  );
}

export default Player;
