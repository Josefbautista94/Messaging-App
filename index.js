const express = require("express");
const app = express();
const http = require("http").createServer(app);
const socketIo = require("socket.io");
const io = socketIo(http);
const PORT = 5000;
const SOCKET_PORT = 8000;
const cors = require('cors');

app.use(cors());
app.use(express.json());

app.use("/api/auth", require("./api/auth"));
app.use("/api/messages", require("./api/messages"));
app.use("/api/chats", require("./api/chats"));

let allowCrossDomain = function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*"); 
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
}
app.use(allowCrossDomain);

app.get('/', (_, res) => {
	res.send('Hello, World!');
});

/**
 * Example socket events
 */
io.on("connection", (socket) => {
  socket.emit("Your id", socket.id);
  socket.on("frontend message", (data) => {
    io.emit("backend message", data);
  });
});

io.listen(SOCKET_PORT);
console.log(`SOCKET listening on port: http:/localhost:${SOCKET_PORT}`);

http.listen(PORT, () => console.log(`Server listening on port: http:/localhost:${PORT}`));
