import express from "express";
import cors from "cors";

import todosRoute from "./router/todos.route.js"
import usersRoute from "./router/users.route.js"

import {authenticate} from "./database.js";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.status(404).send("<h1>Hello World!</h1>");
});

app.post("/login" , (req,res,next) => {
  // res.status(200).send("ok")
  const { email, password } = req.body;

  if (authenticate(email, password)){
    res.status(200).json({"msg" : "el ususario se ha logueado"})
  }
  else{
    res.status(404).json({"msg" : "el ususario no existe"})
  }
})

app.use("/todos" , todosRoute)
app.use("/users" , usersRoute)

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
  console.log(`http://localhost:${PORT}/todos`);
  console.log(`http://localhost:${PORT}/users`);
  console.log(`http://localhost:${PORT}/users/1/todos`);
});
