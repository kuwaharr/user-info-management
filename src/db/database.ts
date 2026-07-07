import sqlite3 from "sqlite3";

export const db = new sqlite3.Database("database.db");

db.run(`
    CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        age TEXT NOT NULL,
        email TEXT NOT NULL,
        phone TEXT NOT NULL,
        address TEXT NOT NULL,
        job TEXT NOT NULL,
        note TEXT
    )
`)
