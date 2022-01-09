// Assignment Code
var generateBtn = document.getElementById("btn");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}


// List of characters the user can select from 
const upperCaseChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
const lowerCaseCar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const specialCharList = ["!","#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[",","^",_","`","{","|","}","~"]
const numericalList = [1,2,3,4,5,6,7,8,9,0]

// Empty string that the password choices will be pushed into
var pwChoices = []

// Empty string that the final password will be created it
var finalPW = ""

// Generate Password function 
function generatePassword() {
// 1. Prompt user for criteria. 
let passwordLength = 0
//  a. 8 =< password length =< 124. If not, prompts will appear and user will have to enter characters again
 passwordLength = prompt("How many characters do you want your password to be?" , "")
 if (parseInt(passwordLength) < 8 || parseInt(passwordLength)> 124  ) {
  alert("Your password must be more than 8 characters and less than 124")
  generatePassword () 
    } 
    // If the user enters a password length that is not a number or doesn't enter anything, a prompt will appear asking to input password length again
    else if (isNaN(parseInt(passwordLength)) || passwordLength == "") {
      alert("Please enter a number between 8 and 124")
    generatePassword ()
      } else  {
    console.log("Password length is " + passwordLength + " characters long")
      }

//  b. Upper case
var upperCase = confirm("Would you like to include upperCase?\n Press okay to include uppercase or cancel to NOT include uppercase")

//  c. lower case 
var lowerCase = confirm("Would you like to include lowercase?\n Press okay to include lowercase or cancel to NOT include lowercase")


//  d. special characters
var specialChar = confirm("Would you like to include special characters\n Press okay to include special characters or cancel to NOT include special characters")


//  e. numerical characters
var numericalChar = confirm("Would you like to include numerical characters?\n Press okay to include numerical characters or cancel to NOT include numerical characters")

// 2. Validate inputs 
if (upperCase == false &&
  lowerCase == false &&
  specialChar == false &&
  numericalChar == false) {
    alert("You must choose at least one ")
    return ""
  }

// 3. Generate password
// If the user selects uppercase characters, uppercase pushed into the password array
if (upperCase == true ) {
 pwChoices = pwChoices.concat(upperCaseChar)
 }

//  If the user selects lowercase characters, lowercase pushed into the password array
 if (lowerCase == true) {
   pwChoices = pwChoices.concat(lowerCaseCar)
 }

//  If the user selects special characters, special char pushed into the password array
 if (specialChar == true) {
   pwChoices = pwChoices.concat(specialCharList)
 }

//  if the user selects numerical, numbers pushed into the password array
 if (numericalChar == true) {
  pwChoices = pwChoices.concat(numericalList)
}

// The userChoices are the arrays created by the user choices.
var userChoices = pwChoices
console.log(userChoices," final user choices ")

// For loop to randomly select characters in the userchoices array.
for (let i = 0, n=userChoices.length; i < parseInt(passwordLength); i++) {
  finalPW += userChoices[Math.floor(Math.random() *n)]
}

return finalPW
}







