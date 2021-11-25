for (let i= 5; i >=0; i--) {
    //console.log("Olá Mundo" +i)
}


let contador= 0;
while (contador<=10) {
   // console.log (contador);
    contador++;
}

contador= 0;
do{
    console.log(contador);
    contador++;
}while (contador<=5);


for(let i = 0; i <=10; i= i+2) {
    console.log("contador ==",i);
}


for (let i = 0; i<=10; i++) {
    if(i % 2 == 0) {
        console.log("contadoe ==",i);
    }
} 

console.log("---------------")

let nome = ["Taynan", "Rebeca", "Vitor", "Logan", "Helena"];
 console.log(nome.length)
for (let i =0; i < nome.length ; i++) {
    console.log(nome[i]);
}