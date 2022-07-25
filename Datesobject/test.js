var birthday = new Date(1995, 02, 16, 11, 15, 25);
var birthday2 = new Date(1995, 02, 16, 11, 15, 25);
//get the month of the date (0 - 11)
console.log(birthday.getMonth());

//get the full Year (YYYY)
console.log(birthday.getFullYear());

//get the  date of the month (1 - 31)
console.log(birthday.getDate());

//get the  day of the week (0 - 6)
console.log(birthday.getDay());

//get the hour of the date (0 - 23)
console.log(birthday.getHours());

//get the numbrer of miliseconds since 1st jan 1970 (0 - 11)
console.log(birthday.getTime());

if (birthday.getTime() == birthday2.getTime()) {
  console.log("birthdays are equal");
} else {
  console.log("birthdays are not equal");
}
