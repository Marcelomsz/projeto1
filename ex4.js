/*Criar uma função que escreva se um número é positivo ou negativo (considere o valor zero como 
positivo).*/

let positivoOuNegativo =  (num) => {
    let teste = (num>=0) ? 'é positivo' : 'é negativo'
    return teste

}
console.log(positivoOuNegativo(-5))