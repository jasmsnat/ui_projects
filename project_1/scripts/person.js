'use strict';

function person() {
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
}

//instantiating an object
var personObj = new person();

console.log(personObj.address);

personObj.setFirstName('John');
console.log(personObj.getFirstName());