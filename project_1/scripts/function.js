'use strict';

//FIRST FUNCTION STYLE
function add(num1=0, num2=0) {
    return num1 + num2;
}
console.log("sum: " + add(3,4));
console.log(add(3)); 
console.log(add());
//if no default value is present, it will throw an error 'NaN'
//if default values are provided, then no error will be thrown


//SECOND FUNCTION STYLE - Variable/Closer?
var add2 = function(num1=0, num2=0) {
    return num1 + num2;
}
console.log("var sum/function: " + add2(5,9));


//THIRD FUNCTION STYLE - Arrow Key
var add3 = (num1=0, num2=0) => num1 + num2;
console.log("Arrow Key Function: " + add3(4,4));