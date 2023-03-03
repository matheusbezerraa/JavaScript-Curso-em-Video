function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById("txtano")
    var res = document.getElementById("res")
    if(fano.value.length == 0 || fano.value > ano){
        alert("[ERRO] Ano inválido.")
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - fano.value
        var genero = ''
        if(fsex[0].checked){
            genero = 'Homem'
        }else if(fsex[1].checked){
            genero = 'Mulher'
        }else{
            alert("Sem sexo, repita por favor.")
            return
        }
        res.innerHTML = `Detectamos um(a) ${genero} com ${idade} anos`
    }
}