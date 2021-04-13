const drink = {
    color: 'brown',
    carbonated: true,
    sugar: 40
}

//create the idea of a tuple
type Drink = [string, boolean, number];

//values are expected to be certain types in a specific order
const pepsi [string, boolean, number]= ['brown', true, 40];
const sprite [string, boolean, number]= ['clear', true, 80];
const tea [string, boolean, number]= ['brown', false, 0];