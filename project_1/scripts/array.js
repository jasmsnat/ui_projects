'use strict';

//creating arrays
//there are two ways to create an array

//var array1 = new Array();
var cart = [];
var fruits = ['apple', 'mango', 'orange', 'banana'];
var animals = ['dog', 'cat', 'monkey'];

console.log(fruits[2]); //prints orange

cart.push(fruits[1], fruits[0]); //you can add/push multiple elements at the same time

console.log(cart); //prints mango and apple

cart.pop(); //removes apple, since it is the last one in the array

console.log(cart); //prints mango since the apple has been popped

    
function parseArray(arrayParam) {
    console.log("Printed from Function:")
    for(var i=0; i<arrayParam.length; i++) {
        console.log(arrayParam[i]);
    }
}

parseArray(fruits);
parseArray(animals);

console.log("Printed from for loop:");
for(var i=0; i<fruits.length; i++) {
    console.log(fruits[i]);
}

//x must be a parameter of the function and then you print out the function.
//this calling the fruits array and for each value it will pass it through function (x) which prints out the value of x
console.log('Printed from forEach(function()):');
fruits.forEach(function (x){ 
               console.log(x);
               });