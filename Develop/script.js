
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


// Assignment Code
//var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
//generateBtn.addEventListener("click", writePassword);

const choiceResult =document.getElementById('password');
const lengthchoice =document.getElementById('length');
const upperchoice =document.getElementById('upper');
const lowerchoice =document.getElementById('lower');
const numberschoice =document.getElementById('num');
const symbolschoice =document.getElementById('spec');
const generateBtn =document.getElementById('generate');
//Checking to see what is in the boxes


//Generate Listen
generateBtn.addEventListener("click", () => {
  const lengthValue = lengthchoice.value;
  const hasLower = lowerchoice.checked;
  const hasUpper = upperchoice.checked;
  const hasNumber = numberschoice.checked;
  const hasSpecial = symbolschoice.checked;

 choiceResult.innerText = writePassword(hasLower, hasUpper, hasNumber, hasSpecial, lengthValue);
})



// Object containing all generator functions
const randomFunc = {
  lower: randomLower,
  upper: randomUpper,
  number: randomNumber,
  special: randomSymbol,
};

//Generate Function

function writePassword (lower, upper, num, spec, length) {

//Make Pass Variable
//Filter unchecked boxes
//Loop until length is reached through generator func for each type.
//Finalize password variable and return result

let generatedPW = " ";

const typesCount = lower + upper + num + spec ;

console.log('typesCount: ', typesCount);

//Check 
const checkArr = [{ lower }, { upper }, { num }, { spec }].filter
(
  item => Object.values(item)[0]
);

if (typesCount === 0) {
  return '';
}

for (let i = 0; i < length; i += typesCount) {
  checkArr.forEach(type => {
    const funcName = Object.keys(type)[0];
    console.log(funcName)

    generatedPW += randomFunc [funcName]();
  });
}

//Running a loop through the checked variables



console.log (generatedPW);


}


