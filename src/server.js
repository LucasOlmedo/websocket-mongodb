import express from "express";
import url from "url";
import path from "path";

const app = express();

const PORT = process.env.PORT || 3000;

const PATH = url.fileURLToPath(import.meta.url);
const PUBLIC_DIR = path.join(PATH, "../..", "public");

app.use(express.static(PUBLIC_DIR));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
