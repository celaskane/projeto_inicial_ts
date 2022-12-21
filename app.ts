function soma(n1: number, n2: number, mostraResultado: boolean, frase: string) {
    /* if (typeof n1 !== 'number' || typeof n2 !== 'number') {
        throw new Error('Entrada incorreta');
    } */
    const resultado = n1 + n2;
    if (mostraResultado)
        console.log(frase + resultado);
    else return n1 + n2;
}

const numero1 = 5;
const numero2 = 2.8;
const mostraResultado = true;
const fraseResultado = 'O resultado é: '
soma(numero1, numero2, mostraResultado, fraseResultado);