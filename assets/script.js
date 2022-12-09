// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  //var password = generatePassword();
  //var passwordText = document.querySelector("#password");

  passwordLength = prompt("How many characters would you like your character to be? Enter a number between 8 and 128.");
  // Still need to prevent decimals from getting through.
  if (passwordLength >= 8 && passwordLength <=128) {
    alert("You have chosen " + passwordLength + " characters.")
    console.log("You have chosen " + passwordLength + " characters.")
  } else {
    alert("Your answer is not a valid number. Try Again.")
    console.log("Your answer is not a valid number. Try Again.")
  }
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
