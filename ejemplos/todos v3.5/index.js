import { config } from "dotenv";
import express from "express";
import cors from "cors";

import todosRoute from "./router/todos.route.js";
import usersRoute from "./router/users.route.js";

import { authenticate } from "./database.js";

import jwt from "jsonwebtoken";

// inicializamos dotenv
config();

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.status(404).send("<h1>Hello World!</h1>");
});

app.post("/login", async (req, res, next) => {
  // res.status(200).send("ok")
  const { email, password } = req.body;

  if (await authenticate(email, password)) {
    // qué tenemos que hacer aqui.
    // generar token:

    const token = jwt.sign(
      { foo: "bar", exp: Math.floor(Date.now() / 1000) + 10 },
      process.env.JWT_SECRET_SIGN
    );

    res.status(200).json({ accessToken: token });
  } else {
    res.status(404).json({ msg: "el ususario no existe" });
  }
});

app.use("/todos", todosRoute);
app.use("/users", usersRoute);

app.use((err, req, res, next) => {
  console.log("err", err);
  next(err);
});

app.use((err, req, res, next) => {
  // console.log("err", err);
  res.status(500).json({ error: err });
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
  console.log(`http://localhost:${PORT}/todos`);
  console.log(`http://localhost:${PORT}/users`);
  console.log(`http://localhost:${PORT}/users/1/todos`);
});
