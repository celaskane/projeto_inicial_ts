/* const pessoa: {
    nome: string;
    idade: number;
} = { */
const pessoa: {
    nome: string;
    idade: number;
    hobbies: string[];
    cargo: [number, string];
} = {
    nome: 'Alejandro',
    idade: 26,
    hobbies: ['Esporters', 'Culinária'],
    cargo: [7, 'Agrimensor']
};

/* pessoa.cargo.push('Oceanógrafo');
pessoa.cargo[1] = 10;
pessoa.cargo = [0, 'oi', 'aaaa']; */

let atividadesFavoritas: string[]; //any[] para qualquer tipo de dado
atividadesFavoritas = ['Esportes'];

console.log(pessoa.nome);
console.log(pessoa.idade);

for (const hobby of pessoa.hobbies) {
    console.log(hobby.toUpperCase());
}

console.log(pessoa.cargo);