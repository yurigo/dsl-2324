import express from "express";
const router = express.Router();

import { allTodos } from "../database.js";

router.get("/", (req, res, next) => {
  // console.log(req.headers.authorization);
  // const result = db2.prepare(QUERY_ALL_TODOS).all();
  const result = allTodos();
  res.json(result);
});

export default router;
