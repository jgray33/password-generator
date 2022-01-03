// Assignment Code
var generateBtn = document.querySelector("#generate");


function passwordPrompt () {
let passwordLength = prompt ("Length of password\n Password must be at least 8 characters and no more than 124 characters",
"Enter a number and press ok") 
let lowerCase = prompt ("Do you want to include lowercase?\n Type yes or no and press ok",
"yes")
let upperCase = prompt ("Do you want to include uppercase?\n Type yes or no and press ok", 
"yes")
let numericChar = prompt ("Do you want to include numbers?\n Type yes or no and press ok",
"yes")
let specialChar = prompt ("Do you want to include special characters?\n Type yes or no and press ok", 
"yes")
}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}document.getElementById("generate")

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
