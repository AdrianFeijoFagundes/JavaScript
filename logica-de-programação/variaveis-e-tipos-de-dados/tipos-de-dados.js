console.log('Tipos de variáveis: ')

let str = "string";                 // string
let num = 21;                       // number
let bol = true;                     // boolean
let n = null;                       // null      obs: null é considerado um objeto pel0 comando typeof
let un;                             // undefined
let fuc = (a) => {return a}         // function
let obj = {};                       // object

console.log(
    `\n ${typeof str} \n ${typeof num} \n ${typeof bol} \n ${n} \n ${typeof un} \n ${typeof fuc} \n ${typeof obj} `
);

// O comando typeof mostra o tipo de dado seja em uma váriavel ou não
// Exemplo:
console.log('Exemplo de outro uso de typeof')
console.log(typeof 202)             // number
console.log(typeof (200 == 100))    //boolean
console.log(typeof (() => {}))      //function
console.log(typeof [])              //object
console.log(typeof {})              //object
console.log(typeof null)            //object
console.log(typeof '')              //string