// promesas

const promiseFetch = fetch("https://yesno.wtf/api");

// console.log(promiseFetch);
// setTimeout(() => console.log(promiseFetch), 5000);
// console.log("despues del promiseFetch");

// promesas con then y catch

promiseFetch
  .then((response) => {
    console.log("en el then");
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log("en el catch");
    console.log(error);
  });

// async / await

async function getData() {
  // console.log("antes del await");
  const response = await fetch("https://yesno.wtf/api");
  // console.log("response", response);
  const data = await response.json();
  console.log("data", data);
}

console.log("esto es una promesa ---> ", getData());

// este codigo de aqui.. no tiene que depender de la respuesta de la peticion a google
console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAA");

console.time("'paralelo'");

const urls = [
  "https://yesno.wtf/api",
  "https://yesno.wtf/api",
  "https://yesno.wtf/api",
  "https://yesno.wtf/api",
  "https://yesno.wtf/api",
  "https://yesno.wtf/api",
  "https://yesno.wtf/api",
  "https://yesno.wtf/api",
  "https://yesno.wtf/api",
  "https://yesno.wtf/api",
  "https://yesno.wtf/api",
  "https://yesno.wtf/api",
  "https://yesno.wtf/api",
  "https://yesno.wtf/api",
  "https://yesno.wtf/api",
  "https://yesno.wtf/api",
  "https://yesno.wtf/api",
  "https://yesno.wtf/api",
  "https://yesno.wtf/api",
  "https://yesno.wtf/api",
  "https://yesno.wtf/api",
  "https://yesno.wtf/api",
  "https://yesno.wtf/api",
  "https://yesno.wtf/api",
  "https://yesno.wtf/api",
  "https://yesno.wtf/api",
  "https://yesno.wtf/api",
  "https://yesno.wtf/api",
  "https://yesno.wtf/api",
  "https://yesno.wtf/api",
  "https://yesno.wtf/api",
  "https://yesno.wtf/api",
  "https://yesno.wtf/api",
  "https://yesno.wtf/api",
  "https://yesno.wtf/api",
  "https://yesno.wtf/api",
  "https://yesno.wtf/api",
  "https://yesno.wtf/api",
  "https://yesno.wtf/api",
  "https://yesno.wtf/api",
  "https://yesno.wtf/api",
  "https://yesno.wtf/api",
  "https://yesno.wtf/api",
  "https://yesno.wtf/api",
];

// console.log(urls);

const transformedUrls = urls.map((url) => fetch(url));

// console.log(transformedUrls);

const responses = await Promise.all(transformedUrls);

const datas = responses.map((response) => response.json());

// console.log(datas);

const info = await Promise.race(datas);

// console.log(info);

console.timeEnd("'paralelo'");

console.time("serie");

const infos = [];
for (const url of urls) {
  const response = await fetch(url);
  const data = await response.json();
  infos.push(data);
}

console.timeEnd("serie");
