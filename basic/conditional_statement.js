
// what is conditional statements?
//statements = single line of code ==> var name = "ravi";

// if,
 //if-else, 
 //if-else if-else

/** 
 * Student 
 * total marks= 100
 * marks < 35 == failed
 * marks ==  35 ya 35 to 59 == pass -> C
 * marks === 60 ya 75 === pass -> B
 * 
 * Marks 75 ya 100 === pass A
 * 
*/

/* comparision operator */
/* https://www.w3schools.com/jsref/jsref_operators.asp
<   ==> less than 
<=  ==>less than equal to
>    == greater than
>=   ==>greater than equal to
!   ==> not
!=   ==>not  equal to 

==   ==> equal to
===  ==> equal to strictly
*/

/* Logical Operators */
/*
&&	and	(x < 10 && y > 1) is #true/false- boolean datatype	
||	or	(x === 5 || y === 5) #is false	/ false
!	not	!(x === y) is true

*/

var a = 10;
var b = 6;
var res = a > b; // true
console.log("a > b: " + res);

var a = 10;
var b = 6;
var res = a < b; // false
console.log("a < b: " + res);

var res = a == b; // false
console.log("a == b: " + res);

var res = a != b; // true
console.log("a != b: " + res);
/* 
a > b: true
a < b: false
a == b: false
a != b: true
*/

var a = 10;
var b = 6;
var res = a < b; // false

if( a != b){// a is not equal to b
    console.log("##<<<<<< a < b ");
}

if( a > b){ // a is greater than b
    console.log(">>>>>>> a > b ");
}

if( a != b){// a is not equal to b
    console.log("not eqal");
}else{
    console.log(" eqal");
}

var a = 10;
var b = 6;
if( a > b){ // a is greater than b
    console.log("greater");
}else{
    console.log("lesser");
}

if( a > b && 59){ // a is greater than b
    console.log("greater");
}else if(a == b) {
    console.log("lesser");
}else if(a == b) {
    console.log("lesser");
}
else if(a == b) {
    console.log("lesser");
} else{// deafult
    console.log("lesser");// failed
}


