/* 
    WHILE
    
    no começo da estrutura WHILE é executado um teste lógico, se o teste for TRUE o bloco é executado enquanto o teste lógico for TRUE, quando o teste lógico resultar em FALSE o fluxo de comandos continua normalmente.

    Exemplo contar até 10 
*/ 
let contador = 0            // variavel para o teste lógico
while (contador <= 10) {
    console.log(contador)
    contador++              // incremento para não criar um loop infinito
}                           // conta de 0 a 10
