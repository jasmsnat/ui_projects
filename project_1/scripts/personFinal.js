'use strict'

//event hanlder
$(function(){
    $("#submit").click(submitEntry);
    $("#tabs").tabs();
    $("#DOBirth").datepicker();
    $('.error-msg').hide();
    $('#dialogMain').dialog({
        autoOpen: false,
//        bgiframe: true,
        height: 350,
        width: 500,
        draggable: false,
        resizable: false,
        modal: true,
    });
    $('#editDob').datepicker();
    $('#cancelForm').click(function(){
        $('#dialogMain').dialog("close");
    });
    $('#saveForm').click(editSave);
});

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
var personArray = []; 

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
    var g = '';
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
    
    // Variations of Regular Expressions - testing
    var regEx1 =/^[a-z|A-Z]+$/;
//    var regEx1 =/^[a-z|A-Z|\s|\S]+$/; //the \s is for whitespace characters. the \S is for non-whitespace characters (i.e. commas)
    var regEx2 = new RegExp('^([a-z]|[A-Z])+$');
    var regEx3 = new RegExp('^([a-z]|[A-Z])([a-z]|[A-Z]|[1-9])+$', 'g');
    var regEx4 = new RegExp('^([1-9]|[a-z]|[A-Z]|,| )+$', 'g');
    var regEx5 = new RegExp('^[a-z|A-Z|\s|\S]+$');
   
    var error = 0; //This is the error checking counter. Initialized at a value of 0
    
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
        alert("Invalid entry detected. Please fix the flagged error(s)");
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
    editDisplay();
}

function editDisplay() {
    var per;
    $('.editBtn').click(function(){
        per = $(this).attr("val");
        $('#dialogForm').val([per]);
        $('#editFirst').val(personArray[per].getFirstName());
        $('#editLast').val(personArray[per].getLastName());
        $('#editAddress').val(personArray[per].getAddress());  
        $('#editDob').val(personArray[per].getDob());
        $('#editCont').val(personArray[per].getContinent());

        var a = document.getElementsByClassName('editGender');
        var b = personArray[per].getGender();
        for(var i=0; i<a.length; i++) {
            if(b == a[i].value) {
                $('#'+a[i].id).prop('checked', true);
            }
        }
      
        //WORKING ON CARS ARRAY
//        alert(personArray[per].getCars());
        var c = document.getElementsByName('editCar');
        var d = personArray[per].getCars();
        for(var i=0; i<c.length; i++) {
            if($(d+":contains("+c[i].value+")")) {
                $('#'+c[i].id).prop('checked', true);
            }
        }
        
        $('#dialogMain').dialog("open");
    });
}

function editSave() {
//alert('testing save');
    var editPersonObj = new Person();
    var per = $('#dialogForm').val();
    var editFirstName = $('#editFirst').val();
    var editLastName = $('#editLast').val();
    var editAddress = $('#editAddress').val();
    var editDate = $('#editDob').val(); 
    
    var editContinent = document.getElementsByName('editCont');
    var newCont = '';
    for(var i=0; i<editContinent.length; i++) {
        if(editContinent[i].selected) {
            newCont = editContinent[i].value;
        }
    }
    
    var editGender = document.getElementsByName('editGender');
    var newGender = '';
    for(var i=0; i<editGender.length; i++) {
        if(editGender[i].checked) {
            newGender = editGender[i].value;
        }
    }

    editPersonObj.setFirstName(editFirstName);
    editPersonObj.setLastName(editLastName);
    editPersonObj.setAddress(editAddress);
    editPersonObj.setContinent(newCont);
    editPersonObj.setDob(editDate);
    editPersonObj.setGender(newGender);
    personArray[per] = editPersonObj;
    displayEntry();
    $('#dialogMain').dialog("close");
}