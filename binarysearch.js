/*
 * binarySearch hakee taulukosta alkion (item) nimen perusteella sen indeksin.
 * Algoritmin nopeus on 0(log n). Eli jos taulukossa on 8 alkiota, tarvitsee
 * algoritmi suorittaa enintään log8 = 3 kertaa. 2 potenssiin 3 = 8. Ideana on
 * että haettavien alkoiden määrää supistetaan jokaisella hakukierroksella.
 */

function binarySearch(arr, item) {
    let low = 0;
    let high = arr.length - 1;

    while (low <= high) { // toistetaan kunnes etsintä kapenee yhteen alkioon
        mid = Math.round((low + high) / 2);
        guess = arr[mid];
        // console.log('kierros'); // voidaan tulostaa hakukierrosten lkm
        if (item === guess) {
            return mid; // lopetus
        }
        if (item < guess) { // item on puoliväliä alempana
            high = mid - 1; // uusi high
        } else { // item on puoliväliä ylempänä
            low = mid + 1; // uusi low
        }
    }
    return 'Not found!'; // Jos ei löydy, palautetaan 'Not found!'
}

const myArray = [1, 2, 3, 4, 5, 6, 'huuhaa', 8];

const index = binarySearch(myArray, 'huuhaa');
console.log('Haettu on indeksissä ' + index);
