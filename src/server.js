import express from "express";
import url from "url";
import path from "path";
import http from "http";
import { Server } from "socket.io";

const app = express();

const PORT = process.env.PORT || 3000;

const PATH = url.fileURLToPath(import.meta.url);
const PUBLIC_DIR = path.join(PATH, "../..", "public");

app.use(express.static(PUBLIC_DIR));

const httpServer = http.createServer(app);

httpServer.listen(PORT, () => console.log(`Server running on port ${PORT}`));

const io = new Server(httpServer);

export default io;