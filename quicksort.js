/*
 * QuickSort lajittelee taulukon alkiot, jotka ovat numeroita, pienimmästä
 * suurimpaan ja palauttaa lajitellun taulukon. Algoritmin nopeus on O(n*log n)
 * eli jos taulukossa on 8 alkiota, tarvitsee algoritmi suorittaa enintään
 * 8*3 = 24 kertaa. QuickSort käyttää rekursiota. Ideana on jakaa ongelma
 * osaongelmiin jotka ratkaistaan rekursiivisesti. Osaongelmat tallennetaan
 * smaller ja bigger -taulukoihin. Tässä esimerkissä kerätään "pivot" -alkiota
 * pienemmät alkiot smaller -taulukkoon ja suuremmat alkiot bigger -taulukkoon.
 * Rekursion periaatteena on, että ensin katsotaan toteutuuko mahdollisimman
 * yksinkertainen 'base case', joka on samalla termination case, ja jos se ei
 * toteudu, toistetaan 'recursive casea'.
 */

function quickSort(arr) {
  let pivot; // taulukosta valitaan arvo johon muita arvoja verrataan
  const smaller = []; // pienemmmät arvot tähän taulukkoon
  const bigger = []; // suuremmmat arvot tähän taulukkoon

  if (arr.length < 2) {
    // base case
    return arr; // termination eli lopetus koska ei tarvitse sortata
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
    // rekursio jossa yhdistetään pivot ja lajitellut taulukot
    return quickSort(smaller).concat(pivot).concat(quickSort(bigger));
  }
}

const myArray = [4, 3, 6, 5, 1, 2, 8, 7];

const sortedArray = quickSort(myArray);
console.log(sortedArray);
