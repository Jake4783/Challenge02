// Assignment code here
var upperCaseCharacters = 
[
  "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"
]
var lowerCaseCharacters =
[
  "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"
]
var specialCharacters =
[
  "!","@","#","$","%","^","&","*","(",")","-","_","=","+","{","}","[","]",":",";","<",">","?",",",".","/","~"
]
var numeralCharacter = 
[
  "1","2","3","4","5","6","7","8","9","0"
]

// Generate Functions
// Details of password specifics

function allPasswordOptions(){
var length = parseInt(prompt("How many characters do you want it to be? (more than 8 and less than 128)"))

if (length < 8){
  alert("Password must be greater than 8 characters")
}
if (length == NaN){
  alert("Must enter number of characters wanted")
}
if (length > 128){
  alert("Must be less than 128 characters")
}
// Confirming inclusion of specific character types
var upperCaseCharacters = confirm("Click OK to confirm");
var lowerCaseCharacters = confirm("Click OK to confirm");
var specialCharacters = confirm("Click OK to confirm");
var numeralCharacter = confirm("Click OK to confirm");

var passwordOptions = {
  upperCaseCharacters: upperCaseCharacters,
  lowerCaseCharacters: lowerCaseCharacters,
  specialCharacters: specialCharacters,
  numeralCharacter: numeralCharacter,
  length: length,
}
return passwordOptions;
}

function getRandom(arr){
  var randomIndex = Math.floor(Math.random()*arr.length);
  var randomElement = arr[randomIndex];
  return randomElement;
}

function generatePassword(){
  var options = passwordOptions();
  var results = [];
  var possibleCharacters = [];
  var guarenteedCharacters = [];

  if(!options){
    return null;
  }  
  if (options.specialCharacters){
    possibleCharacters.concat(specialCharacters);
    guarenteedCharacters.push(getRandom(specialCharacters));
  }
  if (options.numeralCharacter){s
    possibleCharacters.concat(numeralCharacter);
    guarenteedCharacters.push(getRandom(numeralCharacter));
  }
  if (options.upperCaseCharacters){
    possibleCharacters.concat(upperCaseCharacters);
    guarenteedCharacters.push(getRandom(upperCaseCharacters));
  }
  if (options.lowerCaseCharacters){
    possibleCharacters.concat(lowerCaseCharacters);
    guarenteedCharacters.push(getRandom(lowerCaseCharacters));
  }
  for(var index = 0; index < options.length; index++){
    var possibleCharacter = getRandom(possibleCharacters);
    results.push(possibleCharacters);
  }
  for(var index= 0; index < guarenteedCharacters.length; index++){
    results[index] = guarenteedCharacters[index];
  }
  return results.join(" ");
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
