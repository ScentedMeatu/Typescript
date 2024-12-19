//basic types
var message = 'bonjour monde';
var bol = true;
var num = 1;
var word = "bonjour";
var sentance = "".concat(word, " monde");
function getmessage(message /*parameter datatype*/) {
    return "this is your message: ".concat(message);
}
console.log(getmessage(message));
//array
var numbers = [1, 2, 3, 4];
//generics
var names = ['bonjour', 'monde'];
//tuples
var person = ['bharath', 23];
var dic = [['bharath', 23], ['zoro', 18]];
//enum
var color;
(function (color) {
    color["red"] = "FF0000";
    color["blue"] = "0000FF";
    color["green"] = "00FF00";
})(color || (color = {}));
console.log("".concat(color.red, ", ").concat(color.blue, ", ").concat(color.green));
//any
var data = "bonjour";
data = 42;
data = true;
//unknown
var input = "bonjour";
if (typeof input === "string") {
    console.log(input);
}
//rest
function multiply() {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return numbers.reduce(function (product, num) { return product * num; }, 1);
}
console.log(multiply(2, 3, 4));
var user = {
    name: "Bharath",
    age: 23
};
console.log(user.name);
var addNumbers = function (x, y) { return x + y; };
console.log(addNumbers(10, 20));
//union
var id;
id = 101;
id = "A101";
function display(value) {
    console.log(value);
}
