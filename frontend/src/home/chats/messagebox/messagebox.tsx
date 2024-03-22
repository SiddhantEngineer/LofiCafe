import React from "react";
import "./messagebox.css";

interface Props {
  messageData: {
    content: string;
    time: string;
    messenger: string;
    type: string;
  };
}

function Messagebox({ messageData }: Props) {
  return (
    <div
      className={
        "messagebox-root " +
        (messageData.type == "sent" ? "messagebox-sent" : "") +
        (messageData.type == "recieved" ? "messagebox-recieved" : "")
      }
    >
      <div
        style={{
          marginBottom: "10px",
          fontSize: "10px",
          color: "black",
          float: "left",
          width: "100%",
        }}
      >
        by {messageData.messenger}
      </div>
      {messageData.content}
      <br></br>
      <div
        style={{
          marginTop: "10px",
          fontSize: "10px",
          color: "black",
          float: "right",
        }}
      >
        {messageData.time}
      </div>
    </div>
  );
}

export default Messagebox;
