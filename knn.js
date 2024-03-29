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

// 1. Määritellään harjoitusdata [paino(g), väri, luokka]
// 1===punainen, 2===keltainen, 3===vihreä
const trainingData = [
  [303, 2, 'banaani'],
  [370, 1, 'omena'],
  [298, 2, 'banaani'],
  [277, 2, 'banaani'],
  [377, 3, 'omena'],
  [299, 2, 'banaani'],
  [382, 1, 'omena'],
  [374, 3, 'omena'],
  [303, 3, 'banaani'],
  [309, 2, 'banaani'],
  [301, 1, 'omena'],
  [366, 1, 'omena'],
  [311, 2, 'banaani'],
  [302, 2, 'banaani'],
  [313, 1, 'omena'],
  [373, 3, 'omena'],
  [305, 2, 'banaani'],
  [371, 2, 'omena'],
];
/* 
Harjoitusdatan ominaisuuksien numeroarvot ovat "eri skaalassa", mikä
vääristää etäisyyksien mittaukseen perustuvan knn-algoritmin-toimintaa.
https://stats.stackexchange.com/questions/287425/why-do-you-need-to-scale-data-in-knn.
Tämän vuoksi ominaisuudet kannattaa "normalisoida". Yksinkertaisin mahdollinen 
normalisointi voidaan tehdä kasvattamalla väriarvojen numerot satakertaisiksi, 
jolloin painot ja väriarvot ovat suunnilleen samassa skaalassa.
*/
const trdata = trainingData.map((subarr) => {
  return [subarr[0], subarr[1]*100, subarr[2]]
  })
// logataan konsoliin "normalisoitu" harjoitusdata
console.log(trdata);

// 2. Määritellään tutkittava data. Väriarvo skaalataan kuten harjoitusdatassa
const sample = [383, 200];
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
// Pääfunktio, joka ottaa vastaan harjoitusdatan ja näytteen
function knn(trdata, sample) {
  const darray = []; // distance array
  const carray = []; // class array
  // 4. Lasketaan etäisyydet jokaisen harjoitusdata -alkion ja näytteen välillä. Etäisyys
  // ja vastaava harjoitusdata-alkio sijoitetaan samaan alkioon (alkio on taulukko)
  trdata.forEach(function (element) {
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

const result = knn(trdata, sample);
console.log('Tutkittava objekti on ' + result);
