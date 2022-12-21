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

//let algumValor: undefined;