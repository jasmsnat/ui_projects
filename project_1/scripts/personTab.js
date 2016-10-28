/*$(document).ready(function(){
    alert("document ready function");
})*/ //you do not need more than one to run your code

/*$(function(){
    console.log("shortened ready function")
})*/
'use strict'

//event hanlder
$(function(){
    $("#submit").click(submitEntry);//.prop("disabled",true);
//    $("#submit").prop("disabled",true); //should just chain it to save resources and prevent a double DOM tree search
//    $("#display").dblclick(displayEntry);
    $("#tabs").tabs();
    $("#DOBirth").datepicker();
    $('.error-msg').hide();
//    $('#validate').on("click", validateEntry).prop("disabled",true);
    
    /*$('#errorDialog').dialog({
        autoOpen: false
    });*/
    
    $('#dialogMain').dialog({
        autoOpen: false,
        modal: true,
        buttons: {
            "Save": function() {
                alert("saving");    
            },
            "Cancel": function() {
                $(this).dialog("close");
            }
        }    
    });
    
    $("#openForm").click(function(){
        $('#dialogMain').dialog("open");
        testAcc();
    });
    
   
   /* $('#openForm').on("click", function(){
        $('#dialogMain').dialog("open");
    });*/
    //These are both ways to write the click function for the openForm
    
});//you can remove the onClick function from the html button and customaize the jquery handler here.

//person function getters/setters
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

//array for storing person info
var personArray = []; //since this is above, our function can access it. this is because it is a variable and must be declared before it can be called.

//submit function to validate person info and send to array via display
function submitEntry() {
    var personObj = new Person();
    
    var firstName = $("#firstName").val();
//    var firstName = document.getElementById("firstName").value;
    
    var lastName = $("#lastName").val();
//    var lastName = document.getElementById('lastName').value;
    
    var address = $("#add").val();
//    var address = document.getElementById("add").value;
    
    var dob = document.getElementById('DOBirth').value;
    
    var continentList = document.getElementsByName('cont');
    var c = '';
    for(var i=0; i<continentList.length; i++){
        if(continentList[i].selected){
            c = continentList[i].value;
        }
    }
        
    var genderList = document.getElementsByName("gender");
    var g = ''
    for(var i=0; i<genderList.length; i++){
        if(genderList[i].checked){
            g = genderList[i].value;
        }
    }
    
    var carList = document.getElementsByName('carType');
    var x = '';
    for(var i=0; i<carList.length; i++){
        if(carList[i].checked){
            x += "," + carList[i].value;
        }
    }
    if(x) x = x.substring(1);
    
    var error = 0; //This is the error checking counter. Initialized at a value of 0
    
    // Variations of Regular Expressions - testing
    var regEx1 =/^[a-z|A-Z]+$/;
//    var regEx1 =/^[a-z|A-Z|\s|\S]+$/; //the \s is for whitespace characters. the \S is for non-whitespace characters (i.e. commas)
    var regEx2 = new RegExp('^([a-z]|[A-Z])+$');
    var regEx3 = new RegExp('^([a-z]|[A-Z])([a-z]|[A-Z]|[1-9])+$', 'g');
    var regEx4 = new RegExp('^([1-9]|[a-z]|[A-Z]|,| )+$', 'g');
    var regEx5 = new RegExp('^[a-z|A-Z|\s|\S]+$');
    //the spaces in regEx4 are intentional - they provide the user to input spaces between the house number and street as well as the various portions of the street name. The comma allows for commas to be inserted.
    
    //can also write the expression as regEx1.test(firstName) == false
    if(firstName.length==0 || regEx1.test(firstName) == false) {
        $('#firstErr').show(); 
        error++;
    } else {
        $('#firstErr').hide();
    }
    
    if(lastName.length==0 || lastName.match(regEx2) == null) {
       $('#lastErr').show();
        error++;
    } else {
       $('#lastErr').hide();
    }
    
    if(address.length==0 || regEx5.test(address) == null) {
        $('#addErr').show();
        error++;
    } else {
        $('#addErr').hide();
    }
    
    if (error==0) {
        personObj.setFirstName(firstName);
        personObj.setLastName(lastName);
        personObj.setAddress(address);
        personObj.setContinent(c);
        personObj.setDob(dob);
        personObj.setGender(g);
        personObj.setCars(x);
    //    personObj.checkData();
        personArray.push(personObj);
        displayEntry();
    } else {
        alert("Please fix the flagged error(s)");
//        $('#dialog').dialog("open");
//        $("#submit").click(submitEntry).prop("disabled",true);
    }
}

//generates table for the display entry
function generateTable(sample) {
    var template = "";
    var per = 0;
    template += "<div class='accordion'>";
    sample.forEach(function(x){
        template += "<h3>" + x.getLastName() + ", " + x.getFirstName() + "</h3>";
        template += "<div class='tempList' val='"+[per]+"'>";
        template += "First Name: " + x.getFirstName() + 
            "<br> Last Name: " + x.getLastName() + 
            "<br> Address: " + x.getAddress() + 
            "<br> Continent: " + x.getContinent() + 
            "<br> DOB: " + x.getDob() + 
            "<br> Gender: " + x.getGender() + 
            "<br> Car(s):" + x.getCars() + 
            "<br>";
        template += "<button type='button' class='btn btn-info pull-right editBtn' val='"+per+"'>" + "Edit" + "</button>";
        template += "</div>";
        per++;
    });
    template += "</div>";
    return template;
}

//occurrs after submit function passes array through table to generate results
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
    editEntry();
}

//validate errors --  merged with submit. this is not being used.
function validateEntry() {
    var error = 0; //we will need this for css of error message?
    var firstName = $('#firstName').val();
    var lastName = $('#lastName').val();
    var address = $('#add').val();
    var dob = $('#DOBirth').val();
    
    var regEx1 =/^[a-z|A-Z]+$/;
    var regEx2 = new RegExp('^([a-z]|[A-Z])+$');
    var regEx3 = new RegExp('^([a-z]|[A-Z])([a-z]|[A-Z]|[1-9])+$', 'g');
    var regEx4 = new RegExp('^([1-9]|[a-z]|[A-Z])+$', 'g');
    //the spaces in regEx4 are intentional - they provide the user to input spaces between the house number and street as well as the various portions of the street name.
    
    //can also write the expression as regEx1.test(firstName == false)
    if(firstName.length==0 || firstName.match(regEx1) == null) {
        $('#firstErr').show(); 
        error++;
    } else {
        $('#firstErr').hide();
    }
    
    if(lastName.length==0 || lastName.match(regEx2) == null) {
       $('#lastErr').show();
       error++;
    } else {
       $('#lastErr').hide();
    }
    
    if(address.length==0 || address.match(regEx4) == null) {
        $('#addErr').show();
        error++;
    } else {
        $('#addErr').hide();
    }
    
    if (error==0) {
        $("#submit").prop("disabled",false);
    } else {
        $("#errorCount").html(error); //this will be the error count
        $('#errorDialog').dialog("open");
    }   
}

function editEntry() {
        var per;
        $('.editBtn').click(function(){
            per = $(this).attr("val");
//            alert(test);
            $('#dialogForm').val([per]);
            $('#editFirst').val(personArray[per].getFirstName());
            $('#editLast').val(personArray[per].getLastName());
            $('#dialogMain').dialog("open"); 
        })
}

function editSave() {
    alert('checking editSave call');
}