console.log('hello world ')

// declare a variable and assign it a prompt
// put the mail inside the mail box
// var prompt = prompt('what is your name?');
console.log(prompt)

// if (10 > 9) {
//   console.log('yes 10 is greater than 9');
// }else {
//   console.log('this is false')
// }
 
var age = prompt('what is your age?');

if (age < 18 && typeof age === 'string'){
 alert ('you are a minor');
 } else if (age >= 18 && age === typeof age <= 60){
   alert ('you are an adult');
 } else if (age > 60){
   alert('damn your old')
 }