// Variables for user input.
var enter;
var confirmSpecialCharacters;
var confirmNumbers;
var confirmUppercase;
var confirmLowercase;

// Password variable values.
specialcCharacters = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,];
alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
space = [" "];
var choices;
// Converts letters to uppercase.
var toUpper = function(x) {
  return x.toUpperCase();
};
// Variable for uppercase conversion.
var alphabetUpper = alphabet.map(toUpper);

// Event listener to start password generation process upon user click.
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", function() {
  password = writePassword();
  document.getElementById("password").placeholder = password;
});

// Function to start the password generation process.
function writePassword() {
  enter = parseInt(prompt("How many characters would you like in your password. Choose any whole number between 8 and 128."));
  if (!enter) {
    alert("You must enter a value.");
  } else if (enter < 8 || enter > 128) {
    enter = parseInt(prompt("You must choose between 8 and 128."));
  } else {
    confirmSpecialCharacters = confirm("Would you like to have special characters in your password?");
    confirmNumbers = confirm("Would you like to have numbers in your password?");
    confirmUppercase = confirm("Would you like to have uppercase letters in your password?");
    confirmLowercase = confirm("Would you like to have lowercase letters in your password?");
  };
  // If no options are chosen.
    if (!confirmSpecialCharacters && !confirmNumbers && !confirmUppercase && !confirmLowercase) {
    choices = alert("You should probably choose something, just an idea.");
  } 
    // First if statement that takes user input to determine choices.
    // If all choices are confirmed.
    else if (confirmSpecialCharacters && confirmNumbers && confirmUppercase && confirmLowercase) {
    choices = specialcCharacters.concat(numbers, alphabet, alphabetUpper);
  }
    // If 3 choices are confirmed.
    else if (confirmSpecialCharacters && confirmNumbers && confirmUppercase) {
    choices = specialcCharacters.concat(numbers, alphabetUpper)
  } else if (confirmSpecialCharacters && confirmNumbers && confirmLowercase) {
    choices = specialcCharacters.concat(numbers, alphabet);
  } else if (confirmSpecialCharacters && confirmLowercase && confirmUppercase) {
    choices = specialcCharacters.concat(alphabetUpper, alphabet);
  } else if (confirmNumbers && confirmUppercase && confirmLowercase) {
    choices = specialcCharacters.concat(alphabet, alphabetUpper);
  }
    // If 2 choices are confirmed.
    else if (confirmSpecialCharacters && confirmNumbers) {
    choices = specialcCharacters.concat(numbers);
  } else if (confirmSpecialCharacters && confirmUppercase) {
    choices = specialcCharacters.concat(alphabetUpper);
  } else if (confirmSpecialCharacters && confirmLowercase) {
    choices = specialcCharacters.concat(alphabet);
  } else if (confirmNumbers && confirmUppercase) {
    choice = numbers.concat(alphabetUpper);
  } else if (confirmNumbers && confirmLowercase) {
    choices = numbers.concat(alphabet);
  } else if (confirmUppercase && confirmLowercase) {
    choices = alphabet.concat(alphabetUpper);
  }
    // If 1 choice is confirmed.
    else if (confirmSpecialCharacters) {
      choices = specialcCharacters;
  } else if (confirmNumbers) {
    choices = numbers;
  } else if (confirmUppercase) {
    choices = alphabetUpper;
  } else if (confirmLowercase) {
    choices = alphabet;
  }
    // A space variable to fill the uppercase conversion.
    else if (confirmUppercase) {
      choices = space.concat(alphabetUpper);
    };
    
    // A variable to act as an array placeholder for user input amount.
    var passwordPlaceholder = [];

    // Random selection
    for (var i = 0; i < enter; i++) {
      var pickChoices = choices[Math.floor(Math.random() * choices.length)];
      passwordPlaceholder.push(pickChoices);
    }

    // Converts the password array into a string.
    var password = passwordPlaceholder.join("");
    UserInput(password);
    return password;
}

// This function will place the generated password into the box and converts it into text content.
function UserInput(password) {
  document.getElementById("password").textContent = password;
}