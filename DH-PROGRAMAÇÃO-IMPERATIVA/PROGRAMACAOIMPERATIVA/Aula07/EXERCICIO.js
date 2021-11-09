//   Dê uma olhada nestes exemplos e pense sobre o que cada um retorna:
// !true
// !false
// !!false
// !!true
// !1
// !!1
// !0
// !!0
// !!"" 
//let x = 5 ;
//let y = 9;
// x < 10 && x!==5
// x>9 || x===5
// !(x===y)


console.log (!true);
console.log (!false);
console.log (!!false);
console.log (!!true);
console.log (!1);
console.log (!!1);
console.log (!0);
console.log (!!0);
console.log (!!"" )

let x = 5 ;
let y = 9;


console.log (x < 10 && x!==5);
console.log (x>9 || x===5);
console.log (!(x===y));


//Ex2. O que cada expressão retorna?
//Sem testar no console, o que você acha que cada uma destas expressões irá retornar? Elas são true ou false?

//let x=10
//let y ="a"
//y==="b" || x >= 10

//let x=3
//let y=8
//!(x == "3" || x === y) && !(y !== 8 && x <= y)

//let str = ""
//let msg = "haha!"
//let eBonito = "false"
//!((str || msg) && eBonito)


x = 10
y ="a"
console.log (y==="b" || x >= 10)


x = 3
y = 8
console.log (!(x == "3" || x === y) && !(y !== 8 && x <= y))


let str = ""
let msg = "haha!"
let eBonito = "false"
console.log (!((str || msg) && eBonito))




