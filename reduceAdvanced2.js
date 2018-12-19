// Ecrivez une fonction qui étant donné un tableau de n nombres
// tous identiques sauf un
// retourne le seul nombre qui n’est pas identique aux autres.

const numbers = [0, 1, 0, 0, 0, 0];

function nbOccurrence(val, myArray) {
  const numberFilter = myArray.filter(function(x) {
    return x === val;
  });
  return numberFilter.length;
}

const uniNumber = numbers.find(function(num) {
  return nbOccurrence(num, numbers) === 1;
});
console.log(uniNumber);
