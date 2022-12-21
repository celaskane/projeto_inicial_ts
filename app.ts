/* const pessoa: {
    nome: string;
    idade: number;
} = { */
const pessoa = {
    nome: 'Alejandro',
    idade: 26,
    hobbies: ['Esporters', 'Culinária']
};

let atividadesFavoritas: string[]; //any[] para qualquer tipo de dado
atividadesFavoritas = ['Esportes'];

console.log(pessoa.nome);
console.log(pessoa.idade);

for (const hobby of pessoa.hobbies) {
    console.log(hobby.toUpperCase());
}