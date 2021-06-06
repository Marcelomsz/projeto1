/*Escreva uma função que considere o número de litros vendidos e o tipo de combustível
(codificado da seguinte forma: A-álcool, G-gasolina), calcule e imprima o valor a ser pago pelo 
cliente sabendo-se que o preço do litro da gasolina é R$ 5,20 e o preço do litro do álcool é R$ 4,20.*/
let numLitrosVendidos = 100;
let tipoCombustivel = 'a';
let precoGasolina = 5.20
let precoAlcool = 4.20

let precoTotal = function(){
    if (tipoCombustivel=='A','a'){
        return 'O valor a ser pago é R$'+numLitrosVendidos*precoAlcool;
    }
    if (tipoCombustivel=='G','g'){
        return 'O valor a ser pago é R$'+numLitrosVendidos*precoGasolina;
    }
    else{
        return tipoCombustivel+' Não é um tipo de combustive , escolha entre A ou G'
    }
}
console.log(precoTotal())