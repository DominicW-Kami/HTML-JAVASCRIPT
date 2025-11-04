function getNumbersAndSort() {
  const numbers = [];
  let input;
  do {
    input = prompt("Enter a number (enter 0 to finish):");

    if (input === null) {
      console.log("Operation cancelled by the user. No numbers were processed.");
      return;
    }

    const num = parseFloat(input);

    if (!isNaN(num)) {
      if (num !== 0) {
        numbers.push(num);
      }
    } else {
      alert("Invalid input. Please enter a valid number.");
    }
  } while (input !== "0");
  numbers.sort((a, b) => b - a);
  console.log("Numbers from largest to smallest:");
  for (const number of numbers) {
    console.log(number);
  }
}
getNumbersAndSort();
