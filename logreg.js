/*
 * Logistinen regressio poikkeaa lineaarisesta regressiosta siten että
 * selitettävän muuttujan arvo on todennäköisyys sille että jokin tapahtuma tapahtuu
 * asteikolla 0-1. Logistista regressiota käytetäänkin koneoppimisessa laskemaan
 * todennäköisyyttä. Logistisen regression kaava on y = 1/1+e^-(a + b*x), jossa
 * a on vakio ja b kulmakerroin kuten lineaarisessa regressiossa. Näiden arvot
 * lasketaan harjoitusdatan avulla.
 *
 * Seuraavassa esimerkissä logistisen regression harjoittaminen on tehty valmiin
 * kirjaston (js-regression) avulla. Harjoitusdatasta saadaan vakio ja kulmakerroin
 * joiden avulla voidaan laskea selitettävän muuttujan y arvoja. Harjoitusdatan määrän
 * lisääntyessä ennustus tarkentuu. Esimerkissä pyritään ennustamaan tilaako tietyn
 * ikäinen henkilö paperille painettua sanomalehteä vai ei.
 *
 * Logistisen regression kuvaaja on sigmoidinen s-kirjainta muistuttava käyrä.
 * Seuraavalla sivulla voidaan piirtää käyrä harjoitusdatan muuttujien avulla:
 * http://stats.blue/Stats_Suite/logistic_regression_calculator.html
 */
const jsregression = require('js-regression'); // js-regression -kirjastomoduuli

/*
TrainingData on on tunnettua (hatusta vedettyä) dataa siitä tilaako tietyn
ikäinen henkilö paperille painettua sanomalehteä: 0==ei, 1==kyllä.
Dataa on esimerkissä vain todella vähän. Logistinen regressio tarkentuu
kun harjoitusdata normalisoidaan. Tässä skaalaero iän ja numeroiden 0 ja 1 
välillä on kuitenkin aika pieni, joten normalisointia ei ole suoritettu.
*/
const trainingData = [
  [18, 0],
  [20, 0],
  [24, 0],
  [30, 0],
  [32, 1],
  [40, 0],
  [45, 1],
  [51, 0],
  [60, 1],
  [65, 1],
];

/* logReg -funktio tuottaa logistisen regressiomallin. Mallin tuottava algoritmi on
melko monimutkainen, joten yksinkertaistamisen vuoksi on käytetty valmista kirjastoa.
Parametrit a,l ja i vaikuttavat algoritmin tehokkuuteen: tarkkuus vs. nopeus. Niiden
arvoja säädetään riippuen datan määrästä.
*/
function logReg(a, l, i) {
  // regressio-olio logistic syntyy kirjaston algoritmilla
  const logistic = new jsregression.LogisticRegression({
    alpha: a,
    lambda: l,
    iterations: i,
  });

  /*** Harjoitetaan logistista regressiota harjoitusdatalla ***/
  const model = logistic.fit(trainingData);
  return model; // palautetaan harjoitettu malli
}
// Prediction saa parametreikseen harjoitetun mallin ja selittävän muuttujan
function prediction(model, x) {
  // console.log(model);
  /*** Harjoitetusta mallista saadaan vakio ja kulmakerroin ***/
  const a = model.theta[0]; // vakio
  const b = model.theta[1]; // kulmakerroin
  /*** Lasketaan todennäköisyys logistisen regression kaavalla ***/
  const probability = 1 / (1 + Math.exp(-(a + b * x)));
  return probability;
}

const age = 51;
const model = logReg(0.001, 0, 1000000);
const proba = prediction(model, age);

console.log(
  'Todennäköisyys sille että ' +
    age +
    ' vuoden ikäinen henkilö' +
    ' tilaa paperille painettua sanomalehteä on ' +
    proba.toFixed(2)
);
