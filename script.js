var intro = alert("Welcome to our site!");
var first_name = prompt("What is your name?", "Fazliddin").trim();
var surname = prompt("What is your last name?", "Rustamov").trim();
var age = prompt("How old are you?", "15 years old").trim();
var profession = prompt("What is your profession?", "Pupil").trim();
var home = prompt("Where do you live?", "Tashkent").trim();
var conclusion =  alert("Thanks for your choice");

console.log(`Full name: ${first_name} ${surname}.`);
console.log(`Age: ${age}.`);
console.log(`Profession: ${profession}.`);
console.log(`Location: ${home}.`);

console.log(`Full name: ${first_name} ${surname}.
Age: ${age}.
Profession: ${profession}.
Location: ${home}.`);

console.log("First name " + first_name + ", Last name " + surname + "\n" + "Profession: " + profession + "\n" + "Age: " + age + "\n" + "Location: " + home);