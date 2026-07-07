import express from "express";
import path from "path";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, "../public")));

app.get("/api/health", (req, res) => {
    res.json({ message: "Server is running" });
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
