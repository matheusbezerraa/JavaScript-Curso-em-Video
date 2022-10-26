let obj = {
    cor1 : 'azul',
    cor2 : 'verde' 
}

console.log(obj.cor2)
console.log(obj['cor1'])

obj['cor3'] = 'vermelho'

let nome = 'nome'
obj[nome] = 'Matheus'

if(obj.cor4?.jj){ //caso vc não saiba se existe ou não o objeto ou chave
    console.log(obj)
}

console.log(obj)