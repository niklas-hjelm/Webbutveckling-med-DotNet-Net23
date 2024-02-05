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

//Upopgift 1
function filterNumbers(arr) {
  return arr.filter((n) => n > 10);
}
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const filteredNumbers = filterNumbers(numbers);

console.log(filteredNumbers);

//Uppgift 2
const book = {
  titel: "Hej",
  författare: "Niklas",
  utgivningsdatum: 9001,
};

function printBok(b) {
  console.log(`${b.titel} av ${b.författare} utgiven år ${b.utgivningsdatum}`);
}

printBok(book);

//Uppgift 3
function isEven(tal) {
  //   if (tal % 2 === 0) {
  //     console.log("Talet är jämt!");
  //   } else {
  //     console.log("Talet är udda!");
  //   }
  tal % 2 == 0 ? console.log("Talet är jämt!") : console.log("Talet är udda!");
}

isEven(1);
isEven(2);

//Uppgift 4
// Fibbonaccis talsekvens består av en följd av tal
// där varje tal är summan av de föregående två talen.
// 0 1 1 2 3 5 8 13 21 34

const fibbo = [0, 1];

function getFibboNums(fibboArr, stopCount) {
  if (fibboArr.length == stopCount) {
    return;
  }
  fibboArr.push(fibboArr[fibboArr.length - 1] + fibboArr[fibboArr.length - 2]);
  getFibboNums(fibboArr, stopCount);
}

getFibboNums(fibbo, 10);

console.log(fibbo);

// Uppgift 5
const strings = ["hej", "på", "dig"];

function allStringsToUpper(arr) {
  return arr.map((s) => s.toUpperCase());
}

const result = allStringsToUpper(strings);

console.log(result);
