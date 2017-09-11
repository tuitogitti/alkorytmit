
/*
 * Greedy algorithm tarkoittaa algoritmia, joka perustuu siihen että pyritään saavuttamaan
 * jokaisella algoritmin tapauksen suorituskerralla mahdollisimman hyvä tulos (ollaan ahneita).
 * Näin tehdään vaikka lopputulos ei olisi välttämättä paras mahdollinen. Näin siksi
 * että parhaan mahdollisen lopputuloksen saavuttamiseksi vaadittava aika on liian pitkä.
 * Yksinkertaisella "ahneella" algoritmilla lopputulos on kuitenkin lähellä parasta mahdollista
 * ja suoritus on nopea.
 * Seuraavassa pyritään löytämään mahdollisimman pieni määrä radioasemia jotka kattavat
 * kaikki vaadittavat kaupungit (set-cover -ongelma). Tämä tehdään ahneella algoritmilla
 * valitsemalla aina uusi asema joka kattaa mahdollisimman monta vapaata vaadittavaa kaupunkia.
 * Tämän ratkaisun nopeus on O(n*n) joten se on paljon nopeampi kuin täydellinen ratkaisu
 * jonka nopeus olisi O(n!). Ongelma joka on nopeillekin koneille liian hidas ratkaista kun
 * kaikki kombinaatiot on käytävä läpi on ns. "NP-complete" (Nondeterministic Polynomial time).
 * NP-täydellinen ongelma kannattaa ratkaista approksimaatiolla johon "ahne" algoritmi sopii hyvin.
 */

function chooseBestStations(stations, citiesNeeded) {

    let finalStations = new Set(); // tähän tulevat asemat jotka lopulta valitaan
    let i = 0;
    while (citiesNeeded.size > 0) { // käydään läpi kaikki kaupungit
        let bestStation; // tähän muuttujaan paras asema joka kierroksella
        citiesCovered = new Set(); // Tähän tulevat kaupugit jotka asema kattaa
        //console.log('New round!');
        stations.forEach(function(cities, station) {
            //console.log(cities);
            // intersection eli settien yhteiset alkiot uuteen settiin
            let covered = new Set([...citiesNeeded].filter(x => cities.has(x)));
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
        citiesNeeded = new Set([...citiesNeeded].filter(x => !citiesCovered.has(x)));
        //console.log(citiesNeeded);
        finalStations.add(bestStation);
    }

    return finalStations;
}

// set on taulukko jossa ei voi olla identtisiä alkioita eli duplikaatteja.
// tässä ovat kaupungit joiden on kaikkien oltava asemien kuuluvuusalueella
let citiesNeeded = new Set(['hel', 'tam', 'tur', 'kou', 'lah', 'jyv', 'vaa', 'oul']);
// radioasemat ja niiden kuuluvuusalueella olevat kaupungit (setit) ovat mapissa
let stations = new Map();
stations.set('radio1', new Set(['hel', 'tam', 'tur']));
stations.set('radio2', new Set(['kou', 'hel', 'lah']));
stations.set('radio3', new Set(['jyv', 'tam', 'vaa']));
stations.set('radio4', new Set(['tam', 'tur']));
stations.set('radio5', new Set(['vaa', 'oul']));


let finalStations = chooseBestStations(stations, citiesNeeded);
console.log('The final stations are: ');
console.log(finalStations);
