
//variables and data-types
//var <name> = <value>;
var firstName = "ravi";
var lastName = "More";
var age =10;
var dob = "";
var is_active = true;
// {} object key-value
// [] array data, 
// Number, String, Object, Boolean (true / false), Array

console.log("This is datatype demo: " + typeof name);

var dob = "DD/MM/YYYY";

var dateOfBirth = {
    day:"",
    mm: "",
    yy:""
}

var user = {
    name:"",
    email: "",
    dob:"",
    mobile_number: ""
}
//objectName.feild
//user.name
// user['name']
console.log("object: " + typeof user);


var x = 16 + "" + 16 ; // 1616
var x = 16 + 16 +"" ; // 32
console.log(x);
console.log("String: " + typeof x);
console.log("Number: " + typeof 1);
//Number 1
// String "" ''
//Object {}
//Array [1,2]
//Boolean true / false
//undefied
var demo = "";
var demo1;
console.log("undefined: " + typeof demo);
var result1 = demo + demo1;
console.log(result1)
demo = 4;
// declare  & initiliase