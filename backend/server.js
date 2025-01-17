const app = require("express")();
const server = require("http").createServer(app);

const io = require("socket.io")(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
    allowedHeaders: ["my-custom-header"],
    credentials: true,
  },
});

io.on("connection", (socket) => {
  console.log("What is Socket: ", socket);
  console.log("Socket is active to be connvcted");
  socket.on("chat", (payload) => {
    console.log("what is payload", payload);
    io.emit("chat", payload);
  });
});

server.listen(5000, () => {
  console.log("Server is listening on port 5000 ....");
});
