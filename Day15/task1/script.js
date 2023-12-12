document.getElementById("myForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const address = document.getElementById("address").value;
  const pincode = document.getElementById("pincode").value;
  const gender = document.getElementById("gender").value;
  const state = document.getElementById("state").value;
  const country = document.getElementById("country").value;

  console.log("First Name:", firstName);
  console.log("Last Name:", lastName);
  console.log("Address:", address);
  console.log("Pincode:", pincode);
  console.log("Gender:", gender);
  console.log("State:", state);
  console.log("Country:", country);
});
