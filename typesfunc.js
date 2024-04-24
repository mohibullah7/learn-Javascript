// Types of declartion of function there are three ways to declare function By name function single arrow function and multi arrow function 

// types of funtions
// 1 non parameteric functions or named functions
// 2 parametric functions 
// default parametric functions



function addNumb() {

  let x = 400;
  let y = 300;
  let num3 = 400;
  let sum = x + y;
  console.log(sum);
  // return "you have sucessfully applied ";
  return sum;
}
// addNumb();
let result = addNumb();
console.log(result);

let firstFunc = () => 500 + "this is string";
let secondfunc = () => "this is my second function" + 8000;
let save = secondfunc();
// console.log(secondfunc());
console.log(save);

//some more experiments

let thirdsingle = () => "thi is not getting another value" + 9000;
let saved3rd = thirdsingle();
thirdsingle();
console.log(saved3rd);
// console.log(thirdsingle());

//another

let thisSingleFunc = () => 500 + "this is number " + "this is string";
let store = thisSingleFunc();
console.log(store);

// Multi Line Functions 

let firstMultiLine = () => {
  const h = 30;
  const o = 2;
  const l = 30;
  const e = 'this  is const value'
  if (h == o) {
    console.log("login")
  }
  else if (h != o) {
    console.log('try again')
  }
  else if (l === h)
    console.log("both are equal")
  //  return firstMultiLine();
}
firstMultiLine();
// let showmulti=firstMultiLine();
// console.log(firstMultiLine());

//Now lets discuss types of functions

//this is non parametric function because no parameter is passed throuhh it
function typesfunc() {
  let khan = ' mohib khan '
  age = 24;
  cnic = 232323232;
  let person = age + cnic;
  console.log(person);
}
typesfunc();

//Now parametric funnction 

function parametricFunc(r, b) {
  // let r =  30 ;
  // b = 40 ;
  let g = r + b;
  console.log(g);
}
let v = 3;
e = 90;
// parametricFunc(30,20);
parametricFunc(v, e);

// return function
function parametricFunc(ol , el ) {
  // let r =  30 ;
  // b = 40;

//   let ol = 40;
//  let  el = 100;
  
  let pl = ol + el;
  pl = ol/el;
  console.log(pl);
  //  return "this is my message" ;
  // return p;

}
let a = 40;
b = 100;
parametricFunc(a,b);
// let o = 3;
// e = 90;
// parametricFunc(30,20);
// parametricFunc(v,e);
// let container= parametricFunc();
// console.log(container);