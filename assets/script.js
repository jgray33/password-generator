// Assignment Code
var generateBtn = document.querySelector("#generate");


function passwordPrompt () {
let passwordLength = prompt ("Length of password",
"At least 8  characters and no more than 124 characters") 
}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}document.getElementById("generate")

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
