/* This is pseudocode for this password generator.
Each time the script is run, a new password will be generated randomly.
User is prompted on length of password-- 8 to 128 characters
Can include A-Z and a-z
Can include 0-9
Can include special characters

variables: each character will be randomly generated

for loop will repeat passCharacterLength times to fill out random password.
function will repeat the for-loop when you click generate.
copy button will copy the password text onto clipboard.

*/

//Prompts user for preferences. This is stored so the password characters go up to passCharacterLength.

var passCharacterLength =
    prompt("Password character limit? Pick between 8 and 128 characters.");
if (passCharacterLength > 128 || passCharacterLength < 8) {
    passCharacterLength = prompt("Not valid. Must be between 8 and 128.");
}
if (passCharacterLength > 128 || passCharacterLength < 8) {
    passCharacterLength = prompt("Not valid, AGAIN. Must be between 8 and 128. Last chance, buddy!");
}
if (passCharacterLength > 128 || passCharacterLength < 8) {
    location.reload();
}
else {
    var specialCharacters = confirm("Special Characters?")
    //include specialCharacters. if false/else, do not include specialCharacters in var charList in function.

    var numberCharacters = confirm("Numbers?")
    //include numberCharacters. if false/else, do not include numbers in var charList in function.

    var upperCharacters = confirm("Uppercase letters?")
    //include upperCharacters. if false/else, do not include uppercase in var charList in function.

    var lowerCharacters = confirm("Lowercase letters?")
    //include lowerCharacters. if false/else, do not include lowercase in var charList in function.

    //On button click, generate password.
    function generatePassword() {

        //var charList is initially blank, as the user has not input their preferences.
        var charList = "";

        //if specialCharacters is true, the string gets added to charList.
        if (specialCharacters) {
            charList = charList + "!@#$%^&*()-_=+~";
        }

        //if numberCharacters is true, the string gets added to charList.
        if (numberCharacters) {
            charList = charList + "1234567890";
        }

        //if upperCharacters is true, the string gets added to charList.
        if (upperCharacters) {
            charList = charList + "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        }

        //if lowerCharacters is true, the string gets added to charList.
        if (lowerCharacters) {
            charList = charList + "abcdefghijklmnopqrstuvwxyz";
        }

        //if none are true, var charList stays blank.

        // var pass is user password.
        var pass = "";

        //i goes up to user's indicated passCharacterLength, and picks randomly from charList string.
        for (var i = 0; i < passCharacterLength; i++) {
            pass += charList[Math.floor(Math.random() * charList.length)];
        }
        document.getElementById('passwordBox').value = pass;
    }

    //Button copies the password generated to clipboard.
    function copyPassword() {
        var copyText = document.getElementById("passwordBox");
        copyText.select();
        copyText.setSelectionRange(0, 99999);
        document.execCommand("copy");

    }
}