/*Com base no ano atual e no ano de nascimento de uma pessoa, imprimir uma mensagem que diga se ela 
poderá ou não votar na próxima eleição (não é necessário considerar o mês em que a pessoa nasceu).*/

let anoNasc =2007;
let idade = 2022- anoNasc;
 
let votar = function (idade){
    if (idade>=16){
        return 'Poderá votar na proximna eleição'
    }
    else{
        return 'Não podera votar na proxima eleição'
    }
}
console.log(votar(idade))