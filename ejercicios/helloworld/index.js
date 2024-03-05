function f1(){
    return 10;
  }
  
  const f2 = () => {
    return 20;
  }
  
  const f3 = () => 30;
  
  function suma(a , b){
    return a + b;
  }
  
  const resta = (a , b) => {
    return a - b;
  }
  
  const multiplicacion = (a , b) => a * b
  const division = (a , b) => a / b;
  
  
  
  console.log(f1());
  console.log(f2());
  console.log(f3());
  
  console.log(suma(2,5));
  console.log(resta(2,5));
  console.log(multiplicacion(2,5));
  console.log(division(2,5));





  const arr = [1,2,3,4,5,6,7,8,9,10];

console.log(arr);

const arr2 = [];

const esPar = (num) => num % 2 === 0

// for (let i = 0 ; i < arr.length; i++){
//   if (esPar(arr[i])){
//     console.log(arr[i])
//     arr2.push(arr[i])
//   }
// }

// visitando("aaaaaaaa")

// arr.forEach((elementoVisitado) => console.log("visitando: " + elementoVisitado))

const arrPar = arr.filter((elementoVisitado) => esPar(elementoVisitado));

console.log(arrPar);


const arrMapped = arr.map((elementoVisitado) => elementoVisitado + 2);

console.log(arrMapped);

console.log(arr);






const people = [
    {
      name: "Yuri",
      age: 100,
      type: "Professor"
    }
    ,
    {
      name: "Max",
      age: 24
    }
    ,
    {
      name: "Alice",
      age: 39
    }
    ,
    {
      name: "Bob",
      age: 21,
      type: "Professor"
    }
  ];
  
  console.log("people: ");
  console.log(people)
  
  function isProfessor(e) {
    // if (e.type === "Professor"){
    //   return true
    // }
    // else{
    //   return false;
    // }
    return e.type === "Professor"
  }
  
  // console.log(isProfessor(  {
  //     name: "Yuri",
  //     age: 100,
  //     type: "Professor"
  //   }))
  
  // console.log(isProfessor(  {
  //     name: "Yuri",
  //     age: 100,
  //   }))
  
  const onlyProfessor = people.filter(isProfessor);
  
  console.log(onlyProfessor);
  
  const onlyP = people.filter((elem) => elem.type === "Professor" );
  
  console.log("only professor");
  console.log(onlyP);
  
  const onlyAbove30 = people.filter((elem) => elem.age >= 30);
  
  console.log("only above 30");
  console.log(onlyAbove30);
  
  // const peopleWithoutAge = [];
  
  // for (let i = 0 ; i < people.length ; i++){
  //   peopleWithoutAge.push({
  //     name: people[i].name,
  //     type: people[i].type,
  //   })
  // }
  
  // console.log(peopleWithoutAge);
  
  
  const peopleWithoutAge = people.map((elem) => {
    return {
      name: elem.name,
      type: elem.type,
    }
  });
  
  console.log(peopleWithoutAge);
  
  
  
  
  
  
  
