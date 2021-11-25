// 1 -PIPOCA - 10 SEG   
// 2 - MACARRÂO - 8 SEG
// 3 - CARNE - 15 SEG
// 4 - FEIJÃO - 12 SEG
// 5 - BRIGADEIRO - 8 SEG
//
//  Se > 2x Padrão "A comida queimou"
//  Se > 3x Padrão ""Kabumm"
//  Não tem "Prato inexistente"
//  < Padrão "Tem insuficiente"
//  Finalizado "Prato pronto, bom apetite!!!"





let BOTÃO1   
let BOTÃO2 
let BOTÃO3  
let BOTÃO4  
let BOTÃO5 
let X2
let X3
let STOP

console.log (BOTÃO1 = " 1- PIPOCA - ESSE PRATO TEM 10 SEGUNDOS")
console.log (BOTÃO2 = " 2- MACARRÃO - ESSE PRATO TEM 8 SEGUNDOS")
console.log (BOTÃO3 = " 3- CARNE -  ESSE PRATO TEM 15 SEGUNDOS")
console.log (BOTÃO4 = " 4- FEIJÃO _ ESSE PRATO TEM 12 SEGUNDOS")
console.log (BOTÃO5 = " 5- BRIGADEIRO - ESSE PRATO TEM 8 SEGUNDOS")
console.log (X2 = " X2- DOBRAR O TEMPO DA COMIDA")
console.log (X3 = " X3-  TRIPLICAR O TEMPO DA COMIDA")
console.log (STOP= " STOP--------PARAR AQUECIMENTO---------" )





function MICROONDAS (Tipo, tempo){
 let tempopadrao = 0

 switch (Tipo){

    case 1:
     tempopadrao = 10;
      break;

    case 2:
    case 5:
     tempopadrao = 8;
      break;

    case 3:
     tempopadrao = 15;
      break;

    case 4:
     tempopadrao = 12;
      break; 
    
        default:
            tempopadrao = -1 


    }

    if (tempopadrao < 0)
    {
        return "Prato inexistente"
    } else if (tempo != 0 && tempo < tempopadrao) {
        return "Tem insuficiente"
    } else if (tempo >= (tempopadrao * 3)){
       return  "Kabumm"

    } else if(tempo >= (tempopadrao * 2)){

        return "A comida queimou"
    } else {
        return "Prato pronto, bom apetite!!!"
    }


}



console.log (MICROONDAS(3,45));
console.log (MICROONDAS(1,0));
console.log (MICROONDAS(10,15));
console.log (MICROONDAS(5,17));
console.log (MICROONDAS(4,10));

    



