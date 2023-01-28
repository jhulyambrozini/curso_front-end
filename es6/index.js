let alunos = [
    {
       "nome": "Breno",
       "nota": 4
    },
    {
       "nome": "Maria",
        "nota": 6
    },
    {
       "nome": "Ana",
        "nota": 7
    },
    {
        "nome": "Gabriel",
        "nota": 10
    },
    {
        "nome": "Luiz",
        "nota": 2
    },
]


function aprovados() {
    let apv = alunos.filter(nota => nota.nota >= 6)
    console.log(apv)
}

aprovados()