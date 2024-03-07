// const express = require("express"); // <--- CommonJS
import express from "express";

const app = express();
const PORT = 3000;

let TODO_COUNTER = 0;

app.use(express.json());

app.get("/", (req, res) => {
  res.status(404).send("<h1>Hello World!</h1>");
});

// - /getAll
// - /add
// - /delete

// OLD VERSION
//const todoArray = ["por defecto 1", "por defecto 2"];

// NEW VERSION
//const todoArray = [
//     {
//       "id": 1,
//       "text": "Limpiar la casa",
//       "done": true
//     },
//     {
//       "id": 2,
//       "text": "Limpiar el lavabo",
//       "done": false
//     }
// ]
let todoArray = [];

app.get("/getAll", (req, res) => {
  res.json(todoArray);
});

app.get("/add", (req, res) => {
  const todo = {
    id: TODO_COUNTER,
    text: req.body.todo,
    done: false,
  };

  todoArray.push(todo);

  TODO_COUNTER++;

  res.json({ inserted: todo });
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
