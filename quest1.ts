import * as assert from 'assert';

class Person {
    private name: string;
    private age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    tellMyName(): string {
        return "I am" + this.name;
    }

    tellMyAge(): string {
        return "I am" + this.age + "years old";
    }
}


const person1 = new Person('john', 40);
const person2 = new Person('Mary', 35);

console.log(person1, person2);


class BankCustomer {
    private clientName: string;
    private pass: string;

    constructor(clientName: string, pass: string) {
        this.clientName = clientName;
        this.pass = pass;
    }

    public getName(): string {
        return this.clientName;
    }

    public verifyPinInput(input: string): boolean {
        return input === this.pass;
    }
}


const customer = new BankCustomer('John Doe', '3579');
assert.equal(typeof customer.getName, 'function');
assert.equal(typeof customer.verifyPinInput, 'function');
assert.equal(customer.getName(), 'John Doe');
assert.ok(customer.verifyPinInput('3579'));