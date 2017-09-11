/* Tämä ei ole algoritmi, vaan esimerkki hash tablesta
 * eli Mapista eli assosiatiivisesta taulukosta. ES6:ssa voi luoda
 * Map-tietorakenteen jota käytetään monissa algoritmeissa.
 * Tässä tutkitaan Mapin avulla onko henkilö äänestänyt ja
 * Toisessa esimerkissä esitetään kuinka välimuisti(cache)
 * voi käyttää Map-tietorakennetta.
 */

 /*****************Äänestysesimerkki***********************/

let voted = new Map(); // äänestäneet säilytetään Mapissa

function checkVoter(name) {
    if (voted.get(name)) { // jos namen arvona on true
        console.log('Not allowed to vote again!');
    } else {
        voted.set(name, true); // merkataan namen arvoksi true
        console.log('Allowed to vote');
    }
}

checkVoter('Tommi');
checkVoter('Tommi');
checkVoter('Yommi');
console.log('\n');

/*****************Cache käyttää Mappia***********************/

let cache = new Map(); // cachen data säilytetään Mapissa

function getDataFromServer(url) {
    console.log('Data comes from server!');
    return 'This is the data!';
}

function getPage(url) {
    if (cache.get(url)) { // jos url sisältää dataa
        console.log('Data comes from cache!');
        return cache.get(url); // palautetaan data cachesta
    } else {
        let data = getDataFromServer(url); // haetaan data serveriltä
        cache.set(url, data); // laitetaan data cacheen seuraava hakua varten
        return data;
    }
}

console.log(getPage('www.sivu.fi'));
console.log(getPage('www.toinensivu.fi'));
console.log(getPage('www.sivu.fi'));
