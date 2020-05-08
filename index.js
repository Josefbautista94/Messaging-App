const express = require("express");
const app = express();
const http = require("http").createServer(app);
const socketIo = require("socket.io");
const io = socketIo(http);
const PORT = 5000;
const SOCKET_PORT = 8000;

app.use(express.json());

app.get("/", (_, res) => {
  res.send("Hello, World!");
});

/**
 * Example socket events
 */
io.on("connection", (socket) => {
  socket.on("frontend message", (data) => {
    io.emit("backend message", data);
  });
});

io.listen(SOCKET_PORT);
console.log(`SOCKET listening on port ${SOCKET_PORT}`);

http.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
