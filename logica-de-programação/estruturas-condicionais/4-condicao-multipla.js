/*
    CONDIÇÃO MULTIPLA / SWITCH

    O programa primeiro procura por um caso o qual a expressão avalie como tendo o mesmo valor que o input da expressão (usando a comparação de igualdade estrita (en-US), ===) transferindo assim o controle para a cláusula encontrada e em seguida executando as instruções associadas. Caso nenhum caso seja correspondido, então o programa procura pela cláusula opcional default, que, se encontrado, tem o controle transferido a ele, executando suas instruções associadas. Se não houver uma cláusula default, o programa continua a execução da instrução seguindo para o final do switch. Por convenção, a cláusula default é a última, mas não é algo obrigatório.
*/
// Exemplo SWITCH
let num = 2;

switch (num) {
    case 1:
        console.log('Caso 1')
        break
    case 2:
        console.log('Caso 2')
        break
    case 3:
        console.log('Caso 3')
        break    
    case 4:
        console.log('Caso 4')
        break
    default:
        console.log('Caso padrão(default)')
        break
}

switch ("sla123") {
    case "sla":
        console.log("sla")
        break
    case "sla2":
        console.log("sla2")
        break
    case "sla3":
        console.log("sla3")
        break
    case "sla4":
        console.log("sla4")
        break
    default:
        console.log("default")
        break
}