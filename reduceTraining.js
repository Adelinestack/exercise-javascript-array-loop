// Ecrivez une fonction qui étant donné un tableau de n nombres
// retourne le plus grand.
const numbers = [10, 2, 3, 12, 5, 8];

const highNum = numbers.reduce(function(acc, num, index, myArray) {
  return acc < num ? num : acc;
}, 0);

console.log(highNum);

// Ecrivez une fonction qui étant donné une chaîne de caractère
// retourne cette même chaîne de caractère composée uniquement
// des lettres en position paire.
const string = 'Merveilleux';

const stringEven = string.split('').reduce(function(acc, car, index, myArray) {
  return index % 2 === 0 ? acc + car : acc;
}, '');
console.log(stringEven);
