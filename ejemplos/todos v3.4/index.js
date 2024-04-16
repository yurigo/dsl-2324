import express from "express";
import cors from "cors";

import todosRoute from "./router/todos.route.js"
import usersRoute from "./router/users.route.js"

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.status(404).send("<h1>Hello World!</h1>");
});

app.use("/todos" , todosRoute)
app.use("/users" , usersRoute)

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
  console.log(`http://localhost:${PORT}/todos`);
  console.log(`http://localhost:${PORT}/users`);
  console.log(`http://localhost:${PORT}/users/1/todos`);
});
