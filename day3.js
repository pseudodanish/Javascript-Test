
// Helo this iS Day 3 Of js Practice 

// Exercise 1 ============================

// 1)Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.

let firstName = "Danish";
let lastName = "Momin";
let country = ["India"];
let city = ["A", "h", "m", "e", "d", "a", "b", "a", "d"];
let age = 21;
let isMarried = false;
let year = 2024;

// console.log(typeof(firstName));
// console.log(typeof(lastName));
// console.log(typeof(country));
// console.log(typeof(city));
// console.log(typeof(age));
// console.log(typeof(isMarried));
// console.log(typeof(year));

// 2)Check if type of '10' is equal to 10
const num = '10'

if (num == 10) {
    // console.log("Both are Same")
}
else {
    // console.log("Both are not same");
}

// 3)Check if parseInt('9.8') is equal to 10

const num2 = parseInt('9.8')

if (num2 == 10) {
    console.log("ParseInt Works");
}
else {
    // console.log("ParseInt Doesnt Works");
}

//4) Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()

// console.log(4 > 3);
// console.log(4 >= 3);
// console.log(4 < 3);
// console.log(4 <= 3);
// console.log(4 == 4);
// console.log(4 === 4);
// console.log(4 != 4);
// console.log(4 !== 4);
// console.log(4 != '4');
// console.log(4 == '4');
// console.log(4 === '4');
// Find the length of python and jargon and make a falsy comparison statement.

const python="python";
const jargon="jargon";

let pleng=python.length;
let jleng=jargon.length;

if(pleng=jleng)
{
    // console.log("Both are the same length");
}
else {
    // console.log("Both are not Of same length");
}

/*
5)Use the Date object to do the following activities
What is the year today?
What is the month today as a number?
What is the date today?
What is the day today as a number?
What is the hours now?
What is the minutes now?
Find out the numbers of seconds elapsed from January 1, 1970 to now. */

let date=new Date();
// console.log(date.getFullYear());
// console.log(date.getMonth()+1);
// console.log(date.getDate());
// console.log(date.getDay());
// console.log(date.getHours());
// console.log(date.getMinutes());

let new_date=new Date();

let secondsEllapsed=Math.floor(new_date.getTime()/1000);
console.log(secondsEllapsed,end="");
