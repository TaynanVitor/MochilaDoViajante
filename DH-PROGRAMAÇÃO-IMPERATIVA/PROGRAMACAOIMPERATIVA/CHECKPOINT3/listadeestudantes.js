


let Aluno = require('./aluno');


let curso = require('./curso')

let Taynan = new Aluno('Taynan Vitor', 0, [9, 9, 8, 7]);
let Douglas = new Aluno('Douglas Nascimento', 1, [9, 10, 9, 10]);
let Gustavo = new Aluno('Gustavo Toffetti', 2, [7, 9, 8, 8]);
let Jonas = new Aluno('Jonas Pacheco', 2, [7, 7, 7, 7]);
let Marcel = new Aluno('Marcel Gava', 1, [5, 5, 8, 6]);
let Antonio = new Aluno('Antonio Henrique', 1, [9, 7, 9, 6]);


Taynan.adicionarFalta()
console.log(Taynan.faltas) 



curso.adicionarAluno(Taynan);
console.log(curso.listaEstudantes); 


console.log(curso);
curso.adicionarAluno(Taynan, Douglas, Gustavo, Jonas, Marcel, Antonio);
console.log(curso.listaEstudantes);







resultado = (aluno) => {
    let media = aluno.calcularMedia()
    let aprovado = curso.aprovarAluno(aluno)
    console.log(`
    Nome: ${aluno.nome}
    Faltas: ${aluno.faltas}
    Notas: ${aluno.notas}
    Media: ${media}
    Aprovado: ${aprovado}`)
}

curso.listaEstudantes.forEach((elemento) => resultado(elemento));



console.log(Taynan.calcularMedia()) 



