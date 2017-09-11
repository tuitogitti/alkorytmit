/*
 * selectionSort lajittelee taulukon alkiot, jotka
 * ovat numeroita, suurimmasta pienimpään tai pienimmästä suurimpaan ja
 * palauttaa lajitellun taulukon. Algoritmin nopeus on 0(n*n)
 * Eli jos taulukossa on 8 alkiota, tarvitsee algoritmi
 * suorittaa enintään 64 kertaa (oikeasti 32 kertaa). Todellisuudessa
 * koska n:n lukumäärä vähenee yhdellä joka kierroksella, tarvitsee algoritmi
 * suorittaa maksimissaan vain (n*n)*0.5 kertaa, mutta notaatio on O(n*n).
 * selectionSort käyttää kahta apufunktiota jotka ovat findIndexOfSmallest ja
 * findIndexOfBiggest
 */

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
    let newArray = [];
    let count = arr.length;
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

let myArray = [4, 3, 6, 5, 1, 2, 8, 7];

let sortedArray = selectionSort(myArray, 'smallest');
console.log(sortedArray);
