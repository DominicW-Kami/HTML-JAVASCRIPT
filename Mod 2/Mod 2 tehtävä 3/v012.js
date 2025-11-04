function getDogNames() {
  const dogNames = [];

  for (let i = 0; i < 6; i++) {
    let name;
    do {
      name = prompt(`Enter the name of dog ${i + 1}:`);
      if (name === null) {
        return;
      }
      if (name.trim() === "") {
        alert("Name cannot be empty. Please enter a valid name.");
      }
    } while (name !== null && name.trim() === "");

    dogNames.push(name);
  }
  dogNames.sort((a, b) => b.localeCompare(a));

  let listHTML = "<ul>";
  for (let i = 0; i < dogNames.length; i++) {
    listHTML += `<li>${dogNames[i]}</li>`;
  }
  listHTML += "</ul>";
  document.getElementById("dogList").innerHTML = listHTML;
}
getDogNames();