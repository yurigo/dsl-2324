// const express = require("express"); // <--- CommonJS
import express from "express";

const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.status(404).send("<h1>Hello World!</h1>");
});

// - /getAll
// - /add
// - /delete

//const todoArray = ["por defecto 1", "por defecto 2"];
let todoArray = [];

app.get("/getAll", (req, res) => {
  res.json(todoArray);
});

app.get("/add", (req, res) => {
  // console.log(req);
  console.log(req.body);
  // res.send("<h1>add</h1>");
  todoArray.push(req.body.todo);
  res.json({ inserted: req.body.todo });
});

app.get("/delete/:index", (req, res) => {
  // res.send("<h1>delete</h1>");
  // const ultimoElemento = todoArray.pop(); <- esta bien si borrasmos el útimo

  const index = req.params.index;

  const elementoABorrar = todoArray[index];
  // copilot please remove elemment from index

  const auxiliar = todoArray;

  auxiliar.splice(index, 1); // ⚠️muta el elemento original

  console.log("aux:", auxiliar);

  console.log("todo", todoArray);

  // todoArray = todoArray.toSpliced(index, 1); // ⚠️ NO mutal el elemnto original

  //todoArray.sort();
  //todoArray = todoArray.toSorted()

  res.json({ deleted: elementoABorrar });
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
  console.log(`http://localhost:${PORT}`);
});
