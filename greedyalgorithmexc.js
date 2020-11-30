/*
 * Kauppamatkustajan ongelma on lyhimmän reitin valinta kun pitää käydä kaikissa
 * kaupungeisssa joita on n kpl. Se on ehkäpä kuuluisin NP-täydellinen ongelma jonka
 * ratkaisunopeus pyrittäessä täydelliseen ratkaisuun on O(n!). Jos läpikäytäviä
 * kohteita on vaikkapa sata, nousee erilaisten ratkaisuvaihtoehtojen määrä
 * niin suureksi ettei kaikkien läpikäyminen ole mahdollista eikä järkevää.
 * Varsin hyvään tulokseen voidaan päästä yksinkertaisella "ahneella" algoritmilla.
 * Valitaan aloituskohde satunnaisesti ja käydään kaikki kohteet läpi siten että
 * mennään aina seuraavaan lähimpään kohteeseen. Näin löydetään järkevällä
 * tarkkuudella lyhin reitti joka kulkee kaikkien kohteiden kautta.
 * Kokeile toteuttaa tämä algoritmi.
 *
 * https://github.com/tuitogitti/alkorytmit/blob/master/greedyalgorithmexc.js
 */

const cities = new Map();

function makeRoute(cities, start) {
  const route = [];

  /*
    1) Valitaan aloituskaupunki cities mapista
    2) Valitaan lyhin reitti seuraavaan kaupunkiin ja laitetaan valittu kaupunki route -taulukkoon
    3) Mennään cities-mapissa edellä valitun kaupungin kohdalle ja valitaan taas lyhin reitti
    seuraavaan kaupunkiin joka ei jo ole route -taulukossa.
    4) Tätä toistetaan niin kauan kunnes kaikki kaupungit on käyty läpi

    Tämä ratkaisu toimii jos kaupunkeja on vain muutama, mutta jos kaupunkeja on vaikkapa sata
    kappaletta, kasvaa cities -map turhan suureksi. Olisiko jokin toinen tietorakenne silloin parempi?
    Mitä ajattelisit sellaisesta ratkaisusta, että valitaan kerrallaan vaikkapa viisi lähintä kaupunkia 
    ja lasketaan lyhin reitti jolla ne voidaan käydä läpi ja siirrytään seuraaviin viiteen kaupunkiin jne...?
    */
  return route;
}

cities.set(
  'Jkl',
  new Map([
    ['Hel', 300],
    ['Tam', 150],
    ['Kuo', 130],
  ])
);
cities.set(
  'Kuo',
  new Map([
    ['Hel', 400],
    ['Tam', 280],
    ['Jkl', 130],
  ])
);

console.log(cities.get('Jkl'));
