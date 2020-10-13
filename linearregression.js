/*
 * Lineaarinen regressio on yksinkertaisin regressioalgoritmi. Se muodostuu lähinnä kaavoista
 * joilla lasketaan regressiomuuttujat; vakiotekijä, regressiosuoran kulmakerroin ja
 * luotettavuusarvo. Muuttujat lasketaan tunnetusta datasta jota koneoppimisessa
 * kertyy jatkuvasti lisää jolloin ennuste tarkentuu. Haluttu arvio eli ennuste lasketaan
 * kaavalla y = a + b*x. y:n arvo voi olla myös monesta muuttujasta riippuvainen, jolloin
 * kaava on y = a + b1*x1 + b2*x2 ... + bn*xn.
 * Seuraavassa yksinkertaisessa esimerkissä arvioidaan hauen painoa sen pituuden perusteella
 * kaavalla y = a + b*x. Tunnettua dataa on vain neljä muuttujaparia, joten arvio ei ole kovin
 * tarkka. Tosin luotettavuusarvo on suuri koska pisteet asettuvat hyvin regressiosuoralle.
 * Hauen pituuden ja painon kehitys noudattaa todellisuudessa aikuisella hauella varsin hyvin
 * lineaarista mallia, mutta monilla muilla eliöillä lineaarinen malli ei välttämättä toimi,
 * vaan tarvitaan käyrän muotoinen logaritminen tai exponentiaalinen malli.
 *
 * Regressiosuoran voi piirtää tunnetusta datasta esim. tällä web-sivulla:
 * http://stats.blue/Stats_Suite/correlation_regression_calculator.html
 */
function linearRegression(x, y) {
  const lr = {}; // Regression tulokset tulevat tähän olioon
  const n = y.length;
  let sumX = 0;
  let sumY = 0;
  let sumXy = 0;
  let sumXx = 0;
  let sumYy = 0;

  for (let i = 0; i < n; i++) {
    sumX += x[i];
    sumY += y[i];
    sumXy += x[i] * y[i];
    sumXx += x[i] * x[i];
    sumYy += y[i] * y[i];
  }
  // regressiomuuttujien laskukaavat
  lr['slope'] = (n * sumXy - sumX * sumY) / (n * sumXx - sumX * sumX);
  lr['intercept'] = (sumY - lr.slope * sumX) / n;
  lr['r2'] = Math.pow(
    (n * sumXy - sumX * sumY) /
      Math.sqrt((n * sumXx - sumX * sumX) * (n * sumYy - sumY * sumY)),
    2
  );

  return lr;
}

// Tunnettu data eli tunnettuja haukien pituus ja painoarvoja
const knownX = [75, 81, 83, 90]; // pituus cm
const knownY = [3.0, 4.1, 4.4, 5.3]; // paino kg

const lr = linearRegression(knownX, knownY);

console.log(lr.slope); // regressiokerroin on regressiosuoran kulmakerroin
console.log(lr.intercept); // vakiotekijä on y-akselin leikkauspiste
// r2-luku on regressiomallin luotettavuusarvo (0-1), suurempi on parempi.
console.log(lr.r2); // korrelatiokerroin eli r on r2:n neliöjuuri

// Mitattu hauen pituus, eli selittävä muuttuja
const measuredX = 125;

// Arvioitu hauen paino, eli selitettävä muuttuja, kaavalla y = a + b*x
const estimatedY = lr.intercept + lr.slope * measuredX;
console.log(
  measuredX +
    'cm pituisen hauen arvoitu paino on ' +
    estimatedY.toFixed(2) +
    'kg'
);
