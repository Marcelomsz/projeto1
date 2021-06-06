/*Faça um programa que considere: quantidade atual em estoque, quantidade máxima em estoque e 
quantidade mínima em estoque de um produto. Calcular e imprimir a quantidade média 
(quantidade média = (quantidade máxima + quantidade mínima) /2). Se a quantidade em estoque for 
maior ou igual a quantidade média imprimir a mensagem 'Não efetuar compra', senão imprimir a 
mensagem 'Efetuar compra'.*/


//qtdAtual
//qtdminima
//qtdmaxima
//qtdmedia = qtdmaxima+qtdminima /2

let qtdAtual = 200;
let qtdminima = 100;
let qtdmaxima = 300 ;
let qtdmedia = ((qtdmaxima+qtdminima)/2);

let compra = function() {
    if (qtdAtual >= qtdmedia) {
    return 'Não efetuar compra'
}
    else {
    return'Efetuar compra'
    }
}

console.log(compra())