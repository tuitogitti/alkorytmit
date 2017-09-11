
/*
 * Kauppamatkustajan ongelma on ehkäpä kuuluisin NP-täydellinen ongelma jonka
 * ratkaisunopeus pyrittäessä täydelliseen ratkaisuun on O(n!). Jos läpikäytäviä
 * kohteita on vaikkapa sata, nousee erilaisten ratkaisuvaihtoehtojen määrä
 * niin suureksi ettei kaikkien läpikäyminen ole mahdollista eikä järkevää.
 * Varsin hyvään tulokseen voidaan päästä yksinkertaisella "ahneella" algoritmilla.
 * Valitaan aloituskohde satunnaisesti ja käydään kaikki kohteet läpi siten että
 * mennään aina seuraavaan lähimpään kohteeseen. Näin etsitään nopein reitti
 * joka kulkee kaikkien kohteiden kautta.
 * Kokeile toteuttaa tämä algoritmi. Tee ensin Map-tietorakenne johon tallennat
 * muutaman kaupungin ja niiden etäisyydet muihin kaupunkeihin.
 *
 */
