function Person() {
    var firstName = '';
    var lastName = '';
    var address = '';
    var dob = '';
    var gender = '';
    var country = '';
    var cars = [];

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
    
    this.setCountry = function(count) {
        country = count;
    }
    
    this.setCars = function(carsP) {
        cars = carsP;
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
    this.getCountry = () => country;
    this.getCars = () => cars;
    
    this.checkData = function() {
        console.log('First Name: ' + firstName);
        console.log('Last Name: ' + lastName);
        console.log('Address: ' + address);
        console.log('DOB: ' + dob);
        console.log('Gender: ' + gender);
        console.log('Country: ' + country);
        if (cars.length > 0){
            console.log('Cars List') 
            cars.forEach(function(x){
                console.log(x);
            })
        }
    }
    
}

var personArray = []; //since this is above, our function can access it. this is because it is a variable and must be declared before it can be called.

function submitEntry() {
    var personObj = new Person();
    var firstName = document.getElementById("firstName").value;
    personObj.setFirstName(firstName);
    var lastName = document.getElementById('lastName').value;
    personObj.setLastName(lastName);
    var address = document.getElementById("add").value;
    personObj.setAddress(address);
    var dob = document.getElementById('DOBirth').value;
    personObj.setDob(dob);
    personObj.checkData();
    personArray.push(personObj);
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
        template += "First Name " + x.getFirstName() + "<br>";
        template += "Last Name " + x.getLastName(); + "<br>";
        template += "<hr>";
        i++;
    })
    return template;
}


function displayEntry() {
    var result = generateTable(personArray);
    document.getElementById("results").innerHTML=result;
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
