/*setCover on ahne algoritmi jonka tarkoituksena on hakea pienin mahdollinen määrä olemassa
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

    const finalStations = new Set(); // tähän tulevat asemat jotka lopulta valitaan
    while (citiesNeeded.size > 0) { // käydään läpi kaikki kaupungit
        let bestStation; // tähän muuttujaan paras asema joka kierroksella
        citiesCovered = new Set(); // Tähän tulevat kaupugit jotka asema kattaa
        //console.log('New round!');
        stations.forEach(function(cities, station) {
            //console.log(cities);
            // intersection eli settien yhteiset alkiot uuteen settiin
            const covered = new Set([...citiesNeeded].filter((x) => cities.has(x)));
            //console.log(covered.size + ' > ' + citiesCovered.size);
            if (covered.size > citiesCovered.size) {
                bestStation = station;
                citiesCovered = covered;
                //console.log(bestStation);
                //console.log(citiesCovered);
            }
        });
        // Difference eli vähennetään setistä toisessa setissä olevat alkiot
        // kun citiesNeeded tyhjenee, silmukka päättyy
        citiesNeeded = new Set([...citiesNeeded].filter((x) => !citiesCovered.has(x)));
        //console.log(citiesNeeded);
        finalStations.add(bestStation);
    }

    return finalStations;
}

// set on taulukon tapainen tietorakenne jossa ei voi olla identtisiä alkioita eli duplikaatteja.
// tässä ovat kaupungit joiden on kaikkien oltava asemien kuuluvuusalueella
const citiesNeeded = new Set(['hel', 'tam', 'tur', 'kou', 'lah', 'jyv', 'vaa', 'oul']);
// radioasemat ja niiden kuuluvuusalueella olevat kaupungit (setit) ovat mapissa
const stations = new Map();
stations.set('radio1', new Set(['hel', 'tam', 'tur']));
stations.set('radio2', new Set(['kou', 'hel', 'lah']));
stations.set('radio3', new Set(['jyv', 'tam', 'vaa']));
stations.set('radio4', new Set(['tam', 'tur']));
stations.set('radio5', new Set(['vaa', 'oul']));


const finalStations = setCover(stations, citiesNeeded);
console.log('The final stations are: ');
console.log(finalStations);
