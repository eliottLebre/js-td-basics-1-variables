// Celsius - Fahrenheit
/*
- Initialisez une variable celsius avec une valeur de votre choix en degrés Celsius (par exemple, 25).
- Calculez la température équivalente en degrés Fahrenheit et stockez-la dans une variable fahrenheit en utilisant la formule : fahrenheit = (celsius * 9/5) + 32.
- Affichez la température en degrés Celsius et sa conversion en degrés Fahrenheit dans la console en utilisant une phrase descriptive.
- Modifiez la valeur de la variable celsius et répétez le calcul et l'affichage pour voir la conversion avec une autre température.
*/

// Initialisez la variable celsius avec une valeur de votre choix
let celsius = 25;

// Calculez la température équivalente en degrés Fahrenheit et stockez-la dans la variable fahrenheit
let fahrenheit = (celsius * 9/5) + 32;

// Affichez la température en degrés Celsius et sa conversion en degrés Fahrenheit dans la console en utilisant une phrase descriptive
console.log(`température en degrés celsius ${celsius} et sa convertion en degrés fahrenheit ${fahrenheit}`);
// Modifiez la valeur de la variable celsius
celsius = 17;
// Répétez le calcul et l'affichage pour voir la conversion avec une autre température
fahrenheit = (celsius * 9/5) + 32;
console.log(`température en degrés celsius ${celsius} et sa convertion en degrés fahrenheit ${fahrenheit}`);

