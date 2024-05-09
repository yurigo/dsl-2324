import { config } from "dotenv";
import express from "express";
import cors from "cors";

import todosRoute from "./router/todos.route.js";
import usersRoute from "./router/users.route.js";

import { authenticate } from "./database.js";

import jwt from "jsonwebtoken";

import { verifyToken } from "./middleware/verifiyToken.js";

// cosas para graphql
// servidor
import { createHandler } from "graphql-http/lib/use/express";
// import { schema } from "./graphql/schemas/todos.js";  // <-- es un poco lio
import { typeDefs } from "./graphql/schemas/typeDefs.js";
import { resolvers } from "./graphql/schemas/resolvers.js";
import { makeExecutableSchema } from "@graphql-tools/schema";

// inicializamos dotenv
config();

const app = express();
const PORT = 4000;

app.use(express.json());
app.use(cors());

// Publico

export const schema = makeExecutableSchema({ typeDefs, resolvers });

app.all("/graphql", createHandler({ schema }));

app.post("/login", async (req, res, next) => {
  // res.status(200).send("ok")
  const { email, password } = req.body;

  const user = await authenticate(email, password);

  if (user) {
    // qué tenemos que hacer aqui.
    // generar token:

    const token = jwt.sign(
      {
        user: user.id,
        // exp: Math.floor(Date.now() / 1000) + 60,
      },
      process.env.JWT_SECRET_SIGN
    );

    res.status(200).json({ accessToken: token, userID: user.id });
  } else {
    res.status(404).json({ msg: "el ususario no existe" });
  }
});

app.use("/users", usersRoute);

// privado

app.use(verifyToken);

app.get("/", (req, res, next) => {
  //vamos a verificar que el usuario se ha logueado:

  res.status(200).send("<h1>Hello World!</h1>");
});

app.use("/todos", todosRoute);

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
