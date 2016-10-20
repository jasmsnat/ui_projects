'use strict';

function personFunc() {
    //public variables are with this
    this.address='Texas';
    
    //private variables are with var
    var firstName='';
    var lastName='';
    
    //to update the private variables, we must use public getter/setter
    this.setFirstName=function(fName){
        firstName=fName;
    }
    
    this.getFirstName=function(){
        return firstName;
    } 
    
    this.setLastName=function(lName){
        lastName=lName;
    }
    
    this.getLastName=function(){
        return lastName;
    }
}

//instantiating an object
var personObj = new personFunc();

console.log(personObj.address);

personObj.setFirstName('John');
console.log(personObj.getFirstName());