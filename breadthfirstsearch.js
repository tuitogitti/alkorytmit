/*
 * Breadth-first search on graph-algoritmi (kaavioalgoritmi)
 * jolla haetaan graafisesta kaaviosta läpikäytävien solmujen lukumäärällä
 * mitattuna lyhintä reittiä haun alkupisteestä haettavaan kohteeseen.
 * Tässä esimerkissä etsitään kontakteja läpi käymällä lähin kontakti
 * henkilöstä 'you' roomalaiseen henkilöön (nimi päättyy us-kirjaimiin).
 * Breadth-first search käyttää jono-tietorakennetta joka on nimensä mukaisesti
 * jono jonka alkupäästä otetaan aina uusi alkio tarkasteluun ja loppupäähän
 * lisätään uusia alkioita. Algoritmin nopeus on O(henkilöiden lkm + kontaktien lkm)
 * eli O(V+E). V = vertices ja E = edges.
 *
 * https://github.com/tuitogitti/alkorytmit/blob/master/breadthfirstsearch.js
 */

function search(name) {

    let searchQueue = []; // jono (FIFO-tietorakenne) on toteutettu taulukolla
    /* Globaali graph-muuttuja näkyy JS:ssä suoraan funktion sisälle.
    Jos muunnat tämän koodin toiselle kielelle, se ei välttämättä näy
    funktion sisään, vaan se pitää tuoda sisään funktion argumenttina */
    searchQueue = searchQueue.concat(graph.get(name));
    // console.log(searchQueue);
    // jo haetut henkilöt tallennetaan taulukkoon, samaa ei haeta kahdesti
    let searched = [];

    while (searchQueue.length > 0) {
        let person = searchQueue[0]; // otetaan ulos 'vanhin' alkio
        // console.log(person);
        searchQueue = searchQueue.slice(1, searchQueue.length);
        // console.log(searchQueue);
        if (!searched.includes(person)) {
            if (personIsRoman(person)) {
                console.log(person + ' is first roman!');
                return true;
            } else {
                console.log('Search goes through ' + person);
                searchQueue = searchQueue.concat(graph.get(person));
                searched.push(person);
            }
        }
    }
}

// graph on kaavio joka on tehty Map-tietorakenteeseen
let graph = new Map();
graph.set('you', ['Asterix', 'Senilix', 'Amaryllix']); // omat kontaktit
graph.set('Asterix', ['Obelix', 'Aladobix', 'Akvavitix']); // Asterixin kontaktit
graph.set('Senilix', ['Trubadurix', 'Historix']); // Senilixin kontaktit
graph.set('Amaryllix', ['Aladobix', 'Comix']); // Amaryllixin kontaktit
graph.set('Akvavitix', ['Aladobix', 'Trajanus']); // Akvavitixin kontaktit
graph.set('Obelix', ['Asterix', 'Idefix']); // Obelixin kontaktit
graph.set('Aladobix', ['Asterix', 'Maximus']); // Aladobixin kontaktit

// Tutkitaan onko henkilö roomalainen
function personIsRoman(name) {
    if (name.slice(name.length - 2) === 'us') {
        return true;
    } else {
        return false;
    }
}

// console.log(personIsRoman('Justus'));

search('you'); // Maximus
// search('Akvavitix'); // Trajanus
