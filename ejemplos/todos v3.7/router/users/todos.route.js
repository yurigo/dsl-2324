// voy a considerar que estoy en: /users/:id/todos

import express from "express";
const router = express.Router({ mergeParams: true });

import { allTodosByUser, getTodo } from "../../database.js";

import { authorizate } from "../../middleware/verifiyToken.js";

function changeAtMeToUserId(req, res, next) {
  if (req.params.idUser === "@me") req.params.idUser = req.USER_ID;
  next();
}

router.get("/", changeAtMeToUserId, authorizate, (req, res, next) => {
  let { idUser } = req.params;
  const result = allTodosByUser(idUser);
  res.json(result);
});

router.get("/:id", (req, res) => {
  console.log(req.params);
  const { id, idUser } = req.params;

  const result = getTodo(id, idUser);
  res.json(result);
});

export default router;
