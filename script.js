// Assignment Code
var generateBtn = document.querySelector("#generate");
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var lowerCase = "abcdefghijklmnopqrstuvwxyz"
var number = "0123456789"
var symbol = "!@#$%^&*_-+="
var charChoices = ""

function generatePassword() {
  charChoices = ""

  var lengthChoice = prompt("Character length:")
  console.log(lengthChoice)
  if (lengthChoice < 8 || lengthChoice > 128) {
    alert("Password must be at least 8 and no greater than 128 characters.")
  return
  }

  var lowerChoice = confirm("Include Lower Case Characters:")
  console.log(lowerChoice)
  if (lowerChoice === true) {
    charChoices = charChoices+lowerCase
    console.log(charChoices)
  }

  var upperChoice = confirm("Include Upper Case Characters:")
  console.log(upperChoice)
  if (upperChoice === true) {
    charChoices = charChoices+upperCase
    console.log(charChoices)
  }

  var numberChoice = confirm("Include Numbers:")
  console.log(numberChoice)
  if (numberChoice === true) {
    charChoices = charChoices+number
    console.log(charChoices)
  }

  var symbolChoice = confirm("Include Symbols:")
  console.log(symbolChoice)
  if (symbolChoice === true) {
    charChoices = charChoices+symbol
    console.log(charChoices)
  }

  if (lowerChoice === false && upperChoice === false && numberChoice === false && symbolChoice === false) {
    alert("You must choose at least one criteria.")
    return
  }

  let password = ""
  for (let i = 0; i < lengthChoice; i++) {
    Math.floor(Math.random() * charChoices.length)
    var randomNum = Math.floor(Math.random() * charChoices.length)
    charChoices.charAt(randomNum)
    password+=charChoices.charAt(randomNum)
    console.log(password)
  }
  return password
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);