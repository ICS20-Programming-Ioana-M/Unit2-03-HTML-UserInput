
// Created by: Ioana
// Created on: Mar 23 2022
// Unit2-03-PHP-UserInput

// this function allows user to input answers and display them in text
function enterClicked () {
  // get first name from text field
  let firstName = document.getElementById("first-name").value
  
	// get age from text field and cast it to integer
  let userAge = parseInt(document.getElementById("age-entered").value)

  // display name and age back to user
  document.getElementById('user-info').innerHTML = "Your first name is " + firstName + " and you are " + userAge + " years old."
}