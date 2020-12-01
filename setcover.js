/* SetCover on ahne algoritmi jonka tarkoituksena on hakea pienin mahdollinen määrä olemassa
 * olevia joukkoja (set) jotka peittävät/kattavat (cover) kaikki määrätyt alkiot. Idea on erittäin
 * yksinkertainen: valitse joukko joka kattaa mahdollisimman monta alkiota joita ei ole vielä
 * peitetty. Ei haittaa vaikka mukana on alkioita jotka on jo peitetty. Tätä toistetaan kunnes
 * kaikki alkiot on peitetty. Algoritmin nopeus on O(n*n), joten se on approksimaation ansiosta
 * huomattavasti nopeampi kuin täydellinen ratkaisu jonka nopeus olisi O(n!). Tässä esimerkissä
 * pyritään löytämään mahdollisimman pieni määrä radioasemia jotka kattavat kaikki vaadittavat
 * kaupungit. Joukkojen määrä on esimerkissä erittäin pieni ja ratkaisu on hyvin helppo koska
 * kyseessä on vain ahneen algoritmin demo.
 * Ahne algoritmi (Greedy algorithm) tarkoittaa algoritmia, joka perustuu siihen että pyritään
 * saavuttamaan jokaisella algoritmin tapauksen suorituskerralla mahdollisimman hyvä tulos
 * (ollaan ahneita). Näin tehdään vaikka lopputulos ei olisi välttämättä paras mahdollinen,
 * sillä parhaan mahdollisen lopputuloksen saavuttamiseksi vaadittava aika on liian pitkä.
 * Yksinkertaisella "ahneella" algoritmilla lopputulos on kuitenkin lähellä parasta mahdollista
 * (approksimaatio) ja suoritus on nopea.
 */

function setCover(stations, citiesNeeded) {
  const finalStations = new Set(); // Radioasemat jotka lopulta valitaan
  // Toistetaan niin kauan kuin citiesNeeded -setissä on alkioita
  while (citiesNeeded.size > 0) {
    let bestStation; // Sopivin eli paras radioasema joka valitaan jokaisella kierroksella
    // Uudet kaupungit jotka kierroksella tähän mennessä paras löydetty asema kattaa
    citiesCovered = new Set();
    // Käydään läpi kaikki radioasemat
    stations.forEach(function (cities, station) {
      // citiesNeeded ja cities -settien yhteiset alkiot laitetaan covered -settiin
      const covered = new Set([...citiesNeeded].filter((x) => cities.has(x)));
      // Jos covered -setti sisältää enemmän alkioita kuin citiesCovered -setti
      if (covered.size > citiesCovered.size) {
        bestStation = station; // löydettiin uusi sopivin radioasema
        // sijoitetaan covered-setin alkiot citiesCovered -settiin.
        citiesCovered = covered;
      }
    });
    // Vähennetään citiesNeeded -setistä citiesCovered -setissä olevat alkiot.
    // Kun citiesNeeded tyhjenee, silmukka päättyy.
    citiesNeeded = new Set(
      [...citiesNeeded].filter((x) => !citiesCovered.has(x))
    );
    finalStations.add(bestStation);
  }

  return finalStations;
}

// Kaupungit joiden on kaikkien oltava mukana radioasemien kuuluvuusalueilla
const citiesNeeded = new Set([
  'hel',
  'tam',
  'tur',
  'kou',
  'lah',
  'jyv',
  'vaa',
  'oul',
]);
// Radioasemat ja niiden kuuluvuusalueella olevat kaupungit (setit) ovat mapissa
const stations = new Map();
stations.set('radio1', new Set(['hel', 'tam', 'tur']));
stations.set('radio2', new Set(['kou', 'hel', 'lah']));
stations.set('radio3', new Set(['jyv', 'tam', 'vaa']));
stations.set('radio4', new Set(['tam', 'tur']));
stations.set('radio5', new Set(['vaa', 'oul']));

// finalstations sisältää pienimmän mahdollisen määrän radioasemia,
// joiden yhteinen kuuluvuusalue kattaa kaikki kaupungit
const finalStations = setCover(stations, citiesNeeded);
console.log('The final stations are: ');
console.log(finalStations);
