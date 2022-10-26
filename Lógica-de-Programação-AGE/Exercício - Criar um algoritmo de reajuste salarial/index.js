function reajusteSalarial(salario){
    let resultado
    if(salario < 2000){
        resultado = 'R$'+ salario * 1.1 
    }else if(salario >= 2000 && salario <=5000){
        resultado = 'R$'+ salario * 1.08
    }else{
        resultado = 'R$'+ salario * 1.06
    }
    console.log(resultado)    
}

reajusteSalarial(6000)