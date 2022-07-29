var intro = alert("Welcome to our party!");
var first_name = prompt("What is your name?", "Fazliddin").trim();
var age = prompt("How old are you?", "15").trim();
var minAge = 18;
if (age >= minAge) {
  alert ("You are welcome!")
} else {
  alert ("Do not be discouraged, you will come when you grow up!")
}
var conclusion =  alert("Thanks for your choice");

console.log(`First name: ${first_name}`);
console.log(`Age: ${age}.`);