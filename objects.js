let student ={name:"Uday",age:23}
console.log(student.age);
console.log(student["name"]);
student.age=25;
console.log(student.age);
student.city="tirupati";
console.log(student.city);
delete student.age;
console.log(student);