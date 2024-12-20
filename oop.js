var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//class
var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.greet = function () {
        return "Hi,I am ".concat(this.name, " and I am ").concat(this.age, " years old.");
    };
    return Person;
}());
var bharath = new Person();
bharath.name = 'bharath';
bharath.age = 23;
console.log(bharath.greet());
//constructor
var Employee = /** @class */ (function () {
    function Employee(name, role) {
        this.name = name;
        this.role = role;
    }
    Employee.prototype.details = function () {
        return "name: ".concat(this.name, ", role:").concat(this.role);
    };
    return Employee;
}());
var employee = new Employee('bharath', 'software developer');
console.log(employee.details());
//access modifiers
var BankAccount = /** @class */ (function () {
    function BankAccount() {
    }
    BankAccount.prototype.setBalance = function (deposit) {
        this.balance = deposit;
    };
    BankAccount.prototype.getBalance = function () {
        console.log(this.balance);
    };
    return BankAccount;
}());
var bharathAccount = new BankAccount();
bharathAccount.setBalance(1000);
bharathAccount.getBalance();
//inheritance
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.move = function () {
        console.log("".concat(this.name, " is moving"));
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name) {
        return _super.call(this, name) || this;
    }
    Dog.prototype.bark = function () {
        console.log("".concat(this.name, " is braking"));
    };
    return Dog;
}(Animal));
var mydog = new Dog('chu chu');
mydog.move();
mydog.bark();
//abstract class
var Vehicle = /** @class */ (function () {
    function Vehicle() {
    }
    Vehicle.prototype.description = function () {
        return "A vehicle is used for transportation.";
    };
    return Vehicle;
}());
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Car.prototype.move = function () {
        return "The car is driving.";
    };
    return Car;
}(Vehicle));
var car = new Car();
console.log(car.move());
console.log(car.description());
//static
var Circle = /** @class */ (function () {
    function Circle() {
    }
    Circle.area = function (radius) {
        return this.PI * radius * radius;
    };
    Circle.PI = 3.14;
    return Circle;
}());
console.log(Circle.PI);
console.log(Circle.area(5));
//polymorphism
var Shape = /** @class */ (function () {
    function Shape() {
    }
    Shape.prototype.draw = function () {
        return "Drawing a shape.";
    };
    return Shape;
}());
var CircleShape = /** @class */ (function (_super) {
    __extends(CircleShape, _super);
    function CircleShape() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CircleShape.prototype.draw = function () {
        return "Drawing a circle.";
    };
    return CircleShape;
}(Shape));
var shapes = [new Shape(), new CircleShape()];
shapes.forEach(function (shape) { return console.log(shape.draw()); });
