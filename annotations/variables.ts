// https://www.udemy.com/course/typescript-the-complete-developers-guide/
let apples = 5;
let speed = 'fast';
let hasName = true;

let nothingMuch = null;
let nothing = undefined;

// built in objects

let now: Date = new Date();

//Array

let colors = ['red', 'green', 'blue'];
let myNumbers = [1,2,3];
let truths = [true, true, false];

// Classes

 class Car {};

 let car = new Car();

//  Object literal

let point: { x: number; y: number } = {
    x: 10,
    y: 20
}

// Function
const logNumber = (i: number) => {
    console.log(i);
}

// When do we use annotation over inference?
// * when the function returns the ‘any’ type and we need to clarify the value
const json = `{"x": 10, "y": 20}`;
const coordinates: {x: number, y: number } = JSON.parse(json);

// * when we declare a variable on one line and then initialize it later
let words = ['red', 'green', 'blue'];
let foundWord: boolean;

for (let i = 0; i < words.length; i++) {
    if(words[i] === 'green') {
        foundWord = true;
    }
    
}
// * when we want a variable to have a type that can’t be inferred

let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
        numberAboveZero = numbers[i];
    }
}