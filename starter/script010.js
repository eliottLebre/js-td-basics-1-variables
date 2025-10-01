/*****************************
 * 10 - Opérateurs de base
 */

// 1. Déclarez les variables now, ageJohn, ageMark, yearJohn et yearMark, puis affectez aux trois premières les valeurs 2019, 28 et 33.
let now;
let ageJohn;
let ageMark;
let yearJohn;
let yearMark;

now = 2019;
ageJohn = 28;
ageMark = 33;
// Opérateurs mathématiques

// 2. Affectez à yearJohn sa date de naissance (en la calculant à partir de l'année courante et de son âge). Faites de même pour yearMark. Ensuite, affichez la date de naissance de John et "Mark est né en …".
yearJohn = now - ageJohn;
yearMark = now - ageMark;
console.log(` John est né en ${yearJohn},Et Mark en ${yearMark}`);

// 3. Affichez l'année à laquelle nous serons dans deux ans, le double de l'année et le dixième de l'année.
console.log(`${now += 2}, ${now * 2}, ${now / 10}`);

// Opérateurs logiques

// 4. … (Veuillez préciser votre question ou vos actions ici)
console.log(ageMark > ageJohn);
console.log(ageMark >= ageJohn);
console.log(ageMark < ageJohn);
console.log(ageMark <= ageJohn);
console.log(ageMark === ageJohn);
console.log(ageMark !== ageJohn);

console.log(ageMark > 18 && ageMark < 21);
console.log(ageMark > 18 || ageMark < 21);

// Opérateur typeof
console.log(typeof now);