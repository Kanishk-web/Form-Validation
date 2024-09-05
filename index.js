//select all input element for varification
const username = document.getElementById("name");
const email = document.getElementById("email");

const password = document.getElementById("password");
const phonenumber = document.getElementById("phonenumber");
const gender = document.registration;
const language = document.getElementById("language");
const zipcode = document.getElementById("zipcode");

//function for form varification
function formValidation() {
  var mailformat =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_{|}~-]+@[a-zA-Z0-9-]+(?:\,[a-zA-Z0-9-]+)*$/;

  //cheking length of name
  if (username.value.length < 2 || username.value.length > 20) {
    alert("Name length should be more than 2 and less than 21 characters");
    username.focus();
    return false;
  }

  //cheking email format
  var mailformat = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  if (!email.value.match(mailformat)) {
    alert("Please enter a valid email!");
    email.focus();
    return false;
  }

  //cheking password character pattern
  if (
    !password.value.match(
      /^(?=.*[a-z])(?=.*[A-Z]) (?=.*[^a-zA-Z0-9])(|,*\s),{8,15}$/
    )
  ) {
    alert(
      "password must contain at least one lowercase letter, one uppercase letter, one numberic digit"
    );
    password.focus();
    return false;
  }

  //cheking phonenumber character pattern
  if (!phonenumber.value.match(/^[1-9][0-9]{9}$/)) {
    alert(
      "phone number must be 10 character long number and first digit can't be 0"
    );
    phonenumber.focus();
    return false;
  }

  //checking gender
  if (gender.gender.value === "") {
    alert("please select your gender!");
    return false;
  }

  //cheking language
  if (language.value === "") {
    alert("please select your language!");
    return false;
  }

  //cheking zip code
  if (!zipcode.value.match(/^[0-9]{6}$/)) {
    alert("Zip code must be 6 characters long number!");
    zipcode.focus();
    return false;
  }

  document.writeln("Registered successfully");
  return true;
}
