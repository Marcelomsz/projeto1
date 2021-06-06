/*Criar uma função para verificar se um número é par ou ímpar. Um número é par quando na divisão 
por 2 o resto é 0.*/


let parOuImpar = function (num) {
    if (num % 2 == 0){
        return 'é Par'
    }
    else {
        return 'é Impar'
    }
}

console.log(parOuImpar(5))