"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var assert = require("assert");
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.tellMyName = function () {
        return "I am" + this.name;
    };
    Person.prototype.tellMyAge = function () {
        return "I am" + this.age + "years old";
    };
    return Person;
}());
var person1 = new Person('john', 40);
var person2 = new Person('Mary', 35);
console.log(person1, person2);
var BankCustomer = /** @class */ (function () {
    function BankCustomer(clientName, pass) {
        this.clientName = clientName;
        this.pass = pass;
    }
    BankCustomer.prototype.getName = function () {
        return this.clientName;
    };
    BankCustomer.prototype.verifyPinInput = function (input) {
        return input === this.pass;
    };
    return BankCustomer;
}());
var customer = new BankCustomer('John Doe', '3579');
assert.equal(typeof customer.getName, 'function');
assert.equal(typeof customer.verifyPinInput, 'function');
assert.equal(customer.getName(), 'John Doe');
assert.ok(customer.verifyPinInput('3579'));
