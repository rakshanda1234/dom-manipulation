"use strict";

class User {
  static count = 0;
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
    User.count++;
  }

  static countUsers() {
    console.log("There are 50 users");
  }

  printNumberOfUsers() {
    console.log("Number of users registerd = " + User.count);
  }

  register() {
    console.log(this.username + " is now registerd");
  }

  registeredUsers() {
    console.log("Number of registered Users =" + User.count);
  }
}

const Raj = new User("Raj Wankhade", "raj@gmail.com", "pass1222");
const Chetan = new User("Chetan Gole", "chetan@gmail.com", "1272");
const Raksha = new User("Raksha Wankhade", "raksha@gmail.com", "pass65222");

//let bob = new User("bob", "bob@email.com", "12345");
//bob.register();

User.countUsers();
Raj.printNumberOfUsers();
Raksha.registeredUsers();

class Member extends User {
  constructor(username, email, password, memberpackage) {
    super(username, email, password);
    this.package = memberpackage;
    let todaysDate = new Date();
    const membershipactivetillYear = todaysDate.getFullYear();
    const membershipactivetillMonth = todaysDate.getMonth();
    const membershipactivetillDay = todaysDate.getDay();

    this.membershipactivetilldate = new Date(
      membershipactivetillYear,
      membershipactivetillMonth,
      membershipactivetillDay
    );
  }

  renewMembership() {
    const membershipactivetillYear =
      this.membershipactivetilldate.getFullYear();
    const membershipactivetillMonth = this.membershipactivetilldate.getMonth();
    const membershipactivetillDay = this.membershipactivetilldate.getDay();

    this.membershipactivetilldate = new Date(
      membershipactivetillYear, //just increse the year by 1
      membershipactivetillMonth + 1, //just increase the month by 1
      membershipactivetillDay
    );
  }

  subscriptionActiveTill() {
    console.log(
      this.username +
        " this.subscribe to " +
        this.package +
        " uptill " +
        this.membershipactivetilldate
    );
  }

  getPackage() {
    console.log(
      this.username + " is subscribed to the " + this.package + " package"
    );
  }
}

let mike = new Member("mike", "mike@gmail.com", "123", "Standard");

mike.getPackage();

mike.renewMembership();
mike.subscriptionActiveTill();
