// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  console.log("button clicked")
// 1. Prompt user for criteria
//  a. 8 =< password length =< 124
var passwordLength = prompt("How many characters do you want your password to be?" , "")



//  b. Upper case
var upperCase = confirm("Would you like to include upperCase?", "")

//  c. lower case 
var lowerCase = confirm("Would you like to include lowercase?", "")


//  d. special characters
var specialChar = confirm("Would you like to include special characters")
//  e. numerical characters
// 2. Validate inputs 
// 3. Generate password
// 4. Return password
  return "Password"
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);