import React, { useState } from "react";
import Wall from "./wall/wall";
import Player from "./player/player";
import Home from "./home/home";

export default function App() {
  const [wallImage, setWallImage] = useState("BG3.jpg");
  const [home, setHome] = useState(true);
  const [state, setState] = useState("chats");
  return (
    <>
      <Wall wallImage={wallImage}></Wall>
      <Player
        state={state}
        home={home}
        setHome={setHome}
        setState={setState}
      ></Player>
      <Home state={state} home={home}></Home>
    </>
  );
}
