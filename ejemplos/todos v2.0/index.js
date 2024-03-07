// const express = require("express"); // <--- CommonJS
import express from "express";
import { nanoid } from "nanoid";

// const calculadora = {
//   suma: 1,
//   resta: 2,
//   division: 3,
//   multiplicacion: 4,
// };

// // deconstruccion de un objeto:
// const { suma, division } = calculadora;

// console.log(suma);
// console.log(division);

// import { suma, division } from "./service.js";

// console.log(suma(1, 2));
// console.log(division(1, 3));

// console.log(nanoid());

const app = express();
const PORT = 3000;

// let TODO_COUNTER = 0;

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
    id: nanoid(),
    text: req.body.todo,
    done: false,
  };

  todoArray.push(todo);

  res.json({ inserted: todo });
});

app.get("/delete/:id", (req, res) => {
  // res.send("<h1>delete</h1>");
  // const ultimoElemento = todoArray.pop(); <- esta bien si borrasmos el útimo

  const id = req.params.id;
  console.log("id", id);

  const found = todoArray.find((todo) => todo.id === id);

  // if (found) {
  //   todoArray = todoArray.filter((todo) => todo.id !== id);
  //   res.json({});
  // } else {
  //   return res.status(404).json({ error: "not found" });
  // }

  // patron clausula guarda
  if (!found) return res.status(404).json({ error: "not found" });

  //else...
  todoArray = todoArray.filter((todo) => todo.id !== id);
  res.json({});

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

  // si quiero borrar el id=1
  // const todoArray = [
  //     {
  //       "id": 2,
  //       "text": "Limpiar el lavabo",
  //       "done": false
  //     }
  // ]

  // for (let index = 0; index < todoArray.length; index++) {
  //   const todo = todoArray[index];
  //   console.log(todo);
  //   if (todo.id === id) {
  //     todoArray.splice(index, 1);
  //     // lo quiero borrar del todoArray.
  //   }
  // }

  // for (const [index, todo] of todoArray.entries()) {
  //   console.log(todo);
  //   if (todo.id === id) {
  //     todoArray.splice(index, 1);
  //     // lo quiero borrar del todoArray.
  //   }
  // }
});

app.get("/update/:id", (req, res) => {
  const id = req.params.id;
  const text = req.body.text;

  const found = todoArray.find((todo) => todo.id === id);

  // patron clausula guarda
  if (!found) return res.status(404).json({ error: "not found" });

  //else...
  found.text = text;
  res.json(found);
});

app.get("/do/:id", (req, res) => {
  const id = req.params.id;

  const found = todoArray.find((todo) => todo.id === id);

  // patron clausula guarda
  if (!found) return res.status(404).json({ error: "not found" });

  //else...
  found.done = true;
  res.json(found);
});

app.get("/undo/:id", (req, res) => {
  const id = req.params.id;

  const found = todoArray.find((todo) => todo.id === id);

  // patron clausula guarda
  if (!found) return res.status(404).json({ error: "not found" });

  //else...
  found.done = false;
  res.json(found);
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
  console.log(`http://localhost:${PORT}`);
});
