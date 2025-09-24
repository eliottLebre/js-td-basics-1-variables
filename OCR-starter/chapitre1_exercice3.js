// Prédiction de résultat
/*
Affichez dans la console le résultat de l'opérateur "+" dans les différentes cas de figure
avec les valeurs 4 et 5 selon qu'elles sont de type nombre ou de type chaîne :
- 4 et 5 sont toutes deux de type nombres :
    * quelle opération réalise l'opérateur "+" dans ce cas ? il additionne deux nombres
    * quel est le résultat de l'opération ? Le resultat est 9
- 4 et 5 sont toutes deux de type chaîne :
    * quelle opération réalise l'opérateur "+" dans ce cas ? il concatene les deux chaine de caractères
    * quel est le résultat de l'opération ? Le resultat est 45
- 4 est de type chaîne et 5 est de type nombre :
    * quelle opération réalise l'opérateur "+" dans ce cas ? il concatene le tout pour en faire une chaine
    * quel est le résultat de l'opération ? Le resultat est 45
- que se passe-t-il si on entoure toute l'expression (VALEUR OPÉRANDE VALEUR) de guillemets ? Pourquoi ?
*/

// Cas 1 : 4 et 5 sont toutes deux de type nombres
const twoNumbers = 4 + 5;
console.log(twoNumbers);

// Cas 2 : 4 et 5 sont toutes deux de type chaîne
const twoChar = "4" + "5";
console.log(twoChar);

// Cas 3 : 4 est de type chaîne et 5 est de type nombre
const charAndNumber = "4" + 5;
console.log(charAndNumber);

// Cas 4 : Entourer l'expression (VALEUR OPÉRANDE VALEUR) de guillemets
const operator = "4 + 5";
console.log(operator);

console.log(`En résumé voici les résultat : le premier essaie vaut ${twoNumbers} le second test vaut ${twoChar} le 3eme ${charAndNumber} et le dernier ${operator}`);