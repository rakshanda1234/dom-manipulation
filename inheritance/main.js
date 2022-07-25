"use strict";

class User {
  static count = 0;
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
    User.count++;
  }

  register() {
    console.log(this.username + " is now registerd");
  }
}

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
      membershipactivetillYear + 1, //just increse the year by 1
      membershipactivetillMonth, //just increase the month by 1
      membershipactivetillDay
    );
  }

  subscriptionActiveTill() {
    console.log(
      this.username +
        " is subscribed to " +
        this.package +
        " uptill " +
        this.membershipactivetilldate
    );
  }

  getPackage() {
    console.log(this.username + " is subscribed to the " + this.package);
  }
}

const mike = new Member("mike", "mike@gmail.com", "123", "Standard package");

mike.getPackage();

mike.renewMembership();
mike.subscriptionActiveTill();
