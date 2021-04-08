const carMakers = ['ford', 'toyota', 'chevy'];
const dates = [new Date(), new Date()];

const carsByMake = [
    ['f150'],
    ['corolla'],
    ['camaro']
];

//corner cases

// Help with inference when extracting values
const firstCar = carMakers[0];
const myCar = carMakers.pop();

// help prevent incompatible values
carMakers.push(100);


//get help with map
carMakers.map((car: string):string => {
    return car.toUpperCase();
})

//we can put different types into an array
//flexible types
const importantDates: (Date | string)[] = []; //should take some data objects and some strings
importantDates.push('2030-10-10');
importantDates.push(new Date());
// importantDates.push(100); //error