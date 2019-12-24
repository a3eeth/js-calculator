var currentVal;
var outVal;

document.querySelector("#one").addEventListener("click", function() {
  document.querySelector(".output").textContent += '1';
});
document.querySelector("#two").addEventListener("click", function() {
  document.querySelector(".output").textContent += '2';
});
document.querySelector("#three").addEventListener("click", function() {
  document.querySelector(".output").textContent += '3';
});
document.querySelector("#four").addEventListener("click", function() {
  document.querySelector(".output").textContent += '4';
});
document.querySelector("#five").addEventListener("click", function() {
  document.querySelector(".output").textContent += '5';
});
document.querySelector("#six").addEventListener("click", function() {
  document.querySelector(".output").textContent += '6';
});
document.querySelector("#seven").addEventListener("click", function() {
  document.querySelector(".output").textContent += '7';
});
document.querySelector("#eight").addEventListener("click", function() {
  document.querySelector(".output").textContent += '8';
});
document.querySelector("#nine").addEventListener("click", function() {
  document.querySelector(".output").textContent += '9';
});
document.querySelector("#zero").addEventListener("click", function() {
  document.querySelector(".output").textContent += '0';
});
document.querySelector("#reset").addEventListener("click", function(){
  clearMemory();
  clearOutput();
});
// ADDITION
document.querySelector("#plus").addEventListener("click", function() {
  addToHistory();
  clearOutput();
  //display in function history
  document.querySelector(".history").textContent += " + ";
});
// SUBSTRACTION
document.querySelector("#minus").addEventListener("click", function() {
  addToHistory();
  clearOutput();
  document.querySelector(".history").textContent += " - ";
});
// DIVISION
document.querySelector("#divide").addEventListener("click", function() {
  addToHistory();
  clearOutput();
  document.querySelector(".history").textContent += " / ";
});
// MULTIPLICATION
document.querySelector("#multiply").addEventListener("click", function() {
  addToHistory();
  clearOutput();
  document.querySelector(".history").textContent += " * ";
});
// CALCULATE RESULT
document.querySelector("#result").addEventListener("click", function() {
  // use BODMAS
  // search split and prioritize?
});
  
function addToHistory() {
  currentVal = parseInt(document.querySelector(".output").innerHTML);
  document.querySelector(".history").textContent += currentVal;  
}
function clearOutput() {
  document.querySelector(".output").textContent = "";
}
function clearMemory() {
  currentVal = 0;
  outVal = 0;
  document.querySelector(".history").textContent = "";
}



// KEYPRESS STUFF FOR GIGGLES
// 1-9 ~ 49-57
// /*-+enter ~ 42 45 43 13
// = ~ 61
// Esc ~ 
// storing outputonkey as a var
var outputKey = document.querySelector(".output");
window.addEventListener("keypress", function(e) {
//   console.log(e.keyCode);
//   if(e.keyCode === 49) {
//     outputKey.textContent += "1";
//   }
  //this is kinda okay for now because addToHistory has parseInt
  //fix NaN
  outputKey.textContent += e.key;
  console.log(e.keyCode);
  
  if(e.keyCode === 13) {
    addToHistory();
  }
  
}, false);