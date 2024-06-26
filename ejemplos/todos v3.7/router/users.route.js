// voy a considerar que estoy en: /todos
import express from "express";
import { verifyToken } from "../middleware/verifiyToken.js";

const router = express.Router({});

import {
  allUsersController,
  getUsersController,
  insertUserController,
  updateUserController,
  deleteUserController,
} from "../controllers/users.controller.js";

// import { validateUserSchema } from "../schemas/userSchema.js";
import { verifyUserSchema } from "../middleware/users/verifySchema.js";

import routeTodos from "./users/todos.route.js";

// function middlewareUsers( req , res , next ){
//   console.log(req.query.pepito);
//   const pepito = Number(req.query.pepito)
//   if (pepito >= 10) {
//     next();
//   }
//   else{
//     next({
//       status: 404,
//       msg: "Pepito es inferios a 10"
//     })
//   }
// }

function middlewareGenericErrorLogging(err, req, res, next) {
  console.log("Error: " + err.msg + "!!!");
  next(err);
}

function middlewareGenericError(err, req, res, next) {
  res.status(err.status).json({ error: "Ups! algo ha pasado: " + err.msg });
}

// router.use(middlewareUsers)
router.use(middlewareGenericErrorLogging);
router.use(middlewareGenericError);

// publico
router.post("/", verifyUserSchema, insertUserController);

// privado
router.use(verifyToken);
router.get("/", allUsersController);
router.get("/:id", getUsersController);
router.put("/:id", updateUserController);
router.delete("/:id", deleteUserController);

router.use("/:idUser/todos", routeTodos); //<-- este endpoint con la autorizacion que tenemos no tiene mucho sentido

export default router;
