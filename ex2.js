/*Considere duas notas referentes a avaliações efetuadas por um aluno. Calcular a média aritmética e
 imprimir uma mensagem que diga se o aluno foi ou não aprovado (considerar que média igual ou maior 
    que 6 o aluno é aprovado). Imprimir também a média calculada.*/


let nota1 = 6;
let nota2 = 8;
let nota3 = 7;
let nota4 = 10;

let media = function() {
         let notaFinal =((nota1+nota2+nota3+nota4)/4) ;
         if (notaFinal>=6){
            return 'O aluno foi aprovado com a média '+notaFinal
         }
         else {
            return 'o aluno não foi aprovado e sua média foi '+notaFinal
         }

}
console.log(media())