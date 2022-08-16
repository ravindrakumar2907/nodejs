
var name = "Shilpa";
console.log(name);

console.log(name.length);
for(var i=0; i < name.length; i++){
    //console.log(name[i]);
}// 0 to 5

var reverseName = "";
for(var i = name.length -1 ; i >= 0; i--){
    console.log(name[i]);
    reverseName = reverseName +  name[i]
}
console.log(reverseName);

function reverseString(inputString){
    var name = inputString;
    var reverseName = "";
    for(var i = name.length -1 ; i >= 0; i--){
        console.log(name[i]);
        reverseName = reverseName +  name[i]
    }
    console.log(reverseName);
}
reverseString("ravi");//ivar
reverseString("mahi");//iham
reverseString("cook");//kooc
//Shilpa
//aplihS
