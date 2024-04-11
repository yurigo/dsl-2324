// voy a considerar que estoy en: /users/:id/todos

import express from "express";
const router = express.Router({mergeParams:true})

import { allTodosByUser, getTodo } from "../../database.js";

router.get("/", (req, res) => {
  const idUser = req.params.idUser

  const result = allTodosByUser(idUser);
  res.json(result)
});

router.get("/:id", (req, res) => {
  console.log(req.params)
  // const id = req.params.id
  // const idUser = req.params.idUser

  const {id, idUser} = req.params;

  const result = getTodo(id , idUser);
  res.json(result)
});


// router.get("/:id", (req, res) => {
//   res.send(req.params.id)
// });
// router.post("/", (req, res) => {});
// router.put("/:id", (req, res) => {});
// router.delete("/:id", (req, res) => {});



export default router;