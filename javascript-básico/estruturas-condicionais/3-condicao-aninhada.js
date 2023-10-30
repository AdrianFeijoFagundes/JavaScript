/*Condição aninhada
    Se trata de novos IF/ELSE dentro de outro If/ELSE

    O javascript tem um comando especifico para condições ocmpostas o: ELSE IF
*/
//Exemplo sem ELSE IF:
let num1 = 2
let num2 = 5
let num3 = 6
let num4 = 4

if (num1 == num2) {
    console.log('primeiro bloco')
} else {
    if (num1 > num2) {
        console.log('segundo bloco')
    } else {
        console.log('terceiro bloco')
    }
}
//Exemplo com ELSE IF:
if (num3 == num4) {
    console.log('primeiro bloco')
} else if (num3 > num4) {
        console.log('segundo bloco')
} else {
        console.log('terceiro bloco')
}
