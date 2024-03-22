import React from "react";
import "./wall.css";

interface Props {
  wallImage: string;
}

function Wall({ wallImage }: Props) {
  return (
    <section
      id="wall-root"
      style={{ backgroundImage: `url(${wallImage})` }}
    ></section>
  );
}

export default Wall;
