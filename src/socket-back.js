import io from './server.js';

io.on("connection", (socket) => console.log("New client connected", socket.id));
