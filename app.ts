let entradaUsuario: unknown; //unknown mais restritivo que any (checa o tipo)
let nomeUsuario: string;

//sempre optar por unknown no lugar de any
entradaUsuario = 5;
entradaUsuario = 'oioioi';
if (typeof entradaUsuario === 'string') {
    nomeUsuario = entradaUsuario;
}

//never para uma função que nunca retorna algo
function gerarErro(mensagem: string, codigo: number): never {
    throw {mensagem: mensagem, codigoErro: codigo};
}

gerarErro('Aconteceu um erro', 500);