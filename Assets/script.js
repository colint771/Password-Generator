// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

//Password criteria
var pwdCriteria = {

  pwdLength: 0,

  pwdLowerCase: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
  pwdUpperCase: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
  pwdNumber: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  pwdCharacter: ["!", "/", "#", "%", "#", "&", "(", ")", "*", "+", ",", "-", ".", ":", "[", "]", "^", "_", "'", "{", "}", "|", "~", ">", "<", ";", "=", "@", "?", "$", "`"],
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  var result = "";
  var passwordLength = 0;
  var UpperCase;
  var LowerCase;
  var Number;
  var Character;

  passwordLength = 0;
  pwdCriteria.pwdLength = 0;
  result = "";

  while (passwordLength < 8 || passwordLength > 128) {
    passwordLength = prompt("How many characters do you want your password to be? /nPassword must be between 8 and 128 characters.");

    if(passwordLength === null) {
      return "Your secure password";
    }
    else {
      if (!isFinite(passwordLength)) {
        alert("You did not enter a number")
        return "Your secure password"
      }
      else {
        if (passwordLength < 8 || passwordLength > 128) {
          alert("Password must be between 8 and 128 characters.");
          return "Your secure password";
        }
        else {
          showPrompts();

          while (pwdCriteria.pwdLength < passwordLength) {
            if (LowerCase === false && UpperCase === false && Number === false && Character === false) {
              alert("You must select at least one criteria of lowercase, uppercase, numbers or special characters")
              showPrompts()
            }
            else {
              if (LowerCase === true && pwdCriteria.pwdLength < passwordLength) {
                var lc = pwdCriteria.pwdLowerCase[Math.floor(Math.random() * 26)]
                result = result + lc;
                pwdCriteria.pwdLength++;
              }

              if (Character === true && pwdCriteria.pwdLength < passwordLength) {
                var sc = pwdCriteria.pwdCharacter[Math.floor(Math.random() * 32)]
                result = result + sc;
                pwdCriteria.pwdLength++;
              }
              if (UpperCase === true && pwdCriteria.pwdLength < passwordLength) {
                var uc = pwdCriteria.pwdUpperCase[Math.floor(Math.random() * 26)]
                result = result + uc;
                pwdCriteria.pwdLength++;
              }

              if(Number === true && pwdCriteria.pwdLength < passwordLength) {
                var num = pwdCriteria.pwdNumber[Math.floor(Math.random() * 10)]
                result = result + num;
                pwdCriteria.pwdLength++;
              }
            }
          }
        }
      }
    }
    
    return result;

    function showPrompts() {
        LowerCase = confirm("Do you want to use lower case letters?");
        UpperCase = confirm("Do you want to use upper case letters?");
        Number = confirm("Do you want to use numbers?");
        Character = confirm("Do you want to use any special characters");
    }
  }
}