let filmes1 = ["star wars", "totoro",  "rocky", "pulp fiction",  "la vida es bella"]
let filmes2 = ["Toy Story", "Procurando Nemo", "Kung-fu Panda", "Wally", "Fortnite"]




function converterMaiusculas(array){

  for (let i = 0; i < array.length; i++){
    array[i] = array[i].toUpperCase()
  }
   
    return array
}

console.log(converterMaiusculas(filmes1))



function passagemDeElementos(array1, array2) {
  let qtd = array2.length;
  for (let i = 0; i <= array2.length; i++) {
    array1.push(array2.pop().toUpperCase())
  }
  return array1

}

console.log (passagemDeElementos(filmes1, filmes2));