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