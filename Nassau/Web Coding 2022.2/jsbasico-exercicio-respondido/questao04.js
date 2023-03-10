/*
    -> Declare uma variável chamada hora e atribua à ela o valor 18    
    -> Usando o laço de repetição if..else, escreva um código que leia o valor de hora e 
    se a hora for entre 0 e 11 exiba uma saída com 'bom dia', se a hora for entre 13 e 17
    exiba uma saída com 'boa tarde' caso contrário a saída deve ser 'boa noite'
    -> Em seguida teste outros valores de hora para ver se tudo está funcionando corretamente
*/

var hora = 18;

if (hora >= 0 && hora <= 11) {
  console.log("Bom dia");
} else if (hora > 11 && hora <= 17) {
  console.log("Boa tarde");
} else {
  console.log("Boa noite");
}
