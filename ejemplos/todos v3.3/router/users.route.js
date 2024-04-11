// voy a considerar que estoy en: /todos

import express from "express";
const router = express.Router()

import { allUsersController,
  getUsersController, 
  insertUserController, 
  updateUserController, 
  deleteUserController, 
} from "../controllers/users.controller.js";

import routeTodos from "./users/todos.route.js";

function a(req,res,next){
  console.log("a");
  res.send("a");
}

router.get("/", allUsersController);
router.get("/:id", getUsersController);
router.post("/", insertUserController);
router.put("/:id", updateUserController);
router.delete("/:id", deleteUserController);

router.use("/:idUser/todos" , routeTodos);
  

export default router;