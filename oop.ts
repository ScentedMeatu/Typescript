//class
class Person{
    name: string;
    age: number;

    greet(): string{
        return `Hi,I am ${this.name} and I am ${this.age} years old.`;
    }
}

const bharath = new Person();
bharath.name = 'bharath';
bharath.age = 23;
console.log(bharath.greet());

//constructor
class Employee{
    name: string;
    role: string;

    constructor(name: string, role: string){
        this.name = name;
        this.role = role;
    }

    details(): string{
        return `name: ${this.name}, role:${this.role}`;
    }
}

const employee = new Employee('bharath','software developer');
console.log(employee.details());

//access modifiers
class BankAccount{
    private balance: number;

    setBalance(deposit: number){
        this.balance = deposit;
    }
    getBalance(): void{
        console.log(this.balance);
    }
}

const bharathAccount = new BankAccount();
bharathAccount.setBalance(1000);
bharathAccount.getBalance();

//inheritance
class Animal{
    name:string;

    constructor(name:string){
        this.name = name;
    }

    move():void{
        console.log(`${this.name} is moving`);
    }
}

class Dog extends Animal{

    constructor(name:string){
        super(name);
    }

    bark():void{
        console.log(`${this.name} is braking`);
    }
}

const mydog = new Dog('chu chu');
mydog.move();
mydog.bark();

//abstract class
abstract class Vehicle {
    abstract move(): string;

    description(): string {
        return "A vehicle is used for transportation.";
    }
}

class Car extends Vehicle {
    move(): string {
        return "The car is driving.";
    }
}

const car = new Car();
console.log(car.move());
console.log(car.description());

//static
class Circle {
    static PI: number = 3.14;

    static area(radius: number): number {
        return this.PI * radius * radius;
    }
}

console.log(Circle.PI);
console.log(Circle.area(5));