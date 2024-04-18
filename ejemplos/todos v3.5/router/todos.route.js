import express from "express";
import { JsonWebTokenError } from "jsonwebtoken";
const router = express.Router();

import { allTodos } from "../database.js";

router.get("/", (req, res, next) => {
  // console.log(req.headers.authorization);

  if (!req.headers.authorization)
    return next("no hay cabecera de autenticacion");

  const token = req.headers.authorization.split(" ")[1];

  console.log(token);

  jwt.verify(token);

  // const result = db2.prepare(QUERY_ALL_TODOS).all();
  const result = allTodos();
  res.json(result);
});

export default router;
