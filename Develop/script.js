//Array with characters and their designation
const keys = {
  upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lowerCase: "abcdefghijklmnopqrstuvwxyz",
  number: "1234567890",
  symbol: "!@#$%^&*()_+<>,.?",
};

// Function to pull the actual characters
const getKey = [
  function upperCase() {
    return keys.upperCase[Math.floor(Math.random() * keys.upperCase.length)];
  },
  function lowerCase() {
    return keys.lowerCase[Math.floor(Math.random() * keys.lowerCase.length)];
  },
  function number() {
    return keys.number[Math.floor(Math.random() * keys.number.length)];
  },
  function symbol() {
    return keys.symbol[Math.floor(Math.random() * keys.symbol.length)];
  },
];

//Check to see what is checked
function createPass() {
  const upper = document.getElementById("uppercase").checked;
  const lower = document.getElementById("lowercase").checked;
  const number = document.getElementById("numbers").checked;
  const symbol = document.getElementById("symbols").checked;
  if (upper + lower + number + symbol === 0) {
    alert("Please check at least one box!");
    return;
  }
  //Attempt to make password
  const passwordBox = document.getElementById("passwordBox");
  const length = document.getElementById("length");
  let password = "";
  // Checks to see what is checked and runs through the loop as many times as it needs to. Small error causes the length of the
  // password to be multiplied by how many boxes are checked.
  for (i = 0; i < length.value; i++) {
    if (upper) {
      var upperChecked = getKey[0];
      password = password + upperChecked();
    }
    if (lower) {
      var lowerChecked = getKey[1];
      password = password + lowerChecked();
    }
    if (number) {
      var numChecked = getKey[2];
      password = password + numChecked();
    }
    if (symbol) {
      var symbolChecked = getKey[3];
      password = password + symbolChecked();
    }
  }
  // Truncating to make sure password length is correct.
  function truncateString(str, num) {
    if (str.length <= num) {
      return str;
    }
    return str.slice(0, num);
  }

  password = truncateString(password, length.value);

  // let keytoAdd = getKey[Math.floor(Math.random() * getKey.Length)];
  // let isChecked = document.getElementById("keytoAdd").checked;
  // if (isChecked) {
  // password += keytoAdd();
  // }
  passwordBox.innerHTML = password;
}

var gen = document.getElementById("generate");

gen.addEventListener("click", createPass);
