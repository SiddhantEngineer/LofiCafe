import React, { useState } from "react";
import "./home.css";
import Chats from "./chats/chats";
import Songs from "./songs/songs";

interface Props {
  home: boolean;
  state: string;
}

function Home({ home, state }: Props) {
  return (
    <div
      id="home-root"
      className={home ? "home-root-show" : "home-root-hidden"}
    >
      <div id="home-header">{state}</div>
      <div id="home-body">
        {state === "chats" ? (
          <Chats></Chats>
        ) : state === "songs" ? (
          <Songs></Songs>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default Home;
