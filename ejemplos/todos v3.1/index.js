import express from "express";
import sqlite3 from "sqlite3";
import bsqlite3 from "better-sqlite3"

const { Database } = sqlite3.verbose();

const DBSOURCE = "./todos.sqlite";

console.log("database");
const db = new Database(DBSOURCE , (err) => {
  // console.log(err?.message);
});
const db2 = bsqlite3(DBSOURCE);

const QUERY_ALL_TODOS = "SELECT * FROM todos"



const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.status(404).send("<h1>Hello World!</h1>");
});

app.get("/v1/todos", (req, res) => {
  // console.log(db);
  db.all(QUERY_ALL_TODOS , (err, rows) => {
    console.log("Error" , err)
    console.log("Data " , rows);
    res.json({result: rows})
  });

});

app.get("/v2/todos", (req, res) => {
  // console.log(db);
  const result = db2.prepare(QUERY_ALL_TODOS).all();
  res.json({result})
});



app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
  console.log(`http://localhost:${PORT}`);
});
