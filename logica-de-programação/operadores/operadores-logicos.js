// &&   conjunção       e 
// ||   disjunção       ou
// !    negação         não

/* 
    para entender os operadores é bom pensar da seguinte forma:

    Uma forma de entender é pensar os operadores particularmente os de comparação e lógicos como perguntas  que podem ser respondidas com SIM ou NÃO, VERDADEIRO ou FALSO, TRUE ou FALSE, VERDADE ou MENTIRA.

    Exemplo &&(e):
    João tem uma calça preta e(&&) um tenis vermelho.
    Se ele tiver os dois então a pergunta é verdadeira(true)
    Se ele tiver apenas uma é falsa(false)
    
    Ou seja as duas afirmações forem verdade(true) o resultado final é TRUE, senão é FALSE 
    
    Exemplo ||(ou):
    João tem uma calça preta ou(||) um tenis vermelho.
    
    Se ele tiver os dois então a afirmação é verdadeira(true)
    Se ele tiver a calça preta então a afirmação é verdadeira(true)
    Se ele tiver o tenis então a afirmação é verdadeira(true)
    Se ele não tiver nenhuma a frase é falsa(false)
    
    Ou seja se uma das afirmações for verdade(true) o resultado final é TRUE, apenas se as duas serem mentira(FALSE) o resultado final será FALSE.
    
    Para o operador de negação é um pouco diferente.

    Exemplo !(não):

    O que não é Verdadeiro, é Falso
    O que não é Falso, é Verdadeiro
    O que não é Par, é Impar
    O que não é vermelho, é de outra cor

    Ele basicamente "fala" o que não é, ou seja de certa forma "inverte" as coisas. 
    */
console.log('Operador !')
console.log('!true: ' +(!true))
console.log('!false: ' +(!false))

console.log('Operador &&')
console.log('false && false: ' +(false && false))
console.log('false && true: ' +(false && true))
console.log('true && false: ' +(true && false))
console.log('true && true: ' +(true && true))

console.log('Operador ||')
console.log('false || false: ' + (false || false))
console.log('false || true: ' + (false || true))
console.log('true || false: ' +(true || false))
console.log('true || true: ' +(true || true))
