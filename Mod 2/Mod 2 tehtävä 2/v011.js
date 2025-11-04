function getParticipantNames() {
  let numParticipants;

  do {
    numParticipants = parseInt(prompt("Enter the number of participants:"));
    if (isNaN(numParticipants)) {
      alert("Invalid input. Please enter a number.");
    } else if (numParticipants <= 0) {
      alert("Please enter a number greater than zero.");
    }
  } while (isNaN(numParticipants) || numParticipants <= 0);

  const participantNames = [];

  for (let i = 0; i < numParticipants; i++) {
    let name;
    do {
      name = prompt(`Enter the name of participant ${i + 1}:`);
      if (name === null) {
        return;
      }
      if (name.trim() === "") {
        alert("Name cannot be empty. Please enter a valid name.");
      }
    } while (name !== null && name.trim() === "");

    participantNames.push(name);
  }

  participantNames.sort();

  let listHTML = "<ol>";
  for (let i = 0; i < participantNames.length; i++) {
    listHTML += `<li>${participantNames[i]}</li>`;
  }
  listHTML += "</ol>";

  document.getElementById("participantList").innerHTML = listHTML;
}

getParticipantNames();