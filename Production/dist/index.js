"use strict";
class Human {
    constructor(email, name, city = 'Default') {
        this.email = email;
        this.name = name;
        this.city = city;
        this._courseCount = 1;
        this.pincode = '0101';
    }
    // # private fuctions
    deleteToken() {
        console.log(this.name);
    }
}
class SubHuman extends Human {
    changeCourseCount() {
        this._courseCount = 2;
    }
}
