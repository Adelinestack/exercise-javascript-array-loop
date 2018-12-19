// Créez un tableau de 5 nombres flottant (à virgule)
const float = [1.4, 3.2, 2.9, 6.8, 5.5];

// Retournez un tableau composé de la partie entière
// du dernier tableau de chiffres
const integer = float.map(function(x) {
  return parseInt(x, 10);
});
console.log(integer);

// Retournez un tableau retournant la valeur absolue de chaque valeur
const number = [1.4, -3.2, -2.9, 6.8, 5.5];

const absolu = number.map(function(x) {
  return Math.abs(x);
});
console.log(absolu);

// AVEC ARROW FUNCTION
// Créez un tableau de 5 nombres flottant (à virgule)
const float = [1.4, 3.2, 2.9, 6.8, 5.5];
// Retournez un tableau composé de la partie entière
// du dernier tableau de chiffres
const resultInt = float.map(num => parseInt(num));
console.log(resultInt);

// Retournez un tableau retournant la valeur absolue de chaque valeur
const numAbs = [1.4, -3.2, -2.9, 6.8, 5.5];
const resultAbs = numAbs.map(num => Math.abs(num));
console.log(resultAbs);
