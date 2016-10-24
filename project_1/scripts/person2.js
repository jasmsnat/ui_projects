/*$(document).ready(function(){
    alert("document ready function");
})*/ //you do not need more than one to run your code

/*$(function(){
    console.log("shortened ready function")
})*/
'use strict'

$(function(){
    $("#submit").click(submitEntry);
    $("#display").dblclick(displayEntry);
    $("#test1").on("click",function(){
        alert("Test Button Working");
    });
    $("#test2").on("mouseover",function(){
        alert("mouseover working");
    });
    $("#test3").on("click",function(){
        $("#submit").trigger("click");
        $("#display").trigger("click");
    });
    $( "#tabs" ).tabs();
    $( "#results" ).accordion();
});//you can remove the onClick function from the html button and customaize the jquery handler here.

function Person() {
    var firstName = '';
    var lastName = '';
    var address = '';
    var dob = '';
    var gender = '';
    var continent = '';
    var cars = '';

    /*Sets first name*/
    this.setFirstName = function(fName) {
        firstName = fName;
    }
    
    this.setLastName = function(lName) {
        lastName = lName;
    }
    
    this.setAddress = function(add) {
        address = add;
    }

    this.setDob = function(bday) {
        dob = bday;
    }
    
    this.setGender = function(genType) {
        gender = genType;
    }
    
    this.setContinent = function(conti) {
        continent = conti;
    }
    
    this.setCars = function(carsX) {
        cars = carsX;
    }
    
    this.getFirstName = function() {
        return firstName;
    }
    
    this.getLastName = function() {
        return lastName;
    }
    
    this.getAddress = () => address;
    this.getDob = () => dob;
    this.getGender = () => gender;
    this.getContinent = () => continent;
    this.getCars = () => cars;
    
    this.checkData = function() {
        console.log('First Name: ' + firstName);
        console.log('Last Name: ' + lastName);
        console.log('Address: ' + address);
        console.log('Continent: ' + continent);
        console.log('DOB: ' + dob);
        console.log('Gender: ' + gender);
        console.log('Car(s): ' + cars);
       /* if (cars.length > 0){
            console.log('Cars List') 
            cars.forEach(function(x){
                console.log(x);
            })
        }*/
    }   
}

var personArray = []; //since this is above, our function can access it. this is because it is a variable and must be declared before it can be called.

function submitEntry() {
    var personObj = new Person();
    
    var firstName = $("#firstName").val();
//    var firstName = document.getElementById("firstName").value;
    personObj.setFirstName(firstName);
    
    var lastName = $("#lastName").val();
//    var lastName = document.getElementById('lastName').value;
    personObj.setLastName(lastName);
    
//    var address = $("#add").val();
    var address = document.getElementById("add").value;
    personObj.setAddress(address);
    
    var continentList = document.getElementsByName('cont');
    var c = '';
    for(var i=0; i<continentList.length; i++){
        if(continentList[i].selected){
            c = continentList[i].value;
        }
    }
    personObj.setContinent(c);
    
    var dob = document.getElementById('DOBirth').value;
    personObj.setDob(dob);
    
    var genderList = document.getElementsByName("gender");
    var g = ''
    for(var i=0; i<genderList.length; i++){
        if(genderList[i].checked){
            g = genderList[i].value;
        }
    }
    personObj.setGender(g);
    
    var carList = document.getElementsByName('carType');
    var x = '';
    for(var i=0; i<carList.length; i++){
        if(carList[i].checked){
            x += "," + carList[i].value;
        }
    }
    if(x) x = x.substring(1);
    personObj.setCars(x);
    
    personObj.checkData();
    personArray.push(personObj);
    displayEntry();
//    checkArray(personArray);
//    alert(firstName)
}

/*function checkArray(sample) {
    sample.forEach(function(x){
        x.checkData();
    })
}*/

function generateTable(sample) {
    var template = "";
    var i = 1;
    sample.forEach(function(x){
        template += "PERSON " + i + "<br>";
        //template = template + "PERSON " + i + "<br>";
        template += "First Name: " + x.getFirstName() + "<br>";
        template += "Last Name: " + x.getLastName() + "<br>";
        template += "Address: " + x.getAddress() + "<br>";
        template += "Continent: " + x.getContinent() + "<br>";
        template += "DOB: " + x.getDob() + "<br>";
        template += "Gender: " + x.getGender() + "<br>";
        template += "Car(s): " + x.getCars() + "<br>";
        template += "<hr>";
        i++;
    })
    return template;
}


function displayEntry() {
//    result="Hello World - JQuery";
    alert("SUBMISSION COMPLETED");
    var result = generateTable(personArray);
//    document.getElementById("results").innerHTML=result;
    $("#results").html(result);
}

/*var personArray = [];

var personObj = new Person();
var carsArray = ["toyota", "honda"];
personObj.setFirstName("Jasmeet");
personObj.setLastName("Nat");
personObj.setAddress("1600 Penn Ave");
personObj.setDob("01/01/2001");
personObj.setGender("Male");
personObj.setCountry("USA");
personObj.setCars(carsArray);
personObj.checkData();

personArray.push(personObj);
//console.log(personArray[0]);
personArray[0].checkData;


var personObj = new Person();
var carsArray = ["Lexus", "BMW"];
personObj.setFirstName("Bob");
personObj.setLastName("Barker");
personObj.setAddress("123 Beverly Hills");
personObj.setDob("12/12/1912");
personObj.setGender("Male");
personObj.setCountry("USA");
personObj.setCars(carsArray);
personObj.checkData();

personArray.push(personObj);
personArray[1].checkData;*/


/*var x = 2;
var y = "2";

if (x==y) {
    console.log('True'); //compares values
}

if (x===y) {
    console.log('True'); //compares data type
}

else {
    console.log('False');
}*/
