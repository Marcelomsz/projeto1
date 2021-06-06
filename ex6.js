/*Criar uma função que considere o número da conta do cliente, saldo, débito e crédito. Calcular e 
imprimir o saldo atual (saldo atual = saldo - débito + crédito). Também testar se saldo atual for 
maior ou igual a zero imprimir a mensagem 'Saldo Positivo', senão imprimir a mensagem 'Saldo Negativo'.*/
let saldo = 100
let debito = 700
let credito = 500

let posOuNeg = function (saldo,debito,credito) {

    let saldoAtual = (saldo - debito + credito)

    if (saldoAtual >=0){
        console.log('Saldo Positivo')
    }
    else{
        console.log('Saldo Positivo')
    }
    return posOuNeg
}
console.log(posOuNeg())