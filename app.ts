function combina(entrada1: number | string, entrada2: number | string) {
    let resultado;
    if (typeof entrada1 === 'number' && typeof entrada2 === 'number')
        resultado = entrada1 + entrada2;
    else
        resultado = entrada1.toString() + entrada2.toString();
    return resultado;
}

const idadesCombinadas = combina(30, 25);
console.log(idadesCombinadas);

const nomesCombinados = combina('Feijão', 'Puro');
console.log(nomesCombinados);