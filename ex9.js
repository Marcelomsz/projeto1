/*Com base em dois valores, imprimir uma das três mensagens a seguir: 
‘Números iguais’, caso os números sejam iguais;
‘Primeiro é maior’, caso o primeiro seja maior que o segundo;
‘Segundo maior’, caso o segundo seja maior que o primeiro.*/


let val1 =true;
let val2 =0;

function maiorOuMenor(){
    if(val1===val2){
        return 'números iguais'
    }
    if (val1>val2) {
        return 'primeiro número é maior'
    } else {
        return 'segundo número é maior'
    }
}
console.log(maiorOuMenor())