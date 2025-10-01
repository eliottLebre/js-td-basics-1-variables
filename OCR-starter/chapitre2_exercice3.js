// Permutation de variables
let nombre1 = 5;
let nombre2 = 10;
console.log(`Avant la permutation, nombre1: ${nombre1}, nombre2: ${nombre2}`);

// Solution classique utilisant une variable temporaire
const temporaire = nombre1;
nombre1 = nombre2;
nombre2 = temporaire
console.log(`permutation avec variable temporaire, nombre1: ${nombre1}, nombre2: ${nombre2}`);

// Solution alternative valable uniquement pour des nombres
nombre1 = nombre1 + nombre2;
nombre2 = nombre1 - nombre2;
nombre1 = nombre1 - nombre2;
console.log(`permutation sans variable temporaire, nombre1: ${nombre1}, nombre2: ${nombre2}`);

/*
// Échange de nombre1 et nombre2 sans variable temporaire
*/
[nombre1,nombre2]=[nombre2,nombre1];
console.log(`permutation sans variable temporaire, nombre1: ${nombre1}, nombre2: ${nombre2}`);
