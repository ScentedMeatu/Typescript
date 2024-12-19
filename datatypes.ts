//basic types
let message : string = 'bonjour monde';

let bol: boolean = true;

let num: number = 1;

let word: string = "bonjour";

let sentance: string = `${word} monde`;

function getmessage(message: string/*parameter datatype*/): string/*return datatype*/{
    return `this is your message: ${message}`
}

console.log(getmessage(message));

//array
let numbers: number[] = [1,2,3,4];

//generics
let names: Array<string> = ['bonjour','monde'];

//tuples
let person: [string, number] = ['bharath',23];

let dic: Array<[string, number]> = [['bharath',23],['zoro',18]];

//enum
enum color {
    red = 'FF0000',
    blue = '0000FF',
    green = '00FF00'
}

console.log(`${color.red}, ${color.blue}, ${color.green}`);

//any
let data: any = "bonjour";
data = 42; 
data = true;

//unknown
let input: unknown = "bonjour";
if (typeof input === "string") {
    console.log(input);
}

//rest
function multiply(...numbers: number[]): number {
    return numbers.reduce((product, num) => product * num, 1);
}
console.log(multiply(2, 3, 4));

//interface
interface User {
    name: string;
    age: number;
}

const user: User = {
    name: "Bharath",
    age: 23
};
console.log(user.name);

//function interface
interface Add {
    (a: number, b: number): number;
}

const addNumbers: Add = (x, y) => x + y;
console.log(addNumbers(10, 20));

//union
let id: string | number;
id = 101;
id = "A101";

function display(value: string | boolean): void {
    console.log(value);
}