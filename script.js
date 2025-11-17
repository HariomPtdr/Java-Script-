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

// for (let i = 0; i < 50; i++){
//     console.log(1);
// }

// const obj = {
//     name : "Hariom",
//     age : 21,

// }

// class Rectangle {
//    constructor(width, height, color) {
// 	    this.width = width;
// 	    this.height = height;
// 	    this.color = color; 
//    }
   
//    area() {
// 	   const area = this.width * this.height;
// 		 return area;
//    }
   
//    paint() {
// 			console.log(`Painting with color ${this.color}`);
//    }
   
// }

// const rect = new Rectangle(2, 4, "red")
// const area = rect.area();
// rect.paint();
// console.log(area);

// for(let i = 1; i < 11;i++){
//     console.log(i);
// }

// for(let i = 1; i < 21;i++){
//     if(i%2===0){
//         console.log(i);
//     }
// }

// let num = +prompt(" Enter a number");
// if(num === 12){
//     console.log(" it is a number");
// }else{
//     console.log("It is not a number");
// }

// while(true){
//     console.log("Hariom")
// }
// let attempt = 0;
// let password = "Hariom";
// let userPassword = prompt("Enter the password");
// attempt++;

// while(password !== userPassword){
//     if(attempt === 3){
//         console.error("Account Locked")
//         break;
//     }
//      userPassword = prompt(" Invalid password Please Enter the  correct password");
//         attempt++;
    
// }

// const PASSWORD = "Hariom";
// const MAX_ATTEMPTS = 3;

// for (let attempt = 1; attempt <= MAX_ATTEMPTS; attempt++) {
//   const input = prompt(`Enter password (attempt ${attempt} of ${MAX_ATTEMPTS}):`);

//   // If user clicks Cancel
//   if (input === null) {
//     console.log("User cancelled password entry.");
//     break;
//   }

//   // Normalize if you want to ignore leading/trailing spaces:
//   const entered = input.trim();

//   if (entered === PASSWORD) {
//     alert("Access granted. Welcome!");
//     console.log("Access granted.");
//     break;
//   }

//   // Wrong password handling
//   const remaining = MAX_ATTEMPTS - attempt;
//   if (remaining === 0) {
//     console.error("Account locked. No attempts left.");
//     alert("Account locked. Please contact support.");
//   } else {
//     alert(`Invalid password. ${remaining} attempt(s) remaining.`);
//     console.warn(`Invalid password. ${remaining} attempt(s) left.`);
//   }
// }
// let count = 0;

// while (true) {
//   const input = prompt("Enter something (type 'stop' to end):");
  
//   if (input === null) break; // user pressed cancel
//   const word = input.trim().toLowerCase();

//   if (word === "stop") break;
//   if (word === "yes") count++;

//   console.log(`Current 'yes' count: ${count}`);
// }

// console.log(`✅ Final 'yes' count: ${count}`);

// async function login() {
//   const username = document.getElementById('username').value;
//   const password = document.getElementById('password').value;

//   const res = await fetch('http://localhost:5000/login', {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify({ username, password })
//   });

//   const data = await res.json();

//   const message = document.getElementById('message');
//   message.textContent = data.message;
//   message.style.color = data.success ? 'green' : 'red';
// }


// let h1 = document.querySelector("h1");
// h1.remove();


// const crypto = require('crypto');
// const fs = require('fs');

// // Generate RSA key pair
// const { publicKey, privateKey } = crypto.generateKeyPairSync('rsa', {
//   modulusLength: 2048, // key size
//   publicKeyEncoding: {
//     type: 'spki', // recommended for public keys
//     format: 'pem'
//   },
//   privateKeyEncoding: {
//     type: 'pkcs8', // recommended for private keys
//     format: 'pem'
//   }
// });

// // Save to files (optional)
// fs.writeFileSync('public_key.pem', publicKey);
// fs.writeFileSync('private_key.pem', privateKey);

// console.log('✅ Keys generated successfully!');
// console.log('Public Key:', publicKey);
// console.log('Private Key:', privateKey);

// (async () => {
//   try {
//     // get the platform's SubtleCrypto implementation
//     let subtle;
//     if (typeof crypto !== "undefined" && crypto.subtle) {
//       subtle = crypto.subtle;
//     } else {
//       // Node.js fallback: require('crypto').webcrypto.subtle
//       const nodeCrypto = require && typeof require === "function" ? require("crypto") : null;
//       if (nodeCrypto && nodeCrypto.webcrypto && nodeCrypto.webcrypto.subtle) {
//         subtle = nodeCrypto.webcrypto.subtle;
//       } else {
//         throw new Error("Web Crypto API (subtle) is not available in this environment.");
//       }
//     }

//     // helper: Uint8Array -> Base64
//     const uint8ToBase64 = (u8) => {
//       if (typeof Buffer !== "undefined") {
//         return Buffer.from(u8).toString("base64");
//       }
//       let binary = "";
//       for (let i = 0; i < u8.length; i++) binary += String.fromCharCode(u8[i]);
//       return btoa(binary);
//     };

//     // helper: Base64 -> Uint8Array
//     const base64ToUint8 = (b64) => {
//       if (typeof Buffer !== "undefined") {
//         return new Uint8Array(Buffer.from(b64, "base64"));
//       }
//       const binary = atob(b64);
//       const arr = new Uint8Array(binary.length);
//       for (let i = 0; i < binary.length; i++) arr[i] = binary.charCodeAt(i);
//       return arr;
//     };

//     // 1. Generate RSA key pair
//     const keyPair = await subtle.generateKey(
//       {
//         name: "RSA-OAEP",
//         modulusLength: 2048,
//         publicExponent: new Uint8Array([1, 0, 1]),
//         hash: "SHA-256",
//       },
//       true,
//       ["encrypt", "decrypt"]
//     );

//     // 2. Encrypt message
//     const message = new TextEncoder().encode("Confidential Data");
//     const encrypted = await subtle.encrypt({ name: "RSA-OAEP" }, keyPair.publicKey, message);

//     // 3. Convert encrypted bytes to Base64
//     const encryptedBase64 = uint8ToBase64(new Uint8Array(encrypted));
//     console.log("Encrypted (Base64):", encryptedBase64);

//     // 4. Decode Base64 back to bytes
//     const encryptedBytes = base64ToUint8(encryptedBase64);

//     // 5. Decrypt the message
//     const decrypted = await subtle.decrypt({ name: "RSA-OAEP" }, keyPair.privateKey, encryptedBytes);
//     console.log("Decrypted:", new TextDecoder().decode(decrypted));
//   } catch (err) {
//     console.error("Crypto error:", err);
//   }
// })();


// console.log(0.1 + 0.2); // 0.30000000000000004
// console.log((0.1 + 0.2).toFixed(2)); // "0.30"

// console.log(true + true);// 2
// console.log(true + "false");// "truefalse"
// console.log(false + "4");// "false4"
// console.log(false - true);// -1
// console.log(true + undefined);// NaN
// console.log(false + null);// 0
// console.log("5" - true);// 4
// console.log("5" + true);// "5true"
// console.log("5" - false);// 5
// console.log("5" + false);// "5false"
// console.log(null + undefined);// NaN
// console.log(null + 5);// 5
// console.log(undefined + 5);// NaN
// console.log([] + []);// ""
// console.log([] + {});// "[object Object]"
// console.log({} + {});// "[object Object][object Object]"
// console.log({} + []);// "[object Object]"
// console.log([] == 0);// true
// console.log([] == ![]);// true
// console.log({} == 0);// false
// console.log({} == !{});// false
// console.log( NaN == NaN );// false
// console.log( NaN === NaN );// false
// console.log( typeof NaN );// "number"
// console.log( isNaN(NaN) );// true
// console.log( isNaN("hello") );// true
// console.log( isNaN(undefined) );// true
// console.log( isNaN({}) );// true
// console.log( isNaN([]) );// false
// console.log(Number(undefined));// NaN
// console.log(Number(null));// 0
// console.log(Number(true));// 1
// console.log(Number(false));// 0
// console.log(Number("123"));// 123
// console.log(Number("123abc"));// NaN
// console.log(Number([]));// 0
// console.log(Number([1,2,3]));// NaN

// console.log([] ==! []);// true



// console.log(0/0);
// console.log(1/0);
// console.log(-1/0);
// console.log("hello"/2);
// console.log(1/+0);
// console.log(1/-0);
// console.log(+0 === -0);

// for(var i=0;i<3;i++){
//   setTimeout(()=>console.log(i),1000);
// }



// let age = prompt("Enter Your age");

// if (age === null){
//     console.error("you cancelled it. Please enter a valid age");
// }
// else if(age.trim() === ""){
//     console.log("please enter something");
// }
// else {
//     age = Number(age);
//     if(isNaN(age)){
//         console.error("Please enter age in the form of Number");
//     }
//     else {
//         if (age < 0){
//             console.error("age can't be negative");
//         }
//         else if(age > 18){
//             console.log("You are eligible for vote ");
//         }else{
//             console.log("you are not Eligible for vote");
//         }
//     }
// }

// for(let i = 1; i < 11; i++){
//     console.log(`2 x ${i} = ${2*i}`);
// }

// let count = 0;
// function impure(a){
//     count++;
//     console.log(a + count);
// }
// impure(2);
// impure(2);
// impure(2);

// let salary = [1000, 2000, 3000];
// let ans = salary.reduce(function(acc, val){
//     return acc + val; 
// },0);
// console.log(ans);

// let names = ["Hariom", "harsh", "script", "anuj"];
// let 
// console.log(this);
// function func(){
//     console.log(this);
// }
// func();
// console.log("Helo");
// function greet(){
//     console.log("Hello Bhai sab");
// }
// greet();
// function func(){
//     return {
//         name : "Hariom"
//     }
// }
// console.log(func());

// let a = 3;

// if (a){
//     console.log("truthy");
// }else {
//     console.log("falsy");
// }

// let x = 10;
// let y = x++;
// console.table({ x, y});

//  for (var i = 1; i <= 3; i++) {
//   setTimeout(() => console.log(i), 1000);
// }

// let a = [1, 2, 3, 4];
// a.push(++a[2]);
// console.log(a);

// let a = [1,2,3,3,4];

// let b = a.map((num) => num %2 == 0);
// console.log(b);
// console.log(a);
// for (let i = 0; i < 3; i++){
// setTimeout(() => console.log(i), 1000);
// }
// for (let i = 0; i < 3; i++) 
//   debugger;
//   console.log("hi")
//   setTimeout(() => console.log(i), 1000);

//  function getImployInfo(one, two, three){
//     console.log(one);
//     console.log(two);
//     console.log(three);
//  }
//  const person =  "hariom";
//  const age = 25;


//  getImployInfo`the age of ${person} is ${age}`
// function safe(strings, ...values) {
//   return strings.reduce((acc, str, i) => {
//     const v = values[i] !== undefined ? String(values[i]).replace("<", "&lt;") : "";
//     return acc + str + v;
//   }, "");
// }

// const name = "<script>";
// console.log( safe`Hello ${name}, welcome!` );
// function color(strings, ...values){
//   return strings.map((str, i) => str + (values[i] ? `\x1b[33m${values[i]}\x1b[0m` : "")).join("");
// }

// console.log(color`User ${person} is ${age} years old.`);
// console.log(null === 0)
// console.log(null == 0)
// console.log(null >= 0)
// console.log(undefined)

// console.log(undefined === 0)
// console.log(undefined == 0)
// console.log(undefined >= 0)
// console.log("2" == 2)

// primitive datatype

// null
// undefined
// bigInt
// NaN
// string
// boolean
// symbol
// number
// const player = {
//   name: "Hari",
//   score: 0,

//   addScore(points) {
//     player.score += points;
//   }
// };

// player.addScore(10);
// console.log(player.score); // 10


