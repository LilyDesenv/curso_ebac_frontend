const alunos = [];
const notasDosAlunos = alunos.map(function(itemNome, itemNota) {
    return{
        nome: itemNome, 
        nota: itemNota}
});

notasDosAlunos.push(
    {
        nome: 'João',
        nota: 8
    },
    {
        nome: 'Maria',
        nota: 6
    },
    {
        nome: 'Pedro',
        nota: 4
    }

)

function verificaNotasMaiorQueSeis(array){
    return array.filter((item) => item.nota >= 6)
}

const alunosNotaMaiorSeis = verificaNotasMaiorQueSeis(notasDosAlunos);

console.log(alunosNotaMaiorSeis)