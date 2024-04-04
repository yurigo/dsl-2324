import express from "express";

const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.status(404).send("<h1>Hello World!</h1>");
});

app.get("/todos", (req, res) => {
  // acceder a la base de datos y devolver los TODOS.
  res.json();
});


app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
  console.log(`http://localhost:${PORT}`);
});
