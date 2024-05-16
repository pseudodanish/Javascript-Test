
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


// Exercise 2 ============================

// 1)Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <button onclick=area()>Click ME</button>
</body>
<script>
    function area() {
        let base = prompt("Enter base of triangle :");
        let height = prompt("Enter height of triangle :");

        let area = 0.5 * base * height;
        document.write(area);
    }
</script>

</html>

//2)
//  Calculate the slope, x-intercept and y-intercept of y = 2x-2
let m=2;
let c=-2;
let x_intercept=-c/m;
let y_intercept=(m*x_intercept)+c;

console.log(`The Slope is ${m} whereas the x-intercept is ${x_intercept} while the y_intercept is ${y_intercept}`);

// 3))// Calculate the value of y (y = x2 + 6x + 9). Try to use different x values and figure out at what x value y is 0.
let n=1000;
let x=0;
while(x<=0)
    {
        x--;
        y=(x*x)+(6*x)+9;

        if(y==0)
            {
                console.log(`At ${x} the value of y is 0`);
                break;
            }
    }


    

// Exercise 3 ============================
// 1)Create a human readable time format using the Date time object. The hour and the minute should be all the time two digits(7 hours should be 07 and 5 minutes should be 05 )
// YYY-MM-DD HH:mm eg. 20120-01-02 07:05

let dat=new Date();
let min=dat.getMinutes();
let hrs=dat.getHours();
if(min<10 || hrs<10)
    {
        if (min<10){
            min="0"+min;
        }
        if (hrs<10){
            hrs="0"+hrs;
        }
    }
console.log(dat.getTime());
console.log(`${dat.getDate()}/${dat.getMonth() + 1}/${dat.getFullYear()} ${hrs}:${min}`)
