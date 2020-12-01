/*
 * insertionSort lajittelee taulukon alkiot, jotka ovat numeroita,
 * pienimmästä suurimpaan ja palauttaa lajitellun taulukon.
 * Algoritmin nopeus on 0(n*n). Eli jos taulukossa on 8 alkiota,
 * tarvitsee algoritmi suorittaa enintään 64 kertaa. Algoritmi valitsee
 * ensin taulukon kaksi ensimmäistä alkiota, vertaa niitä toisiinsa ja
 * vaihtaa tarvittaessa niiden paikat. Sen jälkeen valitaan kolmas alkio
 * ja verrataan sitä toiseen ja ensimmäiseen alkioon ja tarvittaessa
 * vaihdetaan paikat jne... Joka kierroksella käsiteltävä alkio sijoitetaan
 * siihen mennessä läpikäytyjen alkioiden joukossa oikealle paikalleen,
 * kunnes koko taulukko on käyty läpi. Algoritmia on helpointa havainnollistaa
 * käymällä sitä läpi esim. VSCoden debuggerilla.
 */

function insertionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    const temp = arr[i]; // käsiteltävä alkio temp -muuttujaan
    let j = i - 1; // edeltävän alkion indeksi on j
    while (j >= 0 && arr[j] > temp) {
      // jos edeltävä > käsiteltävä
      arr[j + 1] = arr[j]; // edeltävä käsiteltävän paikalle
      j--; // seuraava edeltävä alkio on yhtä pienemmässä indeksissä
    }
    // käsiteltävä alkio sijoitetaan oikealle paikalle (tähän mennessä)
    arr[j + 1] = temp;
  }
  return arr;
}

const myArray = [4, 6, 3, 1, 8, 2, 5, 7];

const sortedArray = insertionSort(myArray);
console.log(sortedArray);
