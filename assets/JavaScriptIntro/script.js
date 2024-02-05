// En variabel kan deklareras på två olika sätt.
// let: beter sig som vi är vana vid och lever inom det scope vi deklarerar den;
// I de allra flesta fall är det ´let´ man vill använda.
// Variabler i JavaScript är dynamiskt typade.
// Detta innebär att en variabel i JavaScript antar den datatyp man lägger i den.

// let letVar = 2;
// console.log(letVar);
// console.log("Tadaaa!");

// const constVar = 5;
// console.log(constVar);
// console.log("Tadaaa!");

// Till skillnad från var i C# som är en hårt typad variabel så kan en variabel i JavaScript byta datatyp.
// var varVar = null;
// // Variabler
// const constVar = 1;
// let letVar = 2;

// if (varVar) {
//   varVar = 10;
// }
// console.log(constVar);
// console.log(letVar);
// console.log(varVar);

// const name = "Niklas";
// const age = 35;

// const presentationText = `hej ${name},
//                     du är
// ${age} gammal`;
// console.log(presentationText);

//Arrayer
// const arr = ["1", 1, true];
// const arr = ["a", 1, [true, [1, "v"]]];
// // const arr = ["a", "b", "c"];
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i][1][1]);
// }
// for (const key in arr) {
//   console.log(key);
// }
const arr = ["a", "b", "c"];
const arr2 = ["d", "e", "f"];

let pop = arr.pop();

console.log(pop);
console.log(arr);

arr.push(pop);
console.log(arr);
console.log("-------------");

let shift = arr.shift();

console.log(shift);
console.log(arr);

arr.unshift(shift);
console.log(arr);

console.log("-------------");

let join = arr.join(" ");

console.log(join);

let tostring = arr.toString(" ");

console.log(tostring);

console.log("-------------");

const arr3 = arr.concat(arr2);

console.log(arr3);

console.log("-------------");

let slice = arr3.slice(2, 4);

console.log(slice);

console.log("-------------");

let splice = arr3.splice(2, 1, 10);

console.log(splice, arr3);
