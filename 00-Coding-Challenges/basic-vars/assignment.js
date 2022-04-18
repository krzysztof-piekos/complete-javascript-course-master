let heightMark = 1.69;
let heightJohn = 1.95;
let weightMark = 78;
let weightJohn = 92;

let heightMark2 = 1.88;
let heightJohn2 = 1.76;
let weightMark2 = 95;
let weightJohn2 = 85;

function bmiCalculate(weight, height) {
  let bmi = weight / height ** 2;
  return bmi.toFixed(2);
}

function isBmiMarkHigher(bmiMarkInput, bmiJohnInput) {
  return bmiMarkInput > bmiJohnInput;
}

let mass = weightMark;
let height = heightMark;
let bmi = mass / height ** 2;
let bmiMark = bmiCalculate(weightMark, heightMark);
let bmiMark2 = bmiCalculate(weightMark2, heightMark2);
let bmiJohn = bmiCalculate(weightJohn, heightJohn);
let bmiJohn2 = bmiCalculate(weightJohn2, heightJohn2);

console.log("start");
console.log("BMI calc function mark 1 = " + bmiMark);
console.log("BMI calc function john 1 = " + bmiJohn);

console.log("BMI calc function mark 2 = " + bmiMark2);
console.log("BMI calc function john 2 = " + bmiJohn2);

console.log("Data 1 is mark bmi higher?: " + isBmiMarkHigher(bmiMark, bmiJohn));
console.log(
  "Data 2 is mark bmi higher?: " + isBmiMarkHigher(bmiMark2, bmiJohn2)
);
