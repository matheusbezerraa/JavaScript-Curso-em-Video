const alunos = [
    {
        nome: 'Pedro',
        sobrenome: 'Silva',
        mediaDasNotas: '7'
    },
    {
        nome: 'Lucas',
        sobrenome: 'Lima',
        mediaDasNotas: '2'
    },
    {
        nome: 'Gabriel',
        sobrenome: 'Cavalcanti',
        mediaDasNotas: '3'
    },
    {
        nome: 'Eduarda',
        sobrenome: 'Silveira',
        mediaDasNotas: '5'
    },
    {
        nome: 'João',
        sobrenome: 'Pedro',
        mediaDasNotas: '5'
    },
    {
        nome: 'Maria',
        sobrenome: 'Clara',
        mediaDasNotas: '1'
    },
    {
        nome: 'David',
        sobrenome: 'Santana',
        mediaDasNotas: '8'
    },
    {
        nome: 'Davi',
        sobrenome: 'Borba',
        mediaDasNotas: '3'
    },
    {
        nome: 'Clara',
        sobrenome: 'Pimentel',
        mediaDasNotas: '5'
    },
    {
        nome: 'Ricardo',
        sobrenome: 'Alonso',
        mediaDasNotas: '10'
    },
]

function listaDeAlunos(){
    alunos.map((aluno) =>{
        console.log(`${aluno.nome} ${aluno.sobrenome}- média: ${aluno.mediaDasNotas}`)
        if (aluno.mediaDasNotas >= 7){
            console.log('passou')
        }else{
            console.log('reprovou')
        }     
    })
}
listaDeAlunos()