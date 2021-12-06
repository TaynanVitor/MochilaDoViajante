//  let numeros = [2, 4 , 6, 8, 10, 12, 14];

// let dobro = numeros.map(function(num){
//     ;
//     return num * 5+("0");
// });


// console.log(dobro);

// let achar = numeros.filter(function(numb){
//  return  numb >= 4;
// });

// console.log(achar);


// let soma = numeros.reduce(function(acumulator, numero){
//     return acumulator + numero; 
// });

// console.log(soma);


// let percorrer = numeros.forEach(function(nume){
//     console.log('São pares os numeros '+nume+ ' e vão chegar em '+soma)
// });


// Crie um array de números pares, e utilizando a função .map() nesse array, crie um novo array com apenas números ímpares.

// Crie um array de nomes, que possua dois índices com o nome Maria. Utilize o .filter() para obter apenas esses dois índices com o nome Maria.

// Crie um array de números e utilize a função .reduce() para devolver uma string com os números formatados.

// Exemplo [1,5,9,3,7] => “1 – 5 – 9 – 3 – 7”


// Crie um array de animais, após isso passe por cada índice utilizando o .forEach() e imprima a frase “O animal é NOME_DO_ANIMAL”.




let numeros = [2, 4 , 6, 8, 10, 12, 14];

let impares = numeros.map(function(par){
    return par + 1;
});

console.log(impares);


let nomes = ['João', 'Maria', 'Jose', 'Maria', 'Pedro']

let filtro = nomes.filter(function(item){
    return item == 'Maria';
});

console.log(filtro);


let formatados = numeros.reduce(function(acumulador,item){
    return acumulador +'-'+ item;
});

console.log(formatados);

let animais = ['Lobo', 'Coruja', 'Tigre']

animais.forEach(function(item){
    console.log('O nome do animal é '+item)
});
