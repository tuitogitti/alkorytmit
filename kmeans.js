/*
Kaksiulotteisen datan k-means klusterointi. Tämä on mahdollisimman lyhyt ja yksinkertainen toteutus
joka on jossain määrin epätarkka ja riippuu paljon oletuksena annetuista aloituskeskipisteistä.
Webistä ja pilvipalveluista on saatavilla tarkempia ja tehokkaampia k-means -algoritmeja.

K-means -algoritmi on luokittelualgoritmi jota ei tarvitse harjoittaa harjoitusdatalla ennen käyttöä.
Datapisteet luokitellaan k kappaleeseen klustereita eli luokkia. Aluksi luodaan olettamalla
klusterien keskipisteet (centroidit) eri puolille koordinaatistossa olevaa dataa. Sitten sijoitetaan
alkiot siihen klusteriin jonka keskipiste on lähinnä. Sitten muutetaan keskipisteeksi klusterin
alkioiden keskiarvovektori. Tätä toistetaan kunnes klusterien keskipisteet eivät enää muutu.

1. Valitaan satunnaiset alkiot klustereiden keskipisteiksi.
2. Toistetaan kohtia 3-4
3. Sijoitetaan kukin aineiston alkio siihen klusteriin,
jonka keskipiste on lähinnä.
4. Korvataan kunkin klusterin keskipiste klusterin
alkioiden keskiarvovektorilla.
5. Lopetetaan toisto kun klustereiden keskipisteet eivät enää muutu
*/
// data eli aineisto josta etsitään klustereita. Data voisi kuvata äänestäjän arvoja
// konservatiivisuus (1-5) ja oikeistolaisuus (1-5). Niiden perusteella saatu klusteri
// on puolue/puolueryhmä jota henkilö todennäköisesti äänestää.
const data = [
  [3, 2],
  [5, 5],
  [1, 1],
  [4, 3],
  [5, 1],
  [2, 1],
  [5, 3],
  [2, 2],
  [3, 5],
  [1, 3],
  [3, 3],
];
// 1. Valitaan k -kappaletta alkioita eri puolilta aineistoa klustereiden alkukeskipisteiksi.
// vihervasemmisto, keskusta, perussuomalaiset, kokoomus
const centroids = [
  [2, 2],
  [3, 3],
  [5, 3],
  [3, 5],
];
/*
 * kmeans -funktio jakaa datan k-kappaleeseen klustereita eli luokkia.
 *
 *  data - luokiteltava data
 *  centroids - klustereiden keskipisteiksi valitut pisteet
 *  k - haluttu klusterien lukumäärä
 */
function kmeans(data, centroids, k) {
  const Groups = []; // Taulukko johon k kpl klustereita syntyy
  let tempdistance = 0; // muuttuja johon tulee etäisyys data-alkiosta klusterin keskipisteeseen
  let oldcentroids = []; // Taulukko johon tallennetaan vanhat klusterien keskipisteet
  let changed = false; // muuttuja joka kertoo onko keskipisteiden muutos valmis

  oldcentroids = centroids.slice(); // kopioidaan keskipisteet oldcentroids -taulukkoon

  do {
    // 2. Toistetaan kohtia 3-4
    /* joka kierroksen aluksi muodostetaan uusi tyhjä Groups -taulukko
        joka näyttää tältä: [[], [], []] */
    for (let i = 0; i < k; i++) {
      Groups[i] = [];
    }

    for (let i = 0; i < data.length; i++) {
      // käydään läpi luokiteltava data
      let smallestdistance = -1; // data-alkion pienin etäisyys klusterin keskipisteeseen
      let nearestcluster = 0; // lähin klusteri jonka keskipiste on lähinnä data-alkiota

      for (let cluster = 0; cluster < k; cluster++) {
        // käydään läpi k kpl klustereita
        let dist = 0; // alustetaan keskipisteen ja datapisteen etäisyys nollaksi
        for (let j = 0; j < data[i].length; j++) {
          // käydään läpi datapiste, tässä 2 numeroa
          // kaava jolla lasketaan etäisyys klusterin keskipisteeseen
          dist += Math.pow(Math.abs(data[i][j] - centroids[cluster][j]), 2);
        }

        tempdistance = Math.sqrt(dist); // etäisyys keskipisteeseen sijoitetaan muuttujaan tempdistance
        console.log(tempdistance); // logataan lasketut etäisyydet
        if (smallestdistance === -1) {
          // ensimmäinen kierros

          smallestdistance = tempdistance; // eka laskettu etäisyys laitetaan muuttujaan lowdistance
          nearestcluster = cluster; // sijoitetaan eka klusteri lähimmäksi klusteriksi
        } else if (tempdistance <= smallestdistance) {
          // seuraavat kierrokset

          nearestcluster = cluster; // sijoitetaan klusteri lähimmäksi klusteriksi
          smallestdistance = tempdistance; // pienin etäisyys laitetaan muuttujaan smallestdistance
        }
      }
      // 3. Sijoitetaan kukin aineiston alkio siihen klusteriin jonka keskipiste on lähinnä
      Groups[nearestcluster].push(data[i].slice());
      console.log(Groups); // Groups -taulukko valmistuu kun kierrokset etenevät
    }

    for (let cluster = 0; cluster < k; cluster++) {
      // käydään läpi k kpl klustereita
      // käydään läpi klusterin sisältämät taulukot
      for (
        let i = 0, clustergroup = Groups[cluster].length;
        i < clustergroup;
        i++
      ) {
        // käydään läpi taulukoiden sisältämät datapisteet
        for (
          let j = 0, clustergroupsize = Groups[cluster][i].length;
          j < clustergroupsize;
          j++
        ) {
          // lisätään centroideihin Groups -taulukon alkiot
          centroids[cluster][j] += Groups[cluster][i][j];
          // console.log(centroids[cluster][j]);
        }
      }
      for (let i = 0; i < centroids[cluster].length; i++) {
        // käydään läpi centroidit
        // 4. Korvataan kunkin klusterin keskipiste klusterin alkioiden keskiarvovektorilla.
        // Eli luodaan uudet tarkemmat centroidit
        centroids[cluster][i] = centroids[cluster][i] / Groups[cluster].length;
        if (centroids[cluster][i] != oldcentroids[cluster][i]) {
          // jos centroidit ovat muuttuneet
          changed = true;
          oldcentroids = []; // luodaan uusi oldcentroids -taulukko
          oldcentroids = centroids.slice(); // muutetut centroidit oldcentroids -taulukkoon
        }
      }
    }
  } while (changed === true); // 5. Lopetetaan toisto kun klustereiden keskipisteet eivät enää muutu
  return Groups; // palautetaan klusterit taulukossa
}

const groups = kmeans(data, centroids, 4);

console.log(
  'Lopulliset klusterit järjestyksessä vihervasemmisto, keskusta, perussuomalaiset, kokoomus: '
);
console.log(groups);
