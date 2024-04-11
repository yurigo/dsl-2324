// voy a considerar que estoy en: /todos

import express from "express";
const router = express.Router()

// import v1Route from "./v1.route.js"
// import v2Route from "./v2.route.js"

import { allTodos } from "../database.js";

router.use("/users" , usersRoute)

router.get("/", (req, res) => {
  // const result = db2.prepare(QUERY_ALL_TODOS).all();
  const result = allTodos();
  res.json(result)
});


router.get("/:id", (req, res) => {
  res.send(req.params.id)
});
router.post("/", (req, res) => {});
router.put("/:id", (req, res) => {});
router.delete("/:id", (req, res) => {});



export default router;