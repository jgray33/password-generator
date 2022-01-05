// Assignment Code
var generateBtn = document.querySelector("#generate");


const upperCaseChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
const lowerCaseCar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const specialCharList = ["!","#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[",","^",_","`","{","|","}","~"]
const numericalList = [1,2,3,4,5,6,7,8,9,0]

var pwChoices = []
var finalPW = ""

function generatePassword() {
  console.log("button clicked")
// 1. Prompt user for criteria
let passwordLength = 0
//  a. 8 =< password length =< 124
 passwordLength = prompt("How many characters do you want your password to be?" , "")
 if (parseInt(passwordLength) < 8 || parseInt(passwordLength)> 124  ) {
  alert("Your password must be more than 8 characters and less than 124")
  generatePassword () 
    } 
    else if (isNaN(parseInt(passwordLength)) || passwordLength == "") {
    generatePassword ()
    alert("Please enter a number between 8 and 124")
  } else  {
    console.log("Password length is" + passwordLength)
      }

//  b. Upper case
var upperCase = confirm("Would you like to include upperCase?\n Press okay to include uppercase or cancel to NOT include uppercase")

//  c. lower case 
var lowerCase = confirm("Would you like to include lowercase?\n Press okay to include uppercase or cancel to NOT include lowercase")


//  d. special characters
var specialChar = confirm("Would you like to include special characters\n Press okay to include uppercase or cancel to NOT include special characters")


//  e. numerical characters
var numericalChar = confirm("Would you like to include numerical characters?\n Press okay to include uppercase or cancel to NOT include numerical characters")

// 2. Validate inputs 
if (upperCase == false &&
  lowerCase == false &&
  specialChar == false &&
  numericalChar == false) {
    alert("You must choose at least one ")
  }
// 3. Generate password

if (upperCase == true ) {
 pwChoices = pwChoices.concat(upperCaseChar)
 }

 if (lowerCase == true) {
   pwChoices = pwChoices.concat(lowerCaseCar)
 }

 if (specialChar == true) {
   pwChoices = pwChoices.concat(specialCharList)
 }

 if (numericalChar == true) {
  pwChoices = pwChoices.concat(numericalList)
}

var userChoices = pwChoices
console.log(userChoices," final user choices ")

for (let i = 0, n=userChoices.length; i < parseInt(passwordLength); i++) {
  finalPW += userChoices[Math.floor(Math.random() *n)]
}

return finalPW
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



/*switch(passwordLength) {
  case "":
    alert("Enter a number")
    break;
    case passwordLength >= 124:
      alert("Your password must be at least 8 characters")
      break
      default:
        alert("number please")
}
*/