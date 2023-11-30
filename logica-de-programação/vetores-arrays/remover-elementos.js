/*

# Remover um elemento no inicio do array
shift()

# Remover um elemento no final do array
pop()

*/

let numbers = [10, 1, 3, 4, 5, 6, 7, 9, 12] 
console.log('Array:')
console.log(numbers)

numbers.shift(10)
console.log(`Removendo elemento 10 do inicio do array:`)
console.log(numbers)


numbers.pop(12)
console.log(`Removendo elemento 12 do final do array:`)
console.log(numbers)

/*
 REMOVENDO ELEMENTOS CRIANDO O "PRÓPRIO MÉTODO"
*/