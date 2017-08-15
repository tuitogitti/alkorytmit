/* map- ja reduce -funktiot ovat tärkeitä monissa
 * algoritmeissa, sillä ne pystyvät suorittamaan kerralla
 * useita toimenpiteitä ja siten nopeuttavat algoritmien suoritusta.
 * Näitä voidaan käyttää esim. suorittamaan suuria määriä SQL-lauseita.
 */

let arr1 = [1, 5, 10, 15];
let arr2 = arr1.map(x => x * 2);
console.log(arr2);

let sum = [0, 1, 2, 3, 4].reduce((x, y) => x + y, 0);
console.log(sum);
