let notas_do_aluno = [4, 8, 6, 9]
let peso = 1.2

function calcularMedia(){
   for(let i=0; i < notas_do_aluno.length; i++){
      console.log(notas_do_aluno[i] * peso)
   }
}
calcularMedia()
