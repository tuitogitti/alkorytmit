/*
 * BinarySearch hakee järjestetystä taulukosta alkion (item) arvon perusteella sen indeksin.
 * Algoritmin nopeus on 0(logn). Eli jos taulukossa on 8 alkiota, tarvitsee
 * algoritmi suorittaa enintään log8 = 3 kertaa. 2 potenssiin 3 = 8. Ideana on
 * että haettavien alkoiden määrä puolitetaan jokaisella hakukierroksella.
 * Tässä on esitetty iteratiivinen ratkaisu. Algoritmi voidaan toteuttaa myös
 * rekursiivisesti.
 */

function binarySearch(arr, item) {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    // toistetaan kunnes etsintä kapenee yhteen alkioon
    const mid = Math.round((low + high) / 2);
    if (arr[mid] === item) {
      return mid; // lopetus
    }
    if (item < arr[mid]) {
      // item on puoliväliä alempana
      high = mid - 1; // uusi high
    } else {
      // item on puoliväliä ylempänä
      low = mid + 1; // uusi low
    }
  }
  return 'Not found!'; // Jos ei löydy, palautetaan 'Not found!'
}

const myArray = [1, 2, 8, 14, 15, 66, 100, 898];

const index = binarySearch(myArray, 100);
console.log('Haettu alkio on indeksissä ' + index);
