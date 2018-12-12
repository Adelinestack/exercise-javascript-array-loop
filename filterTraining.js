// Créez un tableau de 5 nombres flottant (à virgule)
const float = [-1.4, 3.2, -2.9, -6.8, 5.5];
// Retournez un tableau qui ne contient que les valeurs
// dont la partie entière est négative et supérieure à -5
const result = float.filter(function(x) {
  const num = parseInt(x, 10);
  if (num < 0 && num > -5) {
    return num;
  }
});
console.log(result);
