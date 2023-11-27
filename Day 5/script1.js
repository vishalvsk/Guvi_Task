const jsonData = {
  name: "Vishal karale",
  age: 30,
  email: "vishalkaralevsk@example.com",
  address: {
    street: "123 Main St",
    city: "Ramling Road",
    country: "India",
  },
  skills: ["JavaScript", "HTML", "CSS"],
};

//  for in loop -

for (let key in jsonData) {
  console.log(`${key}: ${jsonData[key]}`);
}


//  for of loop -

for (let value of Object.values(jsonData)) {
  console.log(value);
}


//  forEach loop -

jsonData.skills.forEach((skill) => {
  console.log(skill);
});


