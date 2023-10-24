let n = 1422.5

console.log(n.toFixed(2)) // define a quantidade de números que vão aparecer depois do ponto
console.log(n.toFixed(2).replace('.', ',')) // substituiu o ponto por virgula
console.log(n.toLocaleString('pt-BR', {style: 'currency', currency:'BRL'})) //acessa um objeto e formata conforme a moeda