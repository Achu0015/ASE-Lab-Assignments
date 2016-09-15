/**
 * Created by ACHU on 9/13/2016.
 */

var attempt = 3; // Variable to count number of attempts.
// Below function Executes on click of login button.
function validate(){
    var Email = document.getElementById("Email").value;
    var password = document.getElementById("password").value;
    if ( Email == "master@yahoo.com" && password == "yahoo123"){
        alert ("Login successful");
        window.location = "mashup.html"; // Redirecting to other page.
        return false;
    }
    else{
        attempt --;// Decrementing by one.
        alert("You have left "+attempt+" attempt;");
// Disabling fields after 3 attempts.
        if( attempt == 0){
            document.getElementById("Email").disabled = true;
            document.getElementById("password").disabled = true;
            document.getElementById("submit").disabled = true;
            return false;
        }
    }
}