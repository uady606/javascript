//scopes determines where  a variable can be accessed in a java scirpt program 

// 1. Global Scope
var a="iam global scope";
function test() {
    console.log(a);//accessible inside the function 
}
test();
console.log(a);//accessible outside the function

//2.function/local scope
function local(){
    var b="iam local scope";
    console.log(b);
}
local();
/*console.log(b);//b is not defined outside the function */

//3.blocked scope(using let or const is only accessible inside that block)
{
    let block="only exists inside the block";
    console.log(block);
}
//console.log(block);

//4.lexical scope 
function outer(){
    let outerVar="iam from outer function";
    function inner(){
        console.log(outerVar);
    }
    inner();
}
outer();