// voy a considerar que estoy en: /todos

import express from "express";
const router = express.Router()

import { allUsers } from "../database.js"

import routeTodos from "./users/todos.route.js";

router.get("/", (req, res) => {
  // const result = db2.prepare(QUERY_ALL_TODOS).all();
  const result = allUsers();
  res.json(result)
});
  
router.get("/:id", (req, res) => {});
router.post("/", (req, res) => {});
router.put("/:id", (req, res) => {});
router.delete("/:id", (req, res) => {});

router.use("/:idUser/todos" , routeTodos);
  

export default router;