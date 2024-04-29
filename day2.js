
//=========================================Exercise Level 1

const challenge="30 Days Of JavaScript"

console.log(challenge);

console.log(challenge.length);

console.log(challenge.toUpperCase());

console.log(challenge.toLowerCase());

console.log(challenge.substring(0,3));

console.log(challenge.substring(3,22));

console.log(challenge.includes("Script"));

const arrayChallenge=challenge.split(" ");
console.log(arrayChallenge);

const arrayMncs='Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
console.log(arrayMncs.split(","));

console.log(challenge.replace("JavaScript","Python"));

console.log(challenge.charAt(15));

console.log(challenge.charCodeAt("J"));

console.log(challenge.indexOf("J"));

console.log(challenge.lastIndexOf("a"));

const sentence="You cannot end a sentence with because because because is a conjunction";
console.log(sentence.indexOf("because"));
console.log(sentence.lastIndexOf("because"));
console.log(sentence.search("because"));

const challengetrim=" 30 Days Of JavaScript ";
console.log(challengetrim.trim());

//=========================================Exercise Level 2

const ten="10";
const tenn=10

console.log(typeof(ten))
console.log(typeof(tenn))

let num = parseFloat('9.8');
if (num !== 10) {
  num = 10;
}
console.log(num);

const python="python";
const jargon="jargon";

console.log(python.includes("on"))
console.log(jargon.includes("on"))

const jargon2="I hope this course is not full of jargon.";
console.log(jargon2.includes("jargon"))

console.log(parseInt(Math.random(0,100)*100));

const randomNum=Math.floor(Math.random()*51)+50;
console.log(randomNum);

const random=Math.floor(Math.random()*256);
console.log(random);

const js="JavaScript";
const jsLetters=js.split("");
console.log(jsLetters);
console.log(jsLetters[3]);

const sentence="You cannot end a sentence with because because because is a conjunction";
console.log(sentence.substring(31,54));

//=========================================Exercise Level 3

const countLove='Love is the best thing in this world. Some found their love and some are still looking for their love.'
let count=0;


if(countLove.includes("love"))
{
    count+=1
}
console.log(count);

