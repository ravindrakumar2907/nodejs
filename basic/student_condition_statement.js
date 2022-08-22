
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

var marks = 40;

if(marks >= 35 && marks < 60){
    console.log("Student pass with grade -C");
}else if(marks >= 60 && marks < 75){
    console.log("Student pass with grade -B");
}else if(marks >= 75 && marks <= 100){
    console.log("Student pass with grade -A");
}else{
    // deafult 
    console.log("Student Failed and marks is: " + marks);
}


function getStudentStatusByMarks(mark){
    var marks = mark;

    if(marks >= 35 && marks < 60){
        console.log("Student pass with grade -C");
        return "PASS-C";
    }else if(marks >= 60 && marks < 75){
        console.log("Student pass with grade -B");
        return "PASS-B";
    }else if(marks >= 75 && marks <= 100){
        console.log("Student pass with grade -A");
        return "PASS-A";
    }else{
        // deafult 
        console.log("Student Failed and marks is: " + marks);
        return "FAILED";
    }
    
}
console.log("###function demo");
var result = getStudentStatusByMarks(40);
console.log("Result is: " + result);

console.log("###function demo");
var result = getStudentStatusByMarks(59);
console.log("Result is: " + result);

console.log("###function demo");
var result = getStudentStatusByMarks(60);
console.log("Result is: " + result);

console.log("###function demo");
var result = getStudentStatusByMarks(90);
console.log("Result is: " + result);