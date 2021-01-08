// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function generatePassword() {
  let password = '';
  let characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  for (i=1;i<50;i++) {
    let x = Math.floor(Math.random()*characters.length + 1);
    password += characters.charAt(x)
  }

  console.log (password);

} 
generateBtn.addEventListener("click", writePassword);
