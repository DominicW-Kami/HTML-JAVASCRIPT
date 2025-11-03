'use strict';
if (confirm("Should I calculate the square root?")) {
    let number = prompt("Enter a number: ");
    if (number !== null) {
        number = parseFloat(number);

        if (!isNaN(number) && number >= 0) {
            const sqroot = Math.sqrt(number);
            alert(`The square root of ${number} is ${sqroot}`);
        } else if (number < 0) {
            alert('The number cannot be negative.')
        } else {
            alert('No correct input')
        }
    }
} else {
    alert('The square root is not calculated.')
}