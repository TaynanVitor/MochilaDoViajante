




const alicia = [23, 69, 32];
const bob = [12, 67, 43];

function encontrarGanhador (listaA, listaB) {
    let pontosPrimeiroParticipante = 0;
    let pontosSegundoParticipante = 0;

    for (i = 0; i < listaA.length; i++){

        if(listaA[i] > listaB) {
        pontosPrimeiroParticipante++;
        } else (listaA[i] < listaB[i])
        pontosSegundoParticipante++
        
        
        
    }

}
console.log("O ganhador é:" , + encontrarGanhador(alicia, bob));