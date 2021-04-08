//always use return annotations because we don't want typescript
// to infer an incorrect annotation (like void)
const add = (a: number,b: number):number => {
    return a + b;
}
const subtract = (a: number,b: number):number => {
    return a - b;
}
function divide(a: number,b: number):number {
    return a / b;
}

const multiply = function(a: number,b: number):number {
    return a * b;
}


const logger = (message: string):void => {
    console.log(message);
    //undefined, null are valid for a void return type
}
const throwError = (message: string):never => {
    //never if we will not return anything ever
   throw new Error(message);
}

const todaysWeather = {
    date: new Date(),
    weather:'sunny'
};

//destructuring first and then add annotations
const logWeather = ({date,weather}: {date:Date, weather: string}) :void => {
    console.log(date);
    console.log(weather);
}

logWeather(todaysWeather);