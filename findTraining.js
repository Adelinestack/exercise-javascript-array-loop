// Dans la variable userNames stockez 5 noms de user
const userNames = ['Adeline', 'Axelle', 'Bernard', 'Nahla', 'Betty'];

// Cherchez dans ce tableau le premier qui commence par ‘Be’
const result = userNames.find(function(name) {
  if (name.indexOf('Be') != -1) {
    return name;
  }
});
console.log(result);
