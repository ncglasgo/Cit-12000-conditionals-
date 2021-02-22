var containerEle = document.body.querySelector("container");

var num1=Number(prompt("Enter a Number."));

var op=(prompt("Enter a Operator. ie: + - * /"));

var num2=Number(prompt("Enter another Number."));

let result;

if (op == '+'){
  result = num1 + num2
}
else if (op == '-'){
  result = num1 - num2
}
else if (op == '*'){
  result = num1 * num2
}
else if (op == '/'){
  result = num1 / num2
}
else if (op = /^[0-9a-zA-Z]+$/){
  document.write(" Operator is not a valid operator, cannot compute equation. </br>");
}

if(isNaN(num1)){
  document.write(" First number is not a number, cannot compute equation. </br>");
}else if(isNaN(num2)){
  document.write(" Second number is not a number, cannot compute equation. </br>");
}else{
document.write( + num1 + op + num2 + ' = ' + result);
}