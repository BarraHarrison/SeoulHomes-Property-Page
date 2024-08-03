// JS for login and sign-up
let signUpButton = document.getElementById("signupButton"); // ID from HTML
let logInButton = document.getElementById("loginButton"); 
let nameDiv = document.getElementById("nameDiv"); 
let title = document.getElementById("title"); 

// For when you click on the login button
// the name field will be hidden
logInButton.onclick = function(){
    nameDiv.style.height = "0"; // shrinks the nameDiv
    title.innerHTML = "Login"; // this is connect to the h1 tag and gives the new title called "Login"
    signUpButton.classList.add("disable"); // adds the disable class to the Sign up button
    logInButton.classList.remove("disable"); // And then this removes the disable class from the login button
}


// this is a duplicated function for the Sign Up Button

signUpButton.onclick = function(){ //signUpButton instead of logInButton
    nameDiv.style.height = "50px"; // basically returns the nameDIv to max height
    title.innerHTML = "Sign-up"; // goes back to the sign-up title in h1
    signUpButton.classList.remove("disable"); 
    logInButton.classList.add("disable"); // this is a reverse from the previous function
}