let country = "Poland";
let continent = "Europe";
let myName = "Jonas";
const inputYear = "1991";

const age = 15;
if (age >= 18) {
  console.log("Sarah can start driving licence");
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young Wait another ${yearsLeft} years :)`);
}

// Type coertion and convertion
console.log(Number(inputYear), inputYear);
console.log(inputYear + 10);
console.log(Number(inputYear) + 10);
console.log(Number("Jonas"));
console.log(String("Jonas"));
console.log(typeof NaN);
console.log(String(23), 23);
console.log("I am " + 23 + " years old");
console.log("I am " + "23" + " years old");
console.log("23" - 10 - "3"); // with minus -> String -> Numbers
console.log("23" - "3");
console.log("23" + 10 + "3"); //with plus numbers are converted to strings, * and / are converting to Numbers
console.log("23" + 10 + "3" - 5);
console.log("23" + 10 + "3" - "5" + "2");
console.log("23" / "2");
let n = 1 + "1"; // '11'
n = n - 1;
console.log(n);

//Truthy and falsy values
//falsy:  0 , '', undefined, null, NaN
console.log("Truthy , falsy");
console.log(Boolean(0));
console.log(Boolean(1));
console.log(Boolean(2));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(""));
console.log(Boolean(" "));
console.log(Boolean(""));
console.log(Boolean("AAA"));
console.log(Boolean({}));
const money = 0;
if (money) {
  console.log("Dont spent it all");
} else {
  console.log("you sould get job");
}
let height;
height = 22 + 2;
if (height) {
  console.log("Yes it is defined " + height + false);
} else {
  console.log("Yes it is NOT  defined " + height);
}

//Equality operators

const age1 = 18;
console.log("age1 is type of:" + typeof age1);

if (age1 === 18) console.log("You just got adult - (STRICT)");

if (age1 == "18") console.log("You just got adult - (LOOSE)");

const fav = Number(prompt("Whats your fav number"));
console.log(fav);
console.log(typeof fav);
if (fav === 23) {
  console.log("Cool you selected 23");
} else if (fav === 7) {
  console.log("7 is also a cool number");
} else if (fav === 8) {
  console.log("8 is also a cool number");
} else {
  console.log("Number is neither 23 nor 7");
}

if (fav !== 23) console.log("Why not 23 !==");
if (fav != 23) console.log("Why not 23 !=");
