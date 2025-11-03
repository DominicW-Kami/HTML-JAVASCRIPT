'use strict';
const year = prompt("Enter a year: ")
const Iyear = parseInt(year)
if ((Iyear % 4 === 0 && Iyear % 100 !== 0) || year % 400 === 0) {
    console.log(`${year} is a leap year!`);
} else {
    console.log(`${year} is not a leap year!`)
}
