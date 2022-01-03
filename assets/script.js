// Assignment Code
var generateBtn = document.querySelector("#generate");

// First prompt: password length
function passwordPrompt () {
let passwordLength = prompt ("Length of password\n Password must be at least 8 characters and no more than 124 characters",
"Enter a number and press ok") 
const x = passwordLength
switch(true) {
  case (x < 8):
  alert("Passwords can't be less than 8 characters long")
  passwordPrompt()
  break;
  case ( x >= 8 && x < 124):
  alert("You have selected your password to be " + passwordLength + " characters long")
  lowerCasePrompt()
  break;
  case ( x > 124):
    alert("Passwords can't be more than 124 characters")
    passwordPrompt()
    break;
  default:
    alert("You have not entered a number")
    passwordPrompt()
    }
}

// Prompt asking if user wants lowercase to be included
function lowerCasePrompt () {
  let lowerCase = prompt ("Do you want to include lowercase?")
  switch(lowerCase.toLowerCase()) {
    case "yes":
    alert("You have selected to include lowercase")
    upperCasePrompt()
    break;
    case "no":
    alert("You have selected NOT to include lowercase")
    upperCasePrompt()
    break;
    default:
      alert("Please enter yes or no")
    lowerCasePrompt()
  }
  }

// Prompt asking if user wants uppercase to be included
function upperCasePrompt () {
  let upperCase = prompt ("Do you want to include uppercase?")
  switch(upperCase.toLowerCase()) {
    case "yes":
    alert("You have selected to include uppercase")
    numericalCharPrompt()
    break;
    case "no":
    alert("You have selected NOT to include lowercase")
    numericalCharPrompt()
    break;
    default:
    alert("Please enter yes or no and press OK")
    upperCasePrompt()
  }
}

// Prompt asking if user want to include numerical values
function numericalCharPrompt () {
  let numericalChar = prompt ("Do you want to include numerical values?")
  switch(numericalChar.toLowerCase()) {
    case "yes":
    alert("You have selected to include numerical values")
    specialCharPrompt()
    break;
    case "no":
    alert("You have selected NOT to include numerical values")
    specialCharPrompt()
    break;
    default:
      alert("Please enter yes or no and press OK")
      upperCasePrompt()
  }
}

function specialCharPrompt () {
  let specialChar = prompt ("Do you want to include special characters?")
  switch(specialChar.toLowerCase()) {
    case "yes":
      alert("You have selected to include special characters")
    break;
    case "no":
      alert("You have selected NOT to include special characters")
      break;
      default:
        alert("Please enter yes or no and press OK")
        specialCharPrompt()
  }
}

/* 
let specialChar = prompt ("Do you want to include special characters?\n Type yes or no and press ok", 
"yes")
}
*/
 




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}document.getElementById("generate")

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
