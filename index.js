//variables
const form = document.querySelector("form");
const inputs = document.querySelectorAll(
  'input[type="text"], input[type=password'
);
let firstname, lastname, email, password;

//variable errorDisplay for take care error message and thank part
const errorDisplay = (tag, message, valid) => {
  const container = document.querySelector("." + tag + "-container");
  const span = document.querySelector("." + tag + "-container > span");

  if (!valid) {
    container.classList.add("error");
    span.textContent = message;
  } else {
    container.classList.remove("error");
    span.textContent = message;
  }
};

//variable for check firstname
const firstnameChecker = (value) => {
  if (value.length > 0 && (value.length < 3 || value.length > 20)) {
    firstname = null;
  } else {
    firstname = value;
  }
};
//variable for check lastname
const lastnameChecker = (value) => {
  if (value.length > 0 && (value.length < 3 || value.length > 20)) {
    lastname = null;
  } else {
    lastname = value;
  }

  console.log(lastname);
};
//variable for check Email
const emailChecker = (value) => {
  if (!value.match(/^[\w_-]+@[\w-]+\.[a-z]{2,4}$/i)) {
    email = null;
  } else {
    email = value;
  }
};

//variable for check password
const passwordChecker = (value) => {
  if (
    !value.match(
      /^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}$/
    )
  ) {
    password = null;
  } else {
    password = value;
  }
};
//register every writing in inputs
inputs.forEach((input) => {
  input.addEventListener("input", (e) => {
    switch (e.target.id) {
      case "firstname":
        firstnameChecker(e.target.value);
        break;
      case "lastname":
        lastnameChecker(e.target.value);
        break;
      case "email":
        emailChecker(e.target.value);
        break;
      case "password":
        passwordChecker(e.target.value);
        break;
      default:
        null;
    }
  });
});

//Submit//
form.addEventListener("submit", (e) => {
  //if Firstname is not good add border color + red icone + texte
  e.preventDefault();
  if (firstname == null) {
    errorDisplay(
      "firstname",
      "The first name must be between 3 and 20 characters"
    );
  }
  //if lastname is not good add border color + red icone + texte
  if (lastname == null) {
    errorDisplay(
      "lastname",
      "The Last name must be between 3 and 20 characters"
    );
  }
  //if email is not good add border color + red icone + texte
  if (email == null) {
    errorDisplay("email", "Email is not valid");
  }
  //if password is not good add border color + red icone + texte
  if (password == null) {
    errorDisplay(
      "password",
      "Minimum of 8 characters, one capital letter, one number and one special character"
    );
  }
  //if everything is complete good, send datas (see consol log), thank you message, delete error messages and delete everything write in forms
  if (firstname && lastname && email && password) {
    const data = {
      firstname,
      lastname,
      email,
      password,
    };
    console.log(data);
    alert("Thank you, we will back to you soon");
    //=>for empty form after complet
    inputs.forEach((input) => (input.value = ""));
    errorDisplay("firstname", "", true);
    errorDisplay("lastname", "", true);
    errorDisplay("email", "", true);
    errorDisplay("password", "", true);
    errorDisplay("password", "", true);
    errorDisplay("password", "", true);
  }
});
