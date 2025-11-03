'use strict';
        const userInput = prompt("What is your name?");
         console.log('Hello, ' + userInput + '!')
        let min = 1;
        let max = 4;
        let random = Math.floor(Math.random() * (max - min + 1)) + min;
        console.log(random)
        if(random === 1) {
            console.log(userInput, "You're Gryffindor!")
        } else if (random === 2) {
                console.log(userInput, "You're Slytherin!")
            } else if (random === 3) {
                    console.log(userInput, "You're Hufflepuff!")
                } else if (random === 4)
                    console.log(userInput, "You're Ravenclaw!")