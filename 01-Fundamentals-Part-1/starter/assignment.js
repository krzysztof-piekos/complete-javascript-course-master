let country = "Poland";
let continent = "Europe";
let myName = "Jonas";
let language = "Polish";
let population = 38;
let isIsland = false;
let children; //empty value undefined
console.log("Country=" + country);
console.log("Continent=" + continent);
console.log("Population=" + population);

console.log("Variabl types");

console.log("country type=" + typeof country);
console.log("population type=" + typeof population);
console.log("Continent type=" + typeof continent);
console.log("IsIsland tyrrrrrpe=" + typeof isIsland);
console.log("myName rrrrtype=" + typeof myName);
console.log(true);

continent = 1000;
console.log("Continent type=" + typeof continent);
let year;
console.log(year);
console.log(typeof year);
let finlandPop = 6;
population += 1;
const populationHalf = population / 2;
let whichCountryMore = finlandPop > population;
console.log("finPop > mine: " + whichCountryMore);
console.log("pop half=" + populationHalf);

let description =
  country +
  " is in Europe, and its " +
  population +
  " million people speak " +
  language;

console.log(description);
let x1, y1;
x1 = y1 = 25 - 10 - 5;
console.log(x1, y1);

let withTemplate = `My country is ${country} and population is ${population} milions`;
let withTemplate2 = `My country is ${country} and population is ${
  population - 10
} milions`;
console.log(withTemplate);
console.log(withTemplate2);
console.log("Strung with ne wline \nline 2 \nline 3 test abc");
console.log(`new line in backticks
new 2nd line
3rd line`);
