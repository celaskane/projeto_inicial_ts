/* function soma(n1: number, n2: number): string //valor do return {
    return n1.toString() + n2.toString();
} */

function soma(n1: number, n2: number) {
    return n1 + n2;
}

function mostraResultado(numero: number): void {    //sempre usar void, raro usar undefined
    console.log('resultado:' + numero);
}

mostraResultado(soma(5, 12));

let valoresCombinados: (a: number, b: number) => number;    //definindo propriedades da função que deve ser chamada

valoresCombinados = soma;
//valoresCombinados = print;
//valoresCombinados = 5;

console.log(valoresCombinados(7, 7));

//let algumValor: undefined;