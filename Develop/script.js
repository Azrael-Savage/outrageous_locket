// Assignment code here 
var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var lowerCase = 'abcdefghijklmnopqrstuvwxyz';
var specialChars = "!'#$%&()*+,-./:;<=>?@[\]^_`{|}~ ";
var allNumbers = '0123456789';
var allChars = [upperCase,lowerCase,specialChars,allNumbers];
var arrayLength = allChars.length;







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



function generatePassword(){
  var passwordLength = prompt("How many characters would you like your password to be?");

  if (passwordLength < 8 || passwordLength > 128 ) {
    alert('Password must be between 8 and 128 characters');
    generatePassword();
  }

  var upperConfirm = confirm('Do you want the password to contain upper case letters?');
  console.log(upperConfirm);
  var lowerConfirm = confirm('Do you want the password to contain lower case letters?');
  var specialConfirm = confirm('Do you want the password to contain special characters?');
  var numConfirm =  confirm('Do you want the password to contain numbers?');
  var masterChar = ""

  if (upperConfirm) {
    masterChar += upperCase
  };

  if (lowerConfirm) {
    masterChar += lowerCase
  };

  if (specialConfirm) {
    masterChar += specialChars
  };

  if (numConfirm) {
    masterChar += allNumbers
    
  };

  masterChar = masterChar.split("")
  console.log(masterChar)

  var password = ""

  for (let i = 0; i < passwordLength; i++) {
    var randomIndex = Math.floor(Math.random() * masterChar.length);
    var randomCharacter = masterChar[randomIndex];
    password += randomCharacter;
  }

console.log(password)
 
  
  return password;
};
