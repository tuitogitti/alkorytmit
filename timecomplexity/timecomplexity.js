/*
Aikavaativuus (Time complexity) -pohdintatehtävä

Funktioissa findCommon1 ja findCommon2 olevat algoritmit tekevät saman asian
hieman eri tavoilla. Funktiot saavat parametreina kaksi taulukkoa ja
ne etsivät taulukoista yhteiset alkiot. Löydetyt luvut palautetaan tulostaulukossa.

Tutki algoritmeja ja määritä niiden aikavaativuudet O()-notaatiolla.
Määritä algoritmien suhteellinen ajankäyttö kun n=10 ja n=1000
Aikavaativuudet voi selvittää tutkimalla taulukon iteraatioiden määrää.

Huomaa että aikavaativuuksien erot näkyvät konkreettisesti vasta
suuremmilla n-arvoilla. Kommentoi findCommon1 ja findCommon2
vuorotellen ja katso algoritmin suoritusaika.

TODO: Tee finCommon3-funktio, jossa sama asia, eli kahden taulukon yhteisten
alkioiden haku, tehdään muuttamalla taulukot joukoiksi eli seteiksi ja
ottamalla talteen kahden setin leikkaus (unionin vastakohta). Kuinka
nopea tämä ratkaisu olisi?

*/

//*******************createNumArr*************************

// Funktio jolla luodaan testitaulukko, jossa n on alkioiden määrä,
// max suurin luku ja min pienin luku.

function createNumArr(n, min, max) {
  const arr = [];
  for (let i = 0; i < n; i++) {
    const rand = Math.floor(Math.random() * max) + min;
    arr.push(rand);
  }
  return arr;
}
// säädä n-arvoa sekä min ja max-lukuja tarvittaessa,
// niin että algoritmien laskenta kestää muutamia sekunteja
const testarr1 = createNumArr(50000, 1, 100000000);
const testarr2 = createNumArr(50000, 1, 100000000);
// console.log(testarr1);
// console.log(testarr2);

//*******************findCommon1*************************

function findCommon1(arr1, arr2) {
  const result = [];
  // Vertaillaan taulukoiden alkioita sisäkkäisillä silmukoilla
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      // Kun alkiot ovat samat, laitetaan alkio tulostaulukkoon
      if (arr1[i] === arr2[j] && result.indexOf(arr1[i]) < 0) {
        result.push(arr1[i]);
      }
    }
  }
  // palautetaan tulostaulukko
  return result;
}

console.log('findCommon1:');
console.log(findCommon1([4, 1, 5, 6], [7, 1, 3, 5])); // [1,5]
console.log(findCommon1([4, 1, 5, 6], [7, 2, 3, 9])); // []
console.log(findCommon1(testarr1, testarr2));

//*******************findCommon2*************************

function findCommon2(arr1, arr2) {
  const map = new Map();
  const result = [];
  // Laitetaan arr1-taulukon alkiot avaimiksi hajautustauluun eli mappiin
  // Koska mapin avaimilla pitää olla arvot, laitetaan arvoiksi kaikille 1
  for (let i = 0; i < arr1.length; i++) {
    map.set(arr1[i], 1);
  }
  // Käydään läpi taulukko arr2. Taulukon ja mapin vertailu on nopeampaa kuin 
  // kahden taulukon vertailu, joka tehtiin findCommon1-funktiossa.
  for (let j = 0; j < arr2.length; j++) {
    // Jos taulukon arr2 alkio on mapissa, laitetaan alkio tulostaulukkoon
    if (map.get(arr2[j]) && result.indexOf(arr2[j]) < 0) {
      result.push(arr2[j]);
    }
  }
  // palautetaan tulostaulukko
  return result;
}

console.log('findCommon2:');
console.log(findCommon2([4, 1, 5, 6], [7, 1, 3, 5])); // [1,5]
console.log(findCommon2([4, 1, 5, 6], [7, 2, 3, 9])); // []
console.log(findCommon2(testarr1, testarr2));
