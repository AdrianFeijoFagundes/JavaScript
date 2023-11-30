// 13) Faça um algoritmo que leia o salário de um funcionário, calcule e mostre o
// seu novo salário, com 15% de aumento.
function salaryIncrease(salary, percent) {
    let percentIncrease = (salary / 100 ) * percent
    return salary + percentIncrease
};
console.log(salaryIncrease(1000,15))