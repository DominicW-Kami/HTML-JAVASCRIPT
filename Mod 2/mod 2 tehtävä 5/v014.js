function getUniqueNumbers() {
  const numbers = [];
  let input;

  while (true) {
    input = prompt("Enter a number:");
    if (input === null) {
      console.log("Operation cancelled by the user. No numbers were processed.");
      return;
    }

    const num = parseFloat(input);

    if (isNaN(num)) {
      alert("Invalid input. Please enter a valid number.");
      continue;
    }

    if (numbers.includes(num)) {
      alert("This number has already been entered.");
      break;
    }

    numbers.push(num);
  }
  numbers.sort((a, b) => a - b);
  console.log("Numbers entered (in ascending order):");
  for (const number of numbers) {
    console.log(number);
  }
}
getUniqueNumbers();
