// const http = require('http');
// const url = require('url');

import { createServer } from "node:http";
import { parse } from "node:url";

const hostname = "127.0.0.1";
const port = 3000;

const calculatorService = (req, res) => {
  // console.log(req);
  const reqUrl = parse(req.url, true);

  console.log(reqUrl);

  if (reqUrl.pathname === "/") {
    res.statusCode = 200;

    // res.setHeader('Content-Type', 'application/json');
    // const { name, version, description, author, license } = require("./package.json")
    //res.end(JSON.stringify(
    //    { name, version, description, author, license }
    //))

    res.end("welcome to calculator!");
  }

  //   else if (reqUrl.pathname === '/endpoint') {
  //     res.end("this is a endpoint!")
  //   }
  else if (reqUrl.pathname === "/suma") {
    const resultado =
      parseFloat(reqUrl.query.a.replace(",", ".")) + parseFloat(reqUrl.query.b.replace(",", "."));
    res.end(resultado.toString());
  } else if (reqUrl.pathname === "/resta") {
    const resultado =
      parseFloat(reqUrl.query.a.replace(",", ".")) - parseFloat(reqUrl.query.b.replace(",", "."));
    res.end(resultado.toString());
  } else if (reqUrl.pathname === "/division") {
    const resultado =
      parseFloat(reqUrl.query.a.replace(",", ".")) / parseFloat(reqUrl.query.b.replace(",", "."));
    res.end(resultado.toString());
  } else if (reqUrl.pathname === "/multiplicacion") {
    const resultado =
      parseFloat(reqUrl.query.a.replace(",", ".")) * parseFloat(reqUrl.query.b.replace(",", "."));
    res.end(resultado.toString());
  } else {
    res.statusCode = 500;
    // to send a json I need to setHeader and JSON.stringify the object
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ error: "not found" }));
  }
};

const servidor = createServer(calculatorService);

servidor.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
  console.log(`Server running at http://${hostname}:${port}/suma?a=4&b=5.3`);
  console.log(`Server running at http://${hostname}:${port}/resta?a=4&b=5`);
  console.log(`Server running at http://${hostname}:${port}/multiplicacion?a=4&b=5`);
  console.log(`Server running at http://${hostname}:${port}/multiplicacion?a=4,8&b=5`);
  console.log(`Server running at http://${hostname}:${port}/division?a=4&b=2`);
  console.log(`Server running at http://${hostname}:${port}/division?a=4&b=0`);
});
