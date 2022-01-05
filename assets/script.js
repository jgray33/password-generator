// Assignment Code
var generateBtn = document.querySelector("#generate");




function generatePassword() {
  console.log("button clicked")
// 1. Prompt user for criteria
//  a. 8 =< password length =< 124
var passwordLength = prompt("How many characters do you want your password to be?" , "")
 if (passwordLength < 8) {
  alert("Your password must be more than 8 characters and less than 124")
  generatePassword ()
  } else if (passwordLength > 124) {
    alert("Your password must not be more than 124 characters")
    generatePassword ()
  } else if (isNaN(passwordLength)) {
    generatePassword ()
    alert("Please enter a number between 8 and 124")
  } else if (8 <= passwordLength <= 124) {
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
    alert("You must select to choose at least one ")
  }
// 3. Generate password

let upperCaseChar = [A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z]
let lowerCaseCar = [a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,Z]
let specialCharList = [!,",#,$,%,&,',(,),*,+,,,-,.,/,:,;,<,=,>,?,@,[,,^,_,`,{,|,},~]
let numbers =

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