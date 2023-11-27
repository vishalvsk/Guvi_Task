class Person {
  constructor(firstName, lastName, age, email) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.email = email;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  getAge() {
    return this.age;
  }

  getEmail() {
    return this.email;
  }

  setFirstName(newFirstName) {
    this.firstName = newFirstName;
  }

  setLastName(newLastName) {
    this.lastName = newLastName;
  }

  setAge(newAge) {
    this.age = newAge;
  }

  setEmail(newEmail) {
    this.email = newEmail;
  }
}


const person1 = new Person("Vishal", "Karale", 25, "vishalkaralevsk@gmail.com");


console.log(person1.getFullName());
console.log(person1.getAge());
console.log(person1.getEmail()); 


person1.setFirstName("Vishal");
person1.setAge(37);


console.log(person1.getFullName()); 
console.log(person1.getAge()); 
