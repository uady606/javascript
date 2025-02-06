/*let age=18;
if(age>=18){
    console.log("eligible for voting");
}
else {
    console.log("not eligible for voting");
}*/

//3.if else if
let marks =80;
if(marks>90){
    console.log("garde:A");
}
else if (marks>=75){
    console.log("garde:B");
}
else if (marks>=50){
    console.log("garde:C");
}
else if (marks>=35){
    console.log("garde:D");
}
else{
    console.log("fail");
}

//4.Ternary Operator
let age=20;
let status =(age>=18)? "adult":"minor";
console.log(status);