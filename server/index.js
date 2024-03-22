require("dotenv").config();
const express = require("express"),
  app = express(),
  // database = require("./database"),
  cors = require("cors"),
  { Server } = require("socket.io");

const http = require("http");
const server = http.createServer(app);

app.use(cors());

const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log("CONNECTED");
  socket.on("message", (message) => {
    socket.broadcast.emit("message", message);
  });
});

server.listen(process.env.PORT || 3000, () => {
  console.log("SERVER RUNNING AT: ", process.env.PORT || 3000);
});
