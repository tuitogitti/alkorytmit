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
 * muutama kaupunki ja niiden etäisyydet muihin kaupunkeihin.
 *
 * https://github.com/tuitogitti/alkorytmit/blob/master/greedyalgorithmexc.js
 */
