import express from "express";
import path from "path";

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

const users: User[] = [];
let nextId = 1;

app.use(express.json());
app.use(express.static(path.join(__dirname, "../public")));

app.get("/api/health", (req, res) => {
    res.json({ message: "Server is running" });
});

app.post("/api/users", (req, res) => {
    const user: User = {
        id: nextId,
        name: req.body.name,
        age: req.body.age,
        email: req.body.email,
        phone: req.body.phone,
        address: req.body.address,
        job: req.body.job,
        note: req.body.note,
    };

    users.push(user);
    nextId++;

    console.log(req.body);

    res.json({
        message: "User data saved",
        user: user,
    });
});

app.get("/api/users", (req, res) => {
    res.json(users);
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
