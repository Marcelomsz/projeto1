/*As maçãs custam R$ 1,30 cada se forem compradas menos de uma dúzia, e R$ 1,00 se forem compradas
 pelo menos 12. Criar uma função que através do parâmetro quantidade calcule e imprima o custo total 
 da compra*/


 let valor = function (qtd) {
        if (qtd < 12) {
            return qtd*1.3
        }
        else{ return qtd*1
        }
    
 } 

 console.log(valor(10))
 console.log(valor(30))
 console.log(valor(12))
 console.log(valor(6))