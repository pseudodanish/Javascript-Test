
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


// Question 1_'Love is the best thing in this world. Some found their love and some are still looking for their love.' Count the number of word love in this sentence.
const countLove = 'Love is the best thing in this world. Some found their love and some are still looking for their love.'
let count = 1;
let smallSen = countLove.toLowerCase();
let words = smallSen.split(" ")
for (i = 0; i < words.length; i++) {
    if (words[i] == "love") {
        count += 1
    }
}
// console.log(countLove);
// console.log(`The number of times the words Love Appearing in the sentence is ${count}`);

// console.log();

// Question 2_Use match() to count the number of all because in the following sentence:'You cannot end a sentence with because because because is a conjunction'

let count2 = 1;
const senBecause = 'You cannot end a sentence with because because because is a conjunction';
let word = senBecause.split(" ")

for (i = 0; i < word.length; i++) {
    if (word[i] == "because") {
        count2 += 1
    }
}
// console.log(senBecause);
// console.log(`The Number of Times The Word Because appearing in the sentence above is ${count2}`);

// console.log();

// Question 3_Clean the following text and find the most frequent word (hint, use replace and regular expressions).

const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching';
const format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/g;

const result=sentence.replace(format,'')
// console.log(result);
const splitted=result.split(" ")
let wordCount={};

for (const words of splitted){
    if(wordCount[words]){
        wordCount[words]++;
    }
    else {
        wordCount[words]=1;
    }
}

let wordMax=0;
let freqWord='';

for (const words in wordCount)
{
    if(wordCount[words]>wordMax)
    {
        wordMax=wordCount[words]
        freqWord=words;
    }
}
// console.log(`The word(s) which appears more is ${freqWord} which appears with a total frequency of ${wordMax}`);
// console.log()

// Question 4_Calculate the total annual income of the person by extracting the numbers from the following text. 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'

const str="Calculate the total annual income of the person by extracting the numbers from the following text. 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'";

const strWords=str.split(" ");
// console.log(strWords);

let numList=[]
for (const num in strWords) {
   if (Number(strWords[num]))
   {
    numList.push(strWords[num])
   }
}
console.log(numList);

for (i=0;i<numList.length;i++)
{
    
}

