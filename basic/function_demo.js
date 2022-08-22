
//variable, datatypes, operators  arithmatic/assi/incr/decre

/*
var num1 = 10;
var num2 = 20;
var result = num1 + num2;
console.log("Result of sum is:" + result);

var num1 = 10;
var num2 = 20;
var result = num1 - num2;
console.log("Result of minus is:" + result);
*/
//Function
/*
1. Code modularise 
2. Code Reuse
3. no need to write extra code
4. Can be used when needed
5. logic can be written / wrap as function

*/

function sum1(){
    var num1 = 10;
    var num2 = 20;
    var result = num1 + num2;
    console.log("Result of sum is:" + result);
}

function validateEmail(email){
    // email validation
   // return true , false;
}

function substraction(){
    var num1 = 10;
    var num2 = 20;
    var result = num1 - num2;
    console.log("Result of substraction is:" + result);
}
sum1();
//substraction();

function startFan(){
    console.log("fan started");
}
function stopFan(){
    console.log("fan stoped");
}
startFan();
startFan();
startFan();
startFan();
stopFan();


function sum(num1, num2){// function parameter / formal argument
    var result = num1 + num2;
    console.log("Result of sum is:" + result);
}
onclick=setValue();
//sum(10, 20);// actual argument

function mul(num1, num2){// function parameter
    var result = num1 * num2;
    console.log("Result of Mul is:" + result);
    return result;
}

function add(num1, num2){// function parameter
    var result = num1 + num2;
    console.log("Result of Mul is:" + result);
    return result;
}

var mul_result = mul(10, 20);
console.log(mul_result);


var mul_result = add(10, 20);
console.log(mul_result);

//Types of function
//1. function take no argument and does not return anything
function do1(){  
    console.log("");
};
//2. function takes argument and does not return anything
function do1(input){  
    console.log(""+ input);
};
//3. function does not take input but return value
function do1(){  
    console.log("");
    return 1;
};
//4. function takes input and return result
function do1(input){  
    console.log(""+ input);
    return 1;
};

function draw(){
    console.log("circle");
}

draw();
draw();
draw();

function draw(type_of_shape){
    console.log("type:" + type_of_shape);
}
draw("circle");
draw("triangle");
draw("square");

function car_drive(gear){
    console.log("runnin on:" + gear);
}
car_drive(1);
car_drive(2);
car_drive(3);

function tellGearNumberToswitch(speed){
    // speed 10 to 20 // second
    // speed 21 to 40 // third 
}
tellGearNumberToswitch(20);

function validateEmail(email){
    // check email
}

function validatePassword(password){
    // check email
}

// variables
//datatypes
// type of
//function
// diff types of function
// arithmetic operator
//node js installation  and vs code installation
