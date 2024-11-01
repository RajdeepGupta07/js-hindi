const name = "Rajdeep";
const repoCount = 50;

// console.log(name + repoCount + "Value ");

console.log(`Hello my name is ${name} and my repocount if ${repoCount}`);

const gameName = new String("hitesh-hc-com");

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf("t"));

const newString = gameName.substring(0, 4);
console.log(newString);

const anotherString = gameName.slice(-8, 4);
console.log(anotherString);

const newString1="   Rajdeep    "
console.log(newString1);
console.log(newString1.trim());

const url="https://hitesh.com/hitsh%20choundary"



console.log(url.replace('%20','-'));

console.log(url.includes('hi'))

console.log(gameName.split('-'));

