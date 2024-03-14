import express from "express";
import { suma, prueba } from "./calculadora.js";

const app = express();

app.use(express.json());

const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");

  const resultado = prueba(100);
  console.log("esto es el resultado", resultado);
});

/**
 *
 * /add y paso el 3 no se cómo... ---> ok!
 * /add 6 ---> ok!
 * /add 10 ---> ok!
 * /add 8 ---> ok!
 * /suma ---> 27
 * /mult ---> 1440
 * /clear --> (borrar todo) borrado ok!
 * /stddev
 *
 */

let arrayNumbers = [];

// mdn array
// array.push(1)// --> [1]
// array.push(2)// --> [1,2]

let total = 0;
let totalMult = 1;

app.get("/add/:number", (req, res) => {
  const number = parseInt(req.params.number);
  total = total + number;
  totalMult = totalMult * number;
  arrayNumbers.push(number);
  res.status(200).send("ok!");
});

app.get("/suma", (req, res) => {
  // querystring ✔️
  const num1 = parseInt(req.query.a);
  const num2 = parseInt(req.query.b);
  // params ❌
  // body ❌
  const result = suma(num1, num2); // num1 + num2;

  res.status(200).json({ result: result });
});

app.get("/sumatotal", (req, res) => {
  //res.status(200).send(total.toString());
});

app.get("/multtotal", (req, res) => {
  res.status(200).send(totalMult.toString());
});

app.get("/clear", (req, res) => {
  total = 0;
  totalMult = 1;
  arrayNumbers = [];

  res.status(200).send("borrado ok");
});

function getStandardDeviation(array) {
  const n = array.length;
  if (n === 0) return 0;
  const mean = array.reduce((a, b) => a + b) / n;
  return Math.sqrt(
    array.map((x) => Math.pow(x - mean, 2)).reduce((a, b) => a + b) / n
  );
}

app.get("/stddev", (req, res) => {
  res.status(200).send(getStandardDeviation(arrayNumbers).toString());
});

// app.get("/suma", (req, res) => {
//   const num1 = parseFloat(req.query.a?.replace(",", "."));
//   const num2 = parseFloat(req.query.b?.replace(",", "."));

//   res.send((num1 + num2).toString());
// });

// // test http verb post
// app.post("/suma", (req, res) => {
//   res.send("post test");
// });

// app.put("/suma", (req, res) => {
//   res.send("put test");
// });

// app.delete("/suma", (req, res) => {
//   res.send("delete test");
// });

// app.get("/resta/:num1/:num2", (req, res) => {
//   const num1 = parseFloat(req.params.num1.replace(",", "."));
//   const num2 = parseFloat(req.params.num2.replace(",", "."));
//   res.send((num1 - num2).toString());
// });

// app.get("/multiplicacion/", (req, res) => {
//   const num1 = parseFloat(req.body.num1.replace(",", "."));
//   const num2 = parseFloat(req.body.num2.replace(",", "."));
//   res.send((num1 * num2).toString());
// });

// app.get("/division/", (req, res) => {
//   const num1 = req.body.num1; //num1 en el json ya es un numero!!!
//   const num2 = req.body.num2;
//   res.send((num1 / num2).toString());
// });

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
  console.log(`http://localhost:${PORT}`);
});
