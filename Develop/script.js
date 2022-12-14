// Assignment code here 
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  
}

console.log(generatePassword)
console.log(writePassword)
  var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var lowerCase = 'abcdefghijklmnopqrstuvwxyz';
  var specialChars = "!'#$%&()*+,-./:;<=>?@[\]^_`{|}~ ";
  var allNumbers = '0123456789';
  var allChars = [upperCase,lowerCase, specialChars, allNumbers];
  var arrayLength = allChars.length;
  // var upperConfirm = ('Do you want the password to contain upper case letters?')
  // var lowerConfirm = ('Do you want the password to contain lower case letters?')
  // var specialConfirm = ('Do you want the password to contain special characters?')
  // var numConfirm =  ('Do you want the password to contain numbers?')
  // var allConfirm = [upperConfirm,lowerConfirm,specialConfirm,numConfirm]
  // var arrayLength1 = allConfirm.length  
  // console.log(allChars)
  // console.log(allConfirm)
  // console.log(arrayLength)
  // console.log(arrayLength1) 





// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword(){
return (allChars)



}

 
  



  
 


  
  

  

