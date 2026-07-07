import express from "express";
import path from "path";
import { db } from "./db/database";

const app = express();
const PORT = 3000;

type User = {
    id: number;
    name: string;
    age: string;
    email: string;
    phone: string;
    address: string;
    job: string;
    note: string;
};

app.use(express.json());
app.use(express.static(path.join(__dirname, "../public")));

app.get("/api/health", (req, res) => {
    res.json({ message: "Server is running" });
});

app.post("/api/users", (req, res) => {
    const { name, age, email, phone, address, job, note } = req.body;

    db.run(
        `
        INSERT INTO users (name, age, email, phone, address, job, note)
        VALUES (?, ?, ?, ?, ?, ?, ?)
        `,
        [name, age, email, phone, address, job, note],
        function (err) {
            if (err) {
                res.status(500).json({ message: "Failed to save user data" });
                return;
            }

            res.json({
                message: "User data saved",
                user: {
                    id: this.lastID,
                    name,
                    age,
                    email,
                    phone,
                    address,
                    job,
                    note,
                },
            });
        }
    );
});

app.get("/api/users", (req, res) => {
    db.all("SELECT * FROM users", (err, rows) => {
        if (err) {
            res.status(500).json({ message: "Failed to fetch users" });
            return;
        }

        res.json(rows);
    });
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
