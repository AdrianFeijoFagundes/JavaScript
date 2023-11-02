/*
8) Desenvolva um programa que leia uma distância em metros e mostre os valores
relativos em outras medidas.
Ex:
Digite uma distância em metros: 185.72
A distância de 185.7m corresponde a:
0.18572Km
1.8572Hm
18.572Dam
1857.2dm
18572.0cm
185720.0mm
*/
let metros = 185.72;
console.log(`A distância de ${metros}  corresponde a:`)
console.log(`${metros / 1000}Km`)
console.log(`${metros / 100}Hm`)
console.log(`${metros / 10}Dam`)
console.log(`${metros * 10}dm`)
console.log(`${metros * 100}dc`)
console.log(`${metros * 1000}mm`)

