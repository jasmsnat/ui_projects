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
    $("#tabs").tabs();
    $("#DOBirth").datepicker();
    $('.error-msg').hide();
    $('#validate').on("click", validateEntry);
});//you can remove the onClick function from the html button and customaize the jquery handler here.

function Person() {
    var firstName = '';
    var lastName = '';
    var address = '';
    var continent = '';
    var dob = '';
    var gender = '';
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
}


function generateTable(sample) {
    var template = "";
    
    template += "<div class='accordion'>";
    sample.forEach(function(x){
        template += "<h3>" + x.getLastName() + ", " + x.getFirstName() + "</h3>";
        template += "<div>";
        template += "First Name: " + x.getFirstName() + 
            "<br> Last Name: " + x.getLastName() + 
            "<br> Address: " + x.getAddress() + 
            "<br> Continent: " + x.getContinent() + 
            "<br> DOB: " + x.getDob() + 
            "<br> Gender: " + x.getGender() + 
            "<br> Car(s):" + x.getCars() + 
            "<br>";
        template += "</div>";
    });
    template += "</div>";
    return template;
}


function displayEntry() {
//    result="Hello World - JQuery";
    //alert("SUBMISSION COMPLETED");
    var result = generateTable(personArray);
//    document.getElementById("results").innerHTML=result;
    $("#resultTab").html(result);
    $(".accordion").accordion({
        collapsible: true,
        active: false,
        heightStyle: "content"
    });
}

function validateEntry () {
    var error = 0; //we will need this for css of error message?
    var firstName = $('#firstName').val();
    var lastName = $('#lastName').val();
    var address = $('#add').val();
    var dob = $('#DOBirth').val();
    
    var regEx1 =/^[a-z|A-Z]+$/;
    var regEx2 = new RegExp('^([a-z]|[A-Z])+$');
    var regEx3 = new RegExp('^([a-z]|[A-Z])([a-z]|[A-Z]|[1-9])+$', 'g');
    var regEx4 = new RegExp('^([1-9])+ ([a-z]|[A-Z]| )+$', 'g');
    //the spaces in regEx4 are intentional - they provide the user to input spaces between the house number and street as well as the various portions of the street name.
    
    //can also write the expression as regEx1.test(firstName == false)
    if(firstName.length==0 || firstName.match(regEx1) == null) {
        $('#firstErr').show(); 
    } else {
        $('#firstErr').hide();
    }
    
    if(lastName.length==0 || lastName.match(regEx2) == null) {
       $('#lastErr').show();
    } else {
       $('#lastErr').hide();
    }
    
    if(address.length==0 || address.match(regEx4) == null) {
        $('#addErr').show();
    } else {
        $('#addErr').hide();
    }
}