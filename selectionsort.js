/*
 * selectionSort lajittelee taulukon alkiot, jotka ovat numeroita,
 * suurimmasta pienimpään tai pienimmästä suurimpaan ja palauttaa
 * lajitellun taulukon. Algoritmi käyttää kahta apufunktiota eli
 * findIndexOfSmallest ja findIndexOfBiggest. Algoritmin olisi voinut
 * tehdä huomattavasti vähemmällä koodilla, mutta tässä on tarkoituksella
 * käytetty ei-funktionaalista koodia ja tehty lajittelut molemmissa
 * järjestyksissä.
 *
 * Algoritmin teoreettinen nopeus on 0(n*n) eli jos taulukossa on 8 alkiota,
 * tarvitsee algoritmi suorittaa enintään 64 kertaa. Todellisuudessa
 * koska n:n lukumäärä vähenee yhdellä joka kierroksella, tarvitsee algoritmi
 * suorittaa maksimissaan vain (n*n)/2 kertaa, mutta notaatio on silti O(n*n).
 * Valintalajittelu perustuu siihen että taulukosta valitaan esim. pienin alkio
 * joka sijoitetaan uuden taulukon alkuun ja loput alkiot yhdistetään taulukoksi
 * josta taas valitaan pienin jne. kunnes kaikki alkiot ovat järjestyksessä
 * uudessa taulukossa.
 */

// apufunktio joka hakee pienimmän alkion indeksin
function findIndexOfSmallest(arr) {
    let smallest = arr[0];
    let smallestIndex = 0;
    let i;

    for (i = 1; i < arr.length; i++) {
        if (arr[i] < smallest) {
            smallest = arr[i];
            smallestIndex = i;
        }
    }
    return smallestIndex;
}

// apufunktio joka hakee suurimman alkion indeksin
function findIndexOfBiggest(arr) {
    let biggest = arr[0];
    let biggestIndex = 0;
    let i;

    for (i = 1; i < arr.length; i++) {
        if (arr[i] > biggest) {
            biggest = arr[i];
            biggestIndex = i;
        }
    }
    return biggestIndex;
}

function selectionSort(arr, choice) {
    const newArray = [];
    const count = arr.length;
    let i;
    let arr1;
    let arr2;

    for (i = 0; i < count; i++) {

        if (choice === 'smallest') {
            smallestIndex = findIndexOfSmallest(arr);
            //console.log(smallestIndex);
            newArray.push(arr[smallestIndex]);
            arr1 = arr.slice(0, smallestIndex); //poistetaan kaikki ennen pienintä
            arr2 = arr.slice(smallestIndex + 1, arr.length); // pienimmän jälkeen
            arr = arr1.concat(arr2);
            //console.log(arr);
        } else {
            biggestIndex = findIndexOfBiggest(arr);
            newArray.push(arr[biggestIndex]);
            arr1 = arr.slice(0, biggestIndex);
            arr2 = arr.slice(biggestIndex + 1, arr.length);
            arr = arr1.concat(arr2);
        }
    }
    return newArray;
}

const myArray = [4, 3, 6, 5, 1, 2, 8, 7];

const sortedArray = selectionSort(myArray, 'smallest');
console.log(sortedArray);
