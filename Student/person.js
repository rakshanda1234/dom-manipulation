class Person {
  constructor(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
  }
  getBirthYear() {
    return this.dob.getFullYear();
  }
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

//instantiate object
const person1 = new Person("john", "cena", "6-2-1997");

const person2 = new Person("raj", "rao", "7-3-1996");

console.log(person2.dob.getFullYear());
console.log(person1);
