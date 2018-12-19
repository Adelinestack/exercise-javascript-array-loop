// Effectuer la somme des éléments de 2 tableaux
const tab1 = [1, 2, 3, 4, 5];

// solution 1
function addNumTab(array1) {
  const total = array1.reduce(function(acc, num, index, myArray) {
    return acc + num;
  }, 0);
  return total;
}
console.log(addNumTab(tab1));
