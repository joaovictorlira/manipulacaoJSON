const aluno = [
  {
    nome: "João",
    idade: 18,
    curso: "Ciências da Computação",
    notasJavaScript: [7, 6, 6],
  },
];

console.log(aluno[0].nome);
console.log(aluno[0].notasJavaScript[0]);

aluno[0].idade = 22;
console.log(aluno[0].idade);

aluno[0].notasJavaScript.push(10);
console.log(aluno[0].notasJavaScript);


// Conversao de stringify para JSON
let alunoString = JSON.stringify(aluno)
console.log(alunoString)
alunoParse = JSON.parse(alunoString)
console.log(alunoParse)




let joao = aluno[0];
for (let i in joao) {
  console.log(joao[i]);
}


let soma = aluno[0].notasJavaScript.reduce((acumulador, valorAtual) => {
  return acumulador + valorAtual;
}, 0);

let mediaDasNotas = soma / aluno[0].notasJavaScript.length;
console.log(mediaDasNotas);

aluno[0].endereco = {
  rua: "rua blabla",
  estado: "Paraíba",
  cidade: "João Pessoa",
};

console.log(aluno[0].endereco.estado, aluno[0].endereco.cidade);


const alunos = [
  {
   ...aluno[0]
  },
  {
    nome: "Maria",
    idade: 20,
    curso: "Sistemas de Informação",
    notasJavaScript: [8, 9, 9],
    endereco: {
      
      rua: "rua blabla",
      estado: "Paraíba",
      cidade: "João Pessoa",
    },
  },
  {
    nome: "Pedro",
    idade: 20,
    curso: "Análise e Desenvolvimento de Sistemas",
    notasJavaScript: [10, 10, 10],
    endereco: {...aluno[0].endereco}
  }
];

let media;
const nomesMaior8 = alunos.filter((aluno) => {
  let media = aluno.notasJavaScript.reduce((soma, nota) => soma + nota, 0) / aluno.notasJavaScript.length;
  return media > 8;
})
.map((aluno) => aluno.nome)

console.log(`Os alunos que tiveram a média maior que 8 são ${nomesMaior8.join(", ")} `);


