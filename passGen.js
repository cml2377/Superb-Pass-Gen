/* This is pseudocode for this password generator.
Each time the script is run, a new password will be generated randomly.
Password will be 12 characters long
Can include A-Z and a-z (arrays?)
Can include 0-9
Can include special characters

variables: each character will be randomly generated

for loop will repeat 12 times to fill out random password.
function will repeat the for-loop when you click generate.
copy button will copy the password text onto clipboard.

*/

function generatePassword() {
    var charList = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@@#$%^&*()";
    var pass = "";

    for (var i = 0; i < 12; i++) {
        pass += charList[Math.floor(Math.random() * charList.length)];
    }
    document.getElementById('passwordBox').value = pass;
}

function copyPassword() {
    var copyText = document.getElementById("passwordBox");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");

}