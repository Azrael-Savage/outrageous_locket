// Assignment code here 



// var arrayLength1 = allConfirm.length  

// console.log(allConfirm)

// console.log(arrayLength1) 

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
  var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var lowerCase = 'abcdefghijklmnopqrstuvwxyz';
  var specialChars = "!'#$%&()*+,-./:;<=>?@[\]^_`{|}~ ";
  var allNumbers = '0123456789';
  var allChars = [upperCase,lowerCase,specialChars,allNumbers];
  var arrayLength = allChars.length;
  var upperConfirm = confirm('Do you want the password to contain upper case letters?')
  var lowerConfirm = confirm('Do you want the password to contain lower case letters?')
  var specialConfirm = confirm('Do you want the password to contain special characters?')
  var numConfirm =  confirm('Do you want the password to contain numbers?')
  var allConfirm = [upperConfirm,lowerConfirm,specialConfirm,numConfirm]
  console.log(allChars.slice(1,3))
  console.log(allChars.slice(1,2))
  console.log(allChars.slice(0,1))
  console.log(allChars.slice(0,2))
  console.log(allChars.slice(0,3))
  console.log(allChars.slice(0,4))
  

 
  
    if (allConfirm[0,3] === true) {
      return (allChars.slice(0,4))
    } 
    else if (allConfirm[0,2] === true){
      return (allChars.slice(0,3));
      
      
    }
    else if (allConfirm[0,1] === true){
      return (allChars.slice(0,2));
    }

    else if (allConfirm[0] === true){
      return (allChars.slice(0,1));
    }

    else{ 
      return('No user confirmation received');
    }  

}