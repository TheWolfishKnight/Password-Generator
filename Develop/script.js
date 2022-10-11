// Assignment Code
//var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
//generateBtn.addEventListener("click", writePassword);


const choiceResult =document.getElementById('password');
const lengthchoice =document.getElementById('len');
const upperchoice =document.getElementById('upper');
const lowerchoice =document.getElementById('lower');
const numberschoice =document.getElementById('num');
const Symbolschoice =document.getElementById('spec');
const generateBtn =document.getElementById('generate');


generateBtn.addEventListener("click", () => {
  const length = lengthchoice.value;

  console.log(length);
})


// Object containing all generator functions
const randomFunc = {
  lower: randomLower,
  upper: randomUpper,
  number: randomNumber,
  special: randomSymbol,
};




//Character Generators

//Grabs random lowercase Letter
function randomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
//Grabs random Uppercase Letter
function randomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
//Grabs random Number
function randomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
//Grabs random Symbol
function randomSymbol() {
  const symbols= '!@#$%^&*(){}<>,.[]|-=+_'
  return symbols[(Math.floor(Math.random() * symbols.length))]
}
