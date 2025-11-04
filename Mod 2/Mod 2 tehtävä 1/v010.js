(function() {
  const numbers = [];
  for (let i = 0; i < 5; i++) {
    let input;
    let isValidNumber = false;
    while (!isValidNumber) {
      input = prompt(`Enter number ${i + 1} of 5:`);
      if (input === null) {
        alert("Operation cancelled by the user. No numbers were processed.");
        return;
      }

      const num = parseFloat(input);

      if (!isNaN(num)) {
        numbers.push(num);
        isValidNumber = true;
      } else {
        alert("Invalid input. Please enter a valid number.");
      }
    }
  }

  console.log("Numbers entered (original order):", numbers);
  console.log("Numbers in reverse order:");

  for (let i = numbers.length - 1; i >= 0; i--) {
    console.log(numbers[i]);
  }
})();
