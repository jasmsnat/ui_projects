//THIS IS THE JSON DEMO FILE
'use strict';

//json object
//Now you enter the elements of the json objects which can be called later
var person = { 
    firstName:"Chris",
    lastName:"Kringle",
    address:"101 North Pole",
    dob:"12/25/1980",
    
    test:function(){
        console.log("From Test");
    },
    
    test2:outsideFunction,
    
    sampleObj:{
        account:"101-A2",
        balance:"NA",
        cars:["toyota", "honda"], //this is an array, will need to include brackets to call a specific item
        complexArray:[
            {
                fruit:"Pineapple",
                pet:"Dog"
            },
            {
                fruit:"Mango",
                pet:"Cat"
            }
        ]
    }
}; //no comma on last element

function outsideFunction() {
    console.log("From Outside Function");
}

console.log(person.firstName);
console.log(person['firstName']);
//two different ways to retrieve the firstName

person.test();
person.test2();

console.log(person.sampleObj); //calling the sample obj
console.log(person.sampleObj.balance); //calling the balance 
person.sampleObj.balance = 750; //redefining the balance
console.log(person.sampleObj.balance); 

console.log(person.sampleObj.cars[0]); //this will call toyota

console.log(person.sampleObj.complexArray[0].fruit); //two different ways to call pineapple - dot notation or hash method (i.e. bracket notation)
console.log(person.sampleObj.complexArray[0]['fruit']);
