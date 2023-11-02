// operadores aritméticos   //Resultados:
console.log(5 + 3)          // 8
console.log(5 - 1)          // 4
console.log(5 * 5)          // 25
console.log(5 ** 3)         // 125
console.log(5 / 2)          // 2,5
console.log(5 % 2)          // 1
// incremento e decremento
let n = 5;
let m = 5;
n++
m--
console.log(n)              //6
console.log(m)              //4 


// misturando operadores:
let number;

number = 2 * 10 - 5 * (2 + 2) + 20 
/* primeiro será calculado a operação dentro dos parenteses, depois as multiplicações, e por ultimo a adição e subtração.
    A conta será resolvida da seguinte forma:
    2 * 10 - 5 * (2 + 2) + 20   1° os parenteses
    2 * 10 - 5 * 4 + 20         2° As multiplicações começando da esquerda para direita
    20 - 5 * 4 + 20             
    20 - 20 + 20                3° As subtrações e adições começando da esquerda para direita
    0 + 20
    20                          resultado final
*/
console.log(number)             // 20