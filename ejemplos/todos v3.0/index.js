// const express = require("express"); // <--- CommonJS
import express from "express";
import cors from "cors";
// import { nanoid } from "nanoid";

const app = express();
const PORT = 3000;


app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.status(404).send("<h1>Hello World!</h1>");
});

let todoArray = [
    {
        id: 1,
        text: "lavar los platos",
        done: false
    },
    {
        id: 2,
        text: "aprovar la asignatura",
        done: true
    }
];

app.get("/todos", (req, res) => {
  res.json(todoArray);
});


app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
  console.log(`http://localhost:${PORT}`);
});
