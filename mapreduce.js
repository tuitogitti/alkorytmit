/* map- ja reduce -metodit ovat käyttökelpoisia
monenlaisissa algoritmeissa, sillä niissä yhdistyy
iteraatio ja argumenttina olevan callbackin suorittama
operaatio.
 */

const arr1 = [1, 5, 10, 15];
const arr2 = arr1.map((x) => x * 2);
console.log(arr2);

const sum = [0, 1, 2, 3, 4].reduce((x, y) => x + y, 0);
console.log(sum);
