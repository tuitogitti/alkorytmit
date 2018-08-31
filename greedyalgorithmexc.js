/*
 * Kauppamatkustajan ongelma on lyhimmän reitin valinta kun pitää käydä hyvin monissa
 * eri kaupungeissa. Se on ehkäpä kuuluisin NP-täydellinen ongelma jonka
 * ratkaisunopeus pyrittäessä täydelliseen ratkaisuun on O(n!). Jos läpikäytäviä
 * kohteita on vaikkapa sata, nousee erilaisten ratkaisuvaihtoehtojen määrä
 * niin suureksi ettei kaikkien läpikäyminen ole mahdollista eikä järkevää.
 * Varsin hyvään tulokseen voidaan päästä yksinkertaisella "ahneella" algoritmilla.
 * Valitaan aloituskohde satunnaisesti ja käydään kaikki kohteet läpi siten että
 * mennään aina seuraavaan lähimpään kohteeseen. Näin löydetään järkevällä
 * tarkkuudella lyhin reitti joka kulkee kaikkien kohteiden kautta.
 * Kokeile toteuttaa tämä algoritmi. Tehdään ensin Map-tietorakenne johon tallennetaan
 * muutama kaupunki ja niiden etäisyydet muihin kaupunkeihin. Sitten tehdään funktio
 * jossa luodaan reitti Set -tietorakenteeseen.
 *
 * https://github.com/tuitogitti/alkorytmit/blob/master/greedyalgorithmexc.js
 */

let cities = new Map();

cities.set('Jkl', new Map([['Hel', 300], ['Tam', 150], ['Kuo', 130]]));

console.log(cities.get('Jkl'));
