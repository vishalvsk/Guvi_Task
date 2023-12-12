document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();

  const firstName = document.getElementById("first-name").value;
  const lastName = document.getElementById("last-name").value;
  const address = document.getElementById("address").value;
  const pincode = document.getElementById("pincode").value;
  const gender1 = document.getElementById("male").value;
  const gender2 = document.getElementById("female").value;
  const gender3 = document.getElementById("other").value;
  const state = document.getElementById("state").value;
  const country = document.getElementById("country").value;

  const tableBody = document.getElementById("tableBody");
  const newRow = tableBody.insertRow();

  const cell1 = newRow.insertCell(0);
  const cell2 = newRow.insertCell(1);
  const cell3 = newRow.insertCell(2);
  const cell4 = newRow.insertCell(3);
  const cell5 = newRow.insertCell(4);
  const cell6 = newRow.insertCell(5);
  const cell7 = newRow.insertCell(6);
  const cell8 = newRow.insertCell(7);
  const cell9 = newRow.insertCell(8);

  cell1.innerHTML = firstName;
  cell2.innerHTML = lastName;
  cell3.innerHTML = address;
  cell4.innerHTML = pincode;
  cell5.innerHTML = gender1;
  cell5.innerHTML = gender2;
  cell5.innerHTML = gender3;
  cell6.innerHTML = state;
  cell7.innerHTML = country;

  document.getElementById("form").reset();
});
