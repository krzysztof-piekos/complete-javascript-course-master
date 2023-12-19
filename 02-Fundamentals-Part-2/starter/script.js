const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

const years = new Array(1991, 1984, 2008, 2020);
console.log('friends LOGGING');
console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
let popularFirstNames = ['Liam', 'Emma', 'Oliver', 'Ava', 'Sophia', 'Oliver Two'];
  
function searchNames(partialText) {
    return popularFirstNames.filter(name => name.includes(partialText));
}

// Usage: this will return [ 'Oliver' ]
console.log(searchNames('Oli')); 
console.log(searchNames('Av')); 
friends[2] = 'Jay';
console.log(friends);
console.log(years.sort());
console.log(years.sort((a,b) => b-a));

const jonas =['Jonas', 'Schuman', 2037-1991, 'teacher', friends];

console.log(jonas);
const calcAge  = function(birthYear) {
    return 2037 - birthYear;
}

const age1 = calcAge(years[0]);
friends.push('Jay');
const newLength= friends.push('Kris 2');
console.log(friends);
console.log('New length='+ newLength);
friends.unshift('John 1');
console.log(friends);
const poped=friends.pop();
console.log(friends);
console.log(poped);