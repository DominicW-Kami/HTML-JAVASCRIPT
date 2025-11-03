        'use strict';
        const num1 = prompt("1st Number: ");
        const Inum1 = parseInt(num1)
        const num2 = prompt("2nd Number: ");
        const Inum2 = parseInt(num2)
        const num3 = prompt("3rd Number: ");
        const Inum3 = parseInt(num3)

        const sum = Inum1 + Inum2 + Inum3
        const avg = sum/3;
        console.log(`Numbers sum is: ${sum} and the average is: ${avg}, Numbers were ${Inum1}, ${Inum2}, ${Inum3}.`);