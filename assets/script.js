// Assignment Code
var generateBtn = document.querySelector("#generate");

// Prompts for asking password requirements
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

function lowerCasePrompt () {
  let lowerCase = prompt ("Do you want to include lowercase?")
  switch(lowerCase.toLowerCase()) {
    case "yes":
    alert("You have selected to include lowercase")
    break;
    case "no":
    alert("You have selected not to include lowercase")
    break;
    default:
      alert("Please enter yes or no")
    lowerCasePrompt()
  }
  }



/*if (passwordLength === "") {
  alert("You must enter a number between 8 and 124")
    } else if (passwordLength < 8) {
  alert("Password should be at least 8 characters") 
      } else if (passwordLength > 124 ) {
      alert("Password can't be any more than 124 characters")
    } 
  }
  */

  /*
  alert("You have selected your password to be " + passwordLength + " characters long")
  passwordPrompt()
  */

/* let lowerCase = prompt ("Do you want to include lowercase?\n Type yes or no and press ok",
"yes")
let upperCase = prompt ("Do you want to include uppercase?\n Type yes or no and press ok", 
"yes")
let numericChar = prompt ("Do you want to include numbers?\n Type yes or no and press ok",
"yes")
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
