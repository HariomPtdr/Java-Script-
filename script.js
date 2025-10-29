// let nm = prompt ("Enter your name:", "Guest");
// console.log(nm);
//alert("Hello, " + nm + "!");
 
// let city = "Indore"; city;
// alert("HI");

// let y = (5 +10) * 2;
// console.log(y);

// var fistName = "Hariom";
// fistName = 10;
// fistName = "prtidar";
// fistName = true;
// console.log(fistName);


// let user1 = "Hariom";
// let users = ["hariom", "patidar", user1];
// console.log(users[2]);


// function sum( num1, num2){
//     return num1 + num2 ;
// };
// let ans = sum("hariom" , "patidar");
// console.log(ans);

// function canvote(age){
//     if( age > 18){
//         return true;
//     }
//     else {
//         false;
//     }
// }
// let age = 19;
// let ans  = canvote(age);
// console.log(ans);

// let number = 10;
// if (number%2 == 0){
//    console.log("Number is even");
// }else {
//     console.log("Number is odd");
// }

// function sum(a){
//     let ans = 0;
//     for (let i = 0; i <= a; i++){
       
//         ans = ans+i;
//     }
//     return console.log(ans);
// }

// sum(10);

// function sum(a){
//     console.log(a*(a+1)/2);
// }
// sum(10);

// function greet(user){
//     console.log("Hi " + user.name + " your age is " + user.age );

// }

// let user = {
//     name : "Hariom",
//     age : "20"
// }

// greet(user);


// function greet(user){
//     let gen;
//     if (user.gender == "male"){
//         gen = "Mr";
//     }else if (user.gender == "female"){
//         gen = "Mrs";
//     }else {
//         gen = "Other";
//     } 
//     console.log("Hi " + gen + " " + user.name + ", your age is " +user.age);
//     if (user.age > 18 ){
//         console.log("You are eligible for vote ");
//     }
// }
// let user = {
//     name : "Hariom",
//     age : "20",
//     gender : "male"
// }

// greet(user);

// let arr  = [ "Hariom", 20, {
//     name : "Hariom",
//     age : 20
// }];
// for (let i = 0; i < arr.length; i++){
//     console.log(arr[i]);

// }

// assgnment return 
const  number = [1, 2, 4, 6, 6, 5, 3, 43, 23];
const result = number.filter( (num) => num % 2 === 0);
console.log(result);
