/*Um array (arranjo ou vetor) é um conjunto de dados (que pode assumir os mais diversos tipos, desde do tipo primitivo, a objeto dependendo da linguagem de programação). Arrays são utilizados para armazenar mais de um valor em uma única variável. Isso é comparável a uma variável que pode armazenar apenas um valor.

definição pela: MDN WEB DOCS

Uma maneira mais simples é pensar nos arrays como uma váriavel com mais de um espaço, por exemplo, se for preciso criar variaveis para cada dia da semana em vez de criar por exemplo:
*/
// Criando cada dia da semana em váriaveis separadas:
// obs: são exemplos bem bobos

let primeiro_dia_da_semana = 'Domingo';
let segundo_dia_da_semana = 'Segunda';
let terceiro_dia_da_semana = 'Terça';
let quarto_dia_da_semana = 'Quarta';
let quinto_dia_da_semana = 'Quinta';
let sexto_dia_da_semana = 'Sexta';
let setimo_dia_da_semana = 'Sábado';


//para exibir cada dia seria necessário exibir separadamente cada váriavel no console, nesse caso sempre seriam sete váriaveis, mas se fosse por exemplo frutas, toda vez seria necessário criar uma nova váriavel

//exemplo com array:

//para declarar um array se usa chaves [], e dentro são colocados cada elemento separados por virgula , 

let dias_da_semana = ['Domingo','Segunda','Terça','Quarta','Quinta','Sexta','Sábado'];

// cada elemento tem uma "chave" que normalmente chamamos de "index", em javascript a contagem dos index começa do número 0 e não do número um

console.log(dias_da_semana); // exibimos todo array

console.log(dias_da_semana[0]); // dessa maneira exibimos o elemento de index "0"

console.log(dias_da_semana.length); // exibe o tamanho do array, obs: o index "0" conta então um array que vai até o index "6", contém "7" elementos


// os Arrays são estruturas que podemos manipular, por exemplo adicionando e removendo elementos, mudar a ordem dos elementos, etc. Além de serem uteis em vários casos diferentes.