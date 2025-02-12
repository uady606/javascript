let numbers =[1,2,3,4];
numbers.forEach(nums=>console.log(nums+1));
let doubled = numbers.map(nums=>nums*2);
let evennums = numbers.filter(nums=>nums%2==0);
console.log(doubled);
console.log(evennums);