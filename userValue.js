
console.log("linkd user value js file");

let firstEl = document.getElementById("first-name");
let lastEl = document.getElementById("last-name");

function getValue() {
 
  let value1 = Number(firstEl.value);
  let value2 = Number(lastEl.value);

 if(value1  !="" && value2 !=""){
  add(value1, value2);
  sub(value1, value2);
  multi(value1, value2);
  divid(value1, value2);
 }
 else{
  document.getElementById("outputSum").innerText="Please Enter Value";
  document.getElementById("outputSum").style.color="red";
 }
 

  // console.log(typeof st,lastName);
  clearInputs();
}
function clearInputs(){
  firstEl.value="";
  lastEl.value="";
}



// function output(a,b) {
//   let outputEl= document.getElementById("output");
//   let fullName=a+b
//   console.log(fullName);
//  outputEl.innerText="sum= "+fullName ;
//  outputEl.style.color="green";
//  outputEl.style.backgroundColor="wheat"

// }

function add(v1, v2) {
  let sum = v1 + v2;
  document.getElementById("outputSum").innerText = "Sum=" + sum;
  document.getElementById("outputSum").style.color="black";
}
function sub(v1, v2) {
  let subtract = v1 - v2;
  document.getElementById("outputSub").innerText = "Substract=" + subtract;
}
function multi(v1, v2) {
  let multiple = v1 * v2;
  document.getElementById("outputMulti").innerText = "Multi=" + multiple;
}
function divid(v1, v2) {
  let divided = v1 / v2;
  document.getElementById("outputDivid").innerText = "Divid=" + divided;
}