

function Adicionar (a, b){
    return a+b;
}

function Subtrair (a, b) {
    return a-b;
}


function Dividir (a, b){
    return a/b;
}

function Multiplicar (a, b){
    return a*b;
}

console.log ("---------------- Teste de operações / Calculador -----------------------" ) ;
console.log ("Adicionar = " + Adicionar(10, 5));
console.log ("Subtrair = " + Subtrair(12, 5));
console.log ("Dividir = " + Dividir (50 ,5));
console.log ("Multiplicar = " +(2, 5));
console.log ("Dividir com zero = " +(50, 0));


function Aoquadrado(a){
    return a*a;

}
console.log("Quadrado = " + Aoquadrado(3));


function Mediatres(a, b, c){
    return Dividir(Adicionar(Adicionar(a,b), c), 3);

}
console.log("Média = " + Mediatres (1, 2, 3));


function Percentual(a, b){
    return Dividir(Multiplicar(b , 100), a);

}
console.log("Ver percentual = " + Percentual(100, 15));


function Porcentagem(a,b){
    return Dividir(Multiplicar(a, 100),b);

}
console.log("Porcentagem = " + Porcentagem(2, 100));
