// Ecrivez une fonction qui étant donné un tableau de n nombres
// tous identiques sauf un
// retourne le seul nombre qui n’est pas identique aux autres.

function nbOccur(val, myArray) {
  const occurTab = myArray.filter(function(num) {
    return num === val;
  });
  return occurTab.length;
}
const numbers = [1, 2, 1, 1, 1, 1];

const nbUnique = numbers.find(function(x) {
  return nbOccur(x, numbers) === 1;
});
console.log(nbUnique);

// Ecrivez une fonction qui étant donné un tableau de n nombres
// tous identiques sauf un
// retourne le seul nombre qui n’est pas identique aux autres.
const numbers = [1, 2, 1, 1, 1, 1];
const cache = {};

const nbNumInArray = (num, numArray) => {
  if (cache[num]) {
    return cache[num];
  }
  cache[num] = numArray.filter(val => val === num).length;
  return cache[num];
};

const isUnique = numbers.find(x => nbNumInArray(x, numbers) === 1);
console.log(isUnique);

// mise en cache
