import React, { useState } from "react";
import io from "socket.io-client";
import "./chats.css";
import Messagebox from "./messagebox/messagebox";

interface Message {
  content: string;
  time: string;
  messenger: string;
  type: string;
}

const socket = io("http://" + window.location.hostname + ":3001");
// const name = prompt("Enter Name: ") || "USER";
function Chats() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [content, setContent] = useState("");
  socket.on("message", (message: Message) => {
    message.type = "recieved";
    setMessages([...messages, message]);
  });
  const sendMessage = () => {
    const date = new Date();
    const message = {
      content: content,
      time: date.getHours() + " : " + date.getMinutes(),
      messenger: "user",
      type: "sent",
    };
    socket.emit("message", message);
    setMessages([...messages, message]);
  };
  return (
    <div id="chat-root">
      <div id="message-box">
        {messages?.map((message, index) => (
          <Messagebox key={index} messageData={message}></Messagebox>
        ))}
      </div>
      <div id="text-box">
        <input
          onChange={(e) => {
            setContent(e.currentTarget.value);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              sendMessage();
            }
          }}
        ></input>
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
}

export default Chats;
