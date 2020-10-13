/*
 * quickSort lajittelee taulukon alkiot, jotka ovat numeroita,
 * pienimmästä suurimpaan ja palauttaa lajitellun taulukon.
 * Algoritmin nopeus on O(n*log n) eli jos taulukossa
 * on 8 alkiota, tarvitsee algoritmi suorittaa enintään 8*3 = 24 kertaa.
 * Eli sen pitäisi yleensä olla hieman nopeampi kuin selection sort.
 * quickSort käyttää rekursiota joka on yleinen periaate algoritmeissa.
 * Ensin etsitään mahdollisimman yksinkertainen 'base case'
 * ja jos se ei toteudu, toistetaan 'recursive casea'.
 */

function quickSort(arr) {
  let pivot; // taulukosta valitaan arvo johon muita verrataan
  const smaller = []; // pienempi
  const bigger = []; // suurempi

  if (arr.length < 2) {
    // base case
    return arr; // lopetus koska ei tarvitse sortata
  } else {
    // recursive case
    pivot = arr[0];
    for (i = 1; i < arr.length; i++) {
      if (arr[i] <= pivot) {
        smaller.push(arr[i]);
        //console.log('smaller: ' + smaller);
      }
      if (arr[i] > pivot) {
        bigger.push(arr[i]);
        //console.log('bigger: ' + bigger);
      }
    }
    return quickSort(smaller).concat(pivot).concat(quickSort(bigger)); // rekursio
  }
}

const myArray = [4, 3, 6, 5, 1, 2, 8, 7];

const sortedArray = quickSort(myArray);
console.log(sortedArray);
