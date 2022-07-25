console.log("hello world");

let name = "rak";
console.log(name);

//cnnot be a reserved keywords
//should be meaningful
//cannot start with a number(lname)
//cannot contain a space or hyphen(-)
//are case-sensitive

let interestRate = 0.3;
interestRate = 1;
console.log(interestRate);

let age = 30;
let isApproved = false;
let firstName = null;
let selectedColor = null;

let person = {
  name: "ram",
  age: 30,
};

//dot notation
person.name = "john";

//bracket notation
let selection = "name";
person["name"] = "ram";

console.log(person.name);

let selectedColors = ["red", "blue"];
selectedColors[2] = "green";
console.log(selectedColors[2]);
