
const array1 = [
    {
        name: "Yuri",
    age: 100
},
{
    name: "Pepito",
    age: 25,
}
,
{
    name: "Lorem",
    age: 50,
}
];
const array2 = [10, 20, 30];

const array3 = ["a", "c" , "b"];


function main(){
    const resultado = document.getElementById("resultado");
    const arr = array1.concat(array2);
    const a = array3.toSorted();
    const b = a.toReversed();

    const pares = array1.filter((element, index, arr) =>{
        return element % 2 === "0";
    })

    const dobles = array1.map((element, index, array) => {
        return {
            "original": element,
            double: element *2
        }
    } )

    // console.log(dobles);

    // console.log(dobles[1].original);

    // let vartemp = JSON.stringify(dobles, null, 2);

    // resultado.textContent = vartemp;
    
    // vartemp = JSON.parse(vartemp)
    
    // console.log(vartemp[1].original);



    const suma = array1.reduce( (accumulated, currentValue) => {
        console.log("acc", accumulated , "current" , currentValue);

        

        return {
            nombre: accumulated.name + "," + currentValue.name,
            accumulated: accumulated.age + currentValue.age,
    }},
     {
        nombre: "",
        age: 0
    }
    );

    resultado.textContent = JSON.stringify(array1,null,2) + " ---> " +  JSON.stringify(suma, null, 2);



}

main();