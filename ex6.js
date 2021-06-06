/*Criar uma função que considere o número da conta do cliente, saldo, débito e crédito. Calcular e 
imprimir o saldo atual (saldo atual = saldo - débito + crédito). Também testar se saldo atual for 
maior ou igual a zero imprimir a mensagem 'Saldo Positivo', senão imprimir a mensagem 'Saldo Negativo'.*/
let saldo = 100;
let debito = 600;
let credito = 500;

let posOuNeg = function () {
    let saldoAtual = (saldo-debito+credito);
    if (saldoAtual >=0 ){
       return'Saldo Positivo';
    }
    else{
        return'Saldo Negativo';
    }

}
console.log(posOuNeg())