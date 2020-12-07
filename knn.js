/*
K-NN -algoritmi on yksinkertainen luokittelualgoritmi jota käytetään paljon
koneoppimisessa. K-NN -luokittelun ideana on luokitella koordinaatistoon asetettu
datapiste siihen luokkaan johon kuuluvat useimmat sitä lähinnä olevat k kappaletta
datapisteitä. Tyypillisiä k:n arvoja ovat esim. 3 ja 5. Algoritmia pitää harjoittaa
harjoitusdatalla ennen sen käyttöä. Tämä on mahdollisimman yksinkertainen (eli naiivi)
K-NN -toteutus. Webistä ja pilvipalveluista on saatavilla tehokkaampia K-NN -algoritmeja.

Mahdollisimman yksinkertaisen K-NN -algoritmin toiminta:
1. Määritellään tunnettu harjoitusdata joka muodostuu alkioista joilla on kaksi
ominaisuutta ja luokka
2. Määritellään tutkittava data eli näyte joka on alkio jolla on kaksi ominaisuutta,
mutta luokkaa ei tunneta sillä algoritmin tarkoitus on selvittää se
3. Määritellään k:n arvo
4. Lasketaan etäisyydet jokaisen harjoitusdata -alkion ja näytteen välillä. Etäisyys
ja vastaava harjoitusdata-alkio sijoitetaan samaan alkioon (alkio on taulukko)
5. Lajitellaan etäisyydet pienimmästä suurimpaan
6. Haetaan ensimmäiset k kpl alkiota lajitellusta taulukosta
7. Haetaan yleisin luokka haetuista alkioista
8. Palautetaan yleisin luokka
*/

// 1. Määritellään harjoitusdata [paino, väri, luokka]
// 10===punainen, 20===keltainen, 30===vihreä
const trainingData = [
  [303, 20, 'banaani'],
  [370, 10, 'omena'],
  [298, 20, 'banaani'],
  [277, 20, 'banaani'],
  [377, 30, 'omena'],
  [299, 20, 'banaani'],
  [382, 10, 'omena'],
  [374, 30, 'omena'],
  [303, 30, 'banaani'],
  [309, 20, 'banaani'],
  [301, 10, 'omena'],
  [366, 10, 'omena'],
  [311, 20, 'banaani'],
  [302, 20, 'banaani'],
  [313, 10, 'omena'],
  [373, 30, 'omena'],
  [305, 20, 'banaani'],
  [371, 20, 'omena'],
];
// 2. Määritellään tutkittava data
const sample = [363, 30];
// 3. Määritellään k:n arvo
const k = 3;

// Funktio joka palauttaa alkioiden välisen etäisyyden,
// euklidinen etäisyys kaksiulotteisessa avaruudessa.
function distance(a, b) {
  return Math.sqrt(Math.pow(a[0] - b[0], 2) + Math.pow(a[1] - b[1], 2));
}
// Funktio joka palauttaa taulukossa useimmin esiintyvän alkion
function findMostFrequent(arr) {
  return arr
    .sort(
      (a, b) =>
        arr.filter((v) => v === a).length - arr.filter((v) => v === b).length
    )
    .pop();
}

function knn() {
  const darray = []; // distance array
  const carray = []; // class array
  // 4. Lasketaan etäisyydet jokaisen harjoitusdata -alkion ja näytteen välillä. Etäisyys
  // ja vastaava harjoitusdata-alkio sijoitetaan samaan alkioon (alkio on taulukko)
  trainingData.forEach(function (element) {
    darray.push([distance(element, sample), element]);
  });
  // 5. Lajitellaan etäisyydet pienimmästä suurimpaan
  darray.sort(function (a, b) {
    return a[0] - b[0];
  });
  // console.log(darray);
  // 6. Haetaan ensimmäiset k kpl alkiota lajitellusta taulukosta
  const kdarray = darray.slice(0, k);
  // console.log(kdarray);
  // 7. Haetaan yleisin luokka haetuista alkioista
  for (let i = 0; i < k; i++) {
    carray.push(kdarray[i][1][2]);
  }
  // 8. Palautetaan yleisin luokka
  return findMostFrequent(carray);
}

const result = knn();
console.log('Tutkittava objekti on ' + result);
