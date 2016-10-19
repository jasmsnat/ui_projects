'use strict';

function calculate () {
    var num1=0;
    var num2=0;
    
    this.setNum=function(n1, n2) {
        num1=n1;
        num2=n2;
    }
    
    this.addNum=function() {
        return num1 + num2;
    }
    
    this.subNum=function() {
        return num1 - num2;
    }
    
    this.mulNum=function() {
        return num1 * num2;
    }
    
    this.divNum=function() {
        return num1 / num2;
    }
    
    /*this.calcNum=function() {
        return num1+num2;
        return num1-num2;
        return num1*num2;
        return num1/num2;
    }*/
}

var calcTest = new calculate();
calcTest.setNum(4,5);
console.log("add: " + calcTest.addNum());
console.log("subtract: " + calcTest.subNum());
console.log("multiply: " + calcTest.mulNum());
console.log("divide: " + calcTest.divNum());
//console.log("All Calc: " + calcTest.calcNum());