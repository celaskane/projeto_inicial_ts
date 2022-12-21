type Combinavel = number | string;
type DescritivoConversao = 'numero' | 'texto';

function combina(
    entrada1: Combinavel, 
    entrada2: Combinavel, 
    resultadoConvertido: DescritivoConversao
    ) {
    let resultado;
    if (typeof entrada1 === 'number' && typeof entrada2 === 'number' || resultadoConvertido === 'numero')
        resultado = +entrada1 + +entrada2; //+ converte para number
    else
        resultado = entrada1.toString() + entrada2.toString();
    return resultado;
    /* if (resultadoConvertido === 'numero')
        return +resultado;
    else
        return resultado.toString(); */
}

const idadesCombinadas = combina(30, 25, 'numero');
console.log(idadesCombinadas);

const idadesCombinadasString = combina('30', '25', 'numero');
console.log(idadesCombinadasString);

const nomesCombinados = combina('Feijão', 'Puro', 'texto');
console.log(nomesCombinados);