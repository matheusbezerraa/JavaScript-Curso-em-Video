let  a = '2'
let b = 2
let c = 1

let igual = (a==b)
//compara os valores
let igualTipo = (a === b)
 //compara os tipos str e int
 let diferente = (a!=b)
 //compara os valores
let diferenteTipo = (a!==b)
//compara os tipos
let maior = (b > c)

let menor = (b < c)

let maiorIgual = (b >= c)

let menorIgual = (b <= c)

let verificador = (b > c ? 'verdadeiro' : 'falso')

console.clear()

console.log('igual:',igual)
console.log('igaualTipo:',igualTipo)
console.log('diferente:',diferente)
console.log('diferenteTipo:',diferenteTipo)
console.log('maior:',maior)
console.log('menor:',menor)
console.log('maiorIgual:',maiorIgual)
console.log('menorIgual:',menorIgual)
console.log('verificador:',verificador)