/*
 * Dijkstran algoritmi on graph-algoritmi (kaavioalgoritmi)
 * jolla haetaan graafisesta kaaviosta hakukohteita ja nopeinta reittiä
 * haun alkupisteestä haettavaan kohteeseen. Se eroaa Breadth-first searchista
 * siten että kaavio on painotettu (weighted). Kohteiden väliset suhteet eivät
 * ole samanarvoisia vaan algoritmi ottaa suhteiden väliset erot (esim. reitin
 * vaatiman matka-ajan) huomioon.
 *
 * Seuraavassa etsitään nopein reitti kaaviosta Dijkstran algoritmilla.
 * Algoritmi tarvitsee kolme mappia jotka ovat graph(esittää kaavion),
 * costs(esittää reittien pituudet) ja parents (esittää solmujen(node)
 * edeltävät solmut) sekä yhden taulukon processed(tallentaa käsitellyt
 * solmut). Tarvitaan myös apufunktio (findLowestCostNode), jonka avulla
 * etsitään aina se solmu jonne matka on lyhin.
 */

/********************Graph*******************************/

let graph = new Map();
let startgraph = new Map();
let agraph = new Map();
let bgraph = new Map();

graph.set('start', startgraph); //aloitussolmu. Sen naapurit on esitetty startgraphissa
startgraph.set('a', 6); //etäisyys lähdöstä a:han
startgraph.set('b', 2); //etäisyys lähdöstä b:hen
graph.set('a', agraph); // a-solmu ja sen naapurit
agraph.set('finish', 1); //etäisyys a:sta maaliin
graph.set('b', bgraph); // B-solmu ja sen naapurit
bgraph.set('a', 3); //etäisyys b:stä a:han
bgraph.set('finish', 5); //etäisyys b:stä maaliin

/********************Costs*******************************/

let costs = new Map();
costs.set('a', 6);
costs.set('b', 2);
costs.set('finish', Infinity); //ei vielä tiedossa, siksi ääretön

/********************Parents*******************************/

let parents = new Map();
parents.set('a', 'start');
parents.set('b', 'start');
parents.set('finish', undefined); //ei vielä tiedossa, siksi määrittelemätön

/*********************Processed**************************/

let processed = [];

/*********************findLowestCostNode**************************/

function findLowestCostNode(costs) {
    lowestCost = Infinity;
    lowestCostNode = false; // alkutilanne

    costs.forEach(function(cost, node) {
        if (cost < lowestCost && !processed.includes(node)) {
            lowestCost = cost;
            lowestCostNode = node;
        }
    });
    return lowestCostNode;
}

/*********************fastestRouteNodes**************************/

function fastestRouteNodes(parents) {
    lastnode = parents.get('finish'); // aluksi a
    let route = 'finish'; // routen alkutila
    let i = 0;
    while (i < parents.size && typeof lastnode !== 'undefined') {
        route = lastnode + ' -> ' + route; // reitin kasvatus
        lastnode = parents.get(lastnode); // uusi lastnode, ekalla kierroksella tulee b
        //console.log(lastnode);
        i++;
    }
    return route;
}

console.log(findLowestCostNode(costs)); // aluksi b jonka cost on 2

let node = findLowestCostNode(costs); // etsitään node jonne reitti lyhin
while (node !== 'finish') { // niin kauan kuin node ei ole finish (kaikki käyty läpi)
    cost = costs.get(node);
    console.log(cost); // aluksi b ja cost 2
    neighbours = graph.get(node);
    console.log(neighbours); // Map { 'a' => 3, 'finish' => 5 }
    neighbours.forEach(function(ncost, nnode) { // käydään läpi neighbours
        console.log(nnode); // a
        let newCost = cost + ncost;
        console.log(newCost); // 2+3 = 5
        if (costs.get(nnode) > newCost) { // jos 6 > 5
            costs.set(nnode, newCost); // päivitetään costs -mappiin a:n arvoksi 5
            console.log(costs); // Map { 'a' => 5, 'b' => 2, 'finish' => Infinity }
            parents.set(nnode, node); // päivitetään parents -map
            console.log(parents); // Map { 'a' => 'b', 'b' => 'start', 'finish' => undefined }
        }
    });
    processed.push(node); // node laitetaan processed-taulukkoon
    console.log(processed); // [ 'b' ]
    node = findLowestCostNode(costs);
    console.log('lowest cost node is now: ' + node);
}

console.log('The fastest route is ' + costs.get('finish') + ' steps long');
console.log('The fastest route is: ' + fastestRouteNodes(parents));
