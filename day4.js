// Day 4 Of learning and practising js

// Exercise 1 ========================
// Exercise 2 ========================
// Above both exercises were simple if statement problems which is easy so i skipped them 

// Exercise 3 ========================

// 1)Write a program which tells the number of days in a month.
//   Enter a month: January
//   January has 31 days.

//   Enter a month: JANUARY
//   January has 31 day

//   Enter a month: February
//   February has 28 days.

//   Enter a month: FEbruary
//   February has 28 days.

// let month = prompt("Enter The Name Of the Month : ");

if (month.toLowerCase() == "january") {
  console.log(`${month} has 31 Days`);
} else if (month.toLowerCase() == "february") {
  console.log(`${month} has 28 Days and the year is not a leap year`);
} else if (month.toLowerCase() == "march") {
  console.log(`${month} has 31 Days`);
} else if (month.toLowerCase() == "april") {
  console.log(`${month} has 30 Days`);
} else if (month.toLowerCase() == "may") {
  console.log(`${month} has 31 Days`);
} else if (month.toLowerCase() == "june") {
  console.log(`${month} has 30 Days`);
} else if (month.toLowerCase() == "july") {
  console.log(`${month} has 31 Days`);
} else if (month.toLowerCase() == "august") {
  console.log(`${month} has 31 Days`);
} else if (month.toLowerCase() == "september") {
  console.log(`${month} has 30 Days`);
} else if (month.toLowerCase() == "october") {
  console.log(`${month} has 31 Days`);
} else if (month.toLowerCase() == "november") {
  console.log(`${month} has 30 Days`);
} else if (month.toLowerCase() == "december") {
  console.log(`${month} has 31 Days`);
}
else {
  console.log("Enter Valid Month")
}


// 2)Write a program which tells the number of days in a month, now consider leap year.


