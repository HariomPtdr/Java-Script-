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

// //assignment Write a function that takes an array of numbers as input, and returns a new array with only even values. Read about filter in JS
// const  number = [1, 2, 4, 6, 6, 5, 3, 43, 23];
// const result = number.filter( (num) => num % 2 === 0);
// console.log(result);

// // Write a function that takes an array of users as inputs and returns only the users who are more than 18 years old

// const users = [{
// 		name: "Hariom",
// 		age: 20
// 	}, {
// 		name: "patidar",
// 		age: 22
// 	}
// ]
// const result = users.filter( (user) => user.age > 18);
// console.log(result);

// // Assignment
// // Create a function that takes an array of objects as input,
// // and returns the users whose age > 18 and are male
// const user = [ {
//     name : "Hariom",
//     age : 20,
//     gender : "male"
// },{
//     name : "Harsh",
//     age : 18,
//     gender : "male"
// },{
//     name : "Kiran",
//     age : 20,
//     gender : "female"
// }
// ]
// const result = user.filter( (user) => user.gender === "male" && user.age > 18);
// console.log(result);

// function sum(a,b){
//     return a+b;
// }
// let ans = sum(3,5);
// console.log(ans);

// function sum(a){
//     let ans = 0;
//     for(let i = 0; i <= a; i++){
//         ans += i;
//     }
//     console.log(ans);
// }
// sum(5);

// function sum(n){
//     let ans = 0;
//     for(let i = 0; i <= n; i++){
//         ans += i;
//     }
//     return ans;
// }
// const ans1 = sum(10);
// console.log(ans1);

// const ans2 = sum(1000);
// console.log(ans2);

// const ans3 = sum(1435);
// console.log(ans3);

// const fs = require("fs");

// const contents = fs.readFileSync("a.txt", "utf-8");
// console.log(contents);
