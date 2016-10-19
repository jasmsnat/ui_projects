'use strict';

function calculate() {
    var num1 = 0;
    var num2 = 0;
    
    this.setNum = function(n1, n2) {
        num1 = n1;
        num2 = n2;
    }
    
    this.getAdd = function() {
        return num1 + num2;
    }

    this.getSub = function() {
        return num1 - num2;
    }
    
    this.getMul = function() {
        return num1 * num2;
    }
    
    this.getDiv = function() {
        return num1 / num2;
    }
}

var calcTest = new calculate();
calcTest.setNum(5,4);

console.log(calcTest.getAdd());
console.log(calcTest.getSub());
console.log(calcTest.getMul());
console.log(calcTest.getDiv());