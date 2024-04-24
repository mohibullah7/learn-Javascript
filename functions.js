console.log("linked function js file");
//There are four methods / syntax to declare function in JavaScript

// 1. named function declration

function add(){
  let a=5, b=4;
  let sum = a+b;
  console.log(sum +" add function/ named function");
}
add();

// 2. anonymus function declration
let anonymusFunc= function (){
  console.log(" I am anonymus function");
}
anonymusFunc();
//i. both named and anonymus function required the "function" keyword for declaretion
// ii. when function is assigned to variables then its name not needed, because the variable name will be the function name. if we will assign a name then its will be extra because we cann't call the function with its name when it is assigned to a variable. it will not give error when call with var name. but if you will try to call through function  name it will give syntax error.
//iii. you cannot declare anonymus function without variavble or any object property. it will give syntax error. anonymus function must assign to a variable or any object property name.


//3. arrow function 
// Important Note:
// Arrow functions must be asssign to a variable or object property like anonymus function but not need "function" keywords

//i. single statement arrow function
// it not need curcury brackets because it just can return a single statement. 
let singleStateArrFunc=()=>5+" "+"sigle"; 
// console.log("second statement");
let val3=singleStateArrFunc();
console.log(val3);

//i. Multi statement arrow function
//it needs curcury brackets to declare a scope for multiple statements

let multiStateArrFunc= ()=>{
let m=20, n=30, sum;
sum=m+n;
console.log("multi state arro function call", sum);
// return "Succefully excuted";
}
// let val=multiStateArrFunc();
// console.log(typeof val, val);


let thisSingleFunc=()=> 500 + "this is number "+"this is string";
let store = thisSingleFunc();
console.log(store);

let thisisMultiFunc=()=> {
  const num = 9000;

}