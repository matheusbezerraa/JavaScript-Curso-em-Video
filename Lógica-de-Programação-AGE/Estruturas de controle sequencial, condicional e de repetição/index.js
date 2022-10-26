function verificarIdade(idade){
    if (idade >= 18){
        console.log('pode acessar o site')
    }else if(idade == 16){
        console.log('você não pode acessar o site ainda')
    }else{
        console.log('você não pode acessar o site')
    }
}

verificarIdade(18)