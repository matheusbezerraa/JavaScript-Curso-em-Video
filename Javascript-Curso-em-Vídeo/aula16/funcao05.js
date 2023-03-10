function fatorial(n){
    if (n!=1){
        return n * fatorial(n-1)
    }else{
        return 1
    }
}
//recursividade
console.log(fatorial(5))