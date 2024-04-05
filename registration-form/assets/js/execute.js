"use strict";

// Định nghĩa các điều kiện
const firstNameMinLength = 6;
const lastNameMinLength = 6;
const firstNameMaxLength = 50;
const lastNameMaxLength = 50;
const accountNameMinLength = 6;
const accountNameMaxLength = 30;
const passwordMinLength = 10;
const passwordMaxLength = 50;
const areaCodeLength = 2;
const phoneNumberLength = 9;

let firstNameRegex = /^[a-zA-Z]+$/;
let lastNameRegex = /^[a-zA-Z]+$/;
let accountNameRegex = /^[a-zA-Z0-9]+$/;
let passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/;
let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
let signUpForm = undefined;
let firstNameElement = undefined;
let firstNameErrorElement = undefined;
let lastNameElement = undefined;
let lastNameErrorElement = undefined;
let passwordElement = undefined;
let passwordErrorElement = undefined;
let confirmPasswordElement = undefined;
let confirmPasswordErrorElement = undefined;
let emailElement = undefined;
let emailErrorElement = undefined;
let accountNameElement = undefined;
let accountNameErrorElement = undefined;
let areaCodeElement = undefined;
let areaCodeErrorElement = undefined;
let phoneNumberElement = undefined;
let phoneNumberErrorElement = undefined;

function initForm() {
  firstNameElement = document.getElementById("firstName");
  firstNameErrorElement = document.getElementById("firstName-error");
  lastNameElement = document.getElementById("lastName");
  lastNameErrorElement = document.getElementById("lastName-error");
  accountNameElement = document.getElementById("accountName");
  accountNameErrorElement = document.getElementById("accountName-error");
  passwordElement = document.getElementById("password");
  passwordErrorElement = document.getElementById("password-error");
  confirmPasswordElement = document.getElementById("confirmPassword");
  confirmPasswordErrorElement = document.getElementById(
    "confirmPassword-error"
  );
  emailElement = document.getElementById("email");
  emailErrorElement = document.getElementById("email-error");
  areaCodeElement = document.getElementById("areaCodeip");
  areaCodeErrorElement = document.getElementById("areaCode-error");
  phoneNumberElement = document.getElementById("inputNumber");
  phoneNumberErrorElement = document.getElementById("phoneNumber-error");

  signUpForm = {
    firstName: {
      value: "",
      valid: false,
      errorMessage: "",
    },
    lastName: {
      value: "",
      valid: false,
      errorMessage: "",
    },
    accountName: {
      value: "",
      valid: false,
      errorMessage: "",
    },
    password: {
      value: "",
      valid: false,
      errorMessage: "",
    },
    confirmPassword: {
      value: "",
      valid: false,
      errorMessage: "",
    },
    email: {
      value: "",
      valid: false,
      errorMessage: "",
    },

    areaCode: {
      value: "",
      valid: false,
      errorMessage: "",
    },
    phoneNumber: {
      value: "",
      valid: false,
      errorMessage: "",
    },
    subject: {
      select: "Choose Option",
    },
    confirm: {
      value: "",
    },
  };
}

// Interface - done
// function initForm - done
// function validate fields - not yet - 2 day
// save to localStorage - not yet -

////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////   firstName  /////////////////////////////////////////////////

function setfirstNameInvalid(message) {
  signUpForm.firstName.valid = false;
  signUpForm.firstName.errorMessage = message;
  firstNameErrorElement.innerHTML = message;
  firstNameErrorElement.style.display = "block";
}

function setfirstNameValid() {
  signUpForm.firstName.valid = true;
  firstNameErrorElement.style.display = "none";
}

function validatefirstName() {
  var firstName = document.getElementById("firstName").value;

  if (
    firstName.length < firstNameMinLength ||
    firstName.length > firstNameMaxLength
  ) {
    setfirstNameInvalid(
      `firstName must be between ${firstNameMinLength} and ${firstNameMaxLength} characters`
    );
    return;
  }

  if (!firstNameRegex.test(firstName)) {
    setfirstNameInvalid("firstName must contain alphabet characters");
    return;
  }
  setfirstNameValid();
}

/////////////////////////////////////  lastName  ///////////////////////////////////////////////////////////

function setlastNameInvalid(message) {
  signUpForm.lastName.valid = false;
  signUpForm.lastName.errorMessage = message;
  lastNameErrorElement.innerHTML = message;
  lastNameErrorElement.style.display = "block";
}

function setlastNameValid() {
  signUpForm.lastName.valid = true;
  lastNameErrorElement.style.display = "none";
}

function validatelastName() {
  var lastName = document.getElementById("lastName").value;

  if (
    lastName.length < lastNameMinLength ||
    lastName.length > lastNameMaxLength
  ) {
    setlastNameInvalid(
      `lastName must be between ${lastNameMinLength} and ${lastNameMaxLength} characters`
    );
    return;
  }

  if (!lastNameRegex.test(lastName)) {
    setlastNameInvalid("lastName must contain alphabet characters");
    return;
  }
  setlastNameValid();
}

/////////////////////////      accountName     ///////////////////////////////////////

function setaccountNameInvalid(message) {
  signUpForm.accountName.valid = false;
  signUpForm.accountName.errorMessage = message;
  accountNameErrorElement.innerHTML = message;
  accountNameErrorElement.style.display = "block";
}

function setaccountNameValid() {
  signUpForm.accountName.valid = true;
  accountNameErrorElement.style.display = "none";
}

function validateaccountName() {
  var accountName = document.getElementById("accountName").value;

  if (
    accountName.length < accountNameMinLength ||
    accountName.length > accountNameMaxLength
  ) {
    setaccountNameInvalid(
      `accountName must be between ${accountNameMinLength} and ${accountNameMaxLength} characters`
    );
    return;
  }

  if (!accountNameRegex.test(accountName)) {
    setaccountNameInvalid(
      "accountName must contain numbers and alphabet characters"
    );
    return;
  }
  setaccountNameValid();
}

/////////////////////////      password     ///////////////////////////////////////

function setpasswordInvalid(message) {
  signUpForm.password.valid = false;
  signUpForm.password.errorMessage = message;
  passwordErrorElement.innerHTML = message;
  passwordErrorElement.style.display = "block";
}

function setpasswordValid() {
  signUpForm.password.valid = true;
  passwordErrorElement.style.display = "none";
}

function validatepassword() {
  var password = document.getElementById("password").value;

  if (
    password.length < passwordMinLength ||
    password.length > passwordMaxLength
  ) {
    setpasswordInvalid(
      `password must be between ${passwordMinLength} and ${passwordMaxLength} characters`
    );
    return;
  }

  if (!passwordRegex.test(password)) {
    setpasswordInvalid(
      "password must contain uppercase letters, lowercase letters, numbers, and symbols"
    );
    return;
  }
  setpasswordValid();
}
//////////////////////////   confirm password   ////////////////////////////////////////////////////
function setconfirmPasswordInvalid(message) {
  signUpForm.Password.valid = false;
  signUpForm.Password.errorMessage = message;
  passwordErrorElement.innerHTML = message;
  passwordErrorElement.style.display = "block";
}

function setconfirmPasswordValid() {
  signUpForm.Password.valid = true;
  passwordErrorElement.style.display = "none";
}
function validateconfirmPassword() {
  var password = document.getElementById("password").value;
  var confirmPassword = document.getElementById("confirmPassword").value;

  if (confirmPassword !== password) {
    setconfirmPasswordInvalid(`Confirm password must match the password`);
    return;
  }
  setconfirmPasswordValid();
}
/////////////////////////      areaCode     ///////////////////////////////////////

function setareaCodeInvalid(message) {
  signUpForm.areaCode.valid = false;
  signUpForm.areaCode.errorMessage = message;
  areaCodeErrorElement.innerHTML = message;
  areaCodeErrorElement.style.display = "block";
}

function setareaCodeValid() {
  signUpForm.areaCode.valid = true;
  areaCodeErrorElement.style.display = "none";
}

function validateareaCode() {
  var areaCode = document.getElementById("areaCodeip").value;

  if (areaCode.length != areaCodeLength) {
    setareaCodeInvalid(`areaCode must be ${areaCodeLength} characters`);
    return;
  }
  setareaCodeValid();
}

/////////////////////////      phoneNumber     ///////////////////////////////////////

function setphoneNumberInvalid(message) {
  signUpForm.phoneNumber.valid = true;
  signUpForm.phoneNumber.errorMessage = message;
  phoneNumberErrorElement.innerHTML = message;
  phoneNumberErrorElement.style.display = "block";
}

function setphoneNumberValid() {
  signUpForm.phoneNumber.valid = true;
  phoneNumberErrorElement.style.display = "none";
}

function validatephoneNumber() {
  var phoneNumber = document.getElementById("inputNumber").value;

  if (phoneNumber.length != phoneNumberLength) {
    setphoneNumberInvalid(
      `phoneNumber must be ${phoneNumberLength} characters`
    );
    return;
  }
  setphoneNumberValid();
}
//////////////////////////////////////////  confirmPassword   //////////////////////////////////////////////////////

function setconfirmPasswordInvalid(message) {
  signUpForm.confirmPassword.valid = false;
  signUpForm.confirmPassword.errorMessage = message;
  confirmPasswordErrorElement.innerHTML = message;
  confirmPasswordErrorElement.style.display = "block";
}

function setconfirmPasswordValid() {
  signUpForm.confirmPassword.valid = true;
  confirmPasswordErrorElement.style.display = "none";
}

function validateconfirmPassword() {
  var confirmPassword = document.getElementById("confirmPassword").value;
  var password = document.getElementById("password").value;

  if (confirmPassword != password) {
    setconfirmPasswordInvalid(`confirm password must be the same as password`);
    return;
  }
  setconfirmPasswordValid();
}
/////////////////////////// email /////////////////////////////////////////////
function setemailInvalid(message) {
  signUpForm.email.valid = false;
  signUpForm.email.errorMessage = message;
  emailErrorElement.innerHTML = message;
  emailErrorElement.style.display = "block";
}

function setemailValid() {
  signUpForm.email.valid = true;
  emailErrorElement.style.display = "none";
}

function validateemail() {
  var email = document.getElementById("email").value;

  if (!isValidEmail(email)) {
    setemailInvalid(`Invalid email format`);
    return;
  }
  setemailValid();
}

function isValidEmail(email) {
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

//////////////////////////////////////////////////////////////////////////////
function register() {
  alert("Your Account Was Created Successfully!");
  saveToLocalStorage();
};

function saveToLocalStorage() {
  // localStorage.setItem('firstName', JSON.stringify(signUpForm.firstName.value));
  // localStorage.setItem('lastName', JSON.stringify(signUpForm.lastName.value));
  // localStorage.setItem('accountName', JSON.stringify(signUpForm.accountName.value));
  // localStorage.setItem('password', JSON.stringify(signUpForm.password.value));
  // localStorage.setItem('confirmPassword', JSON.stringify(signUpForm.confirmPassword.value));
  // localStorage.setItem('email', JSON.stringify(signUpForm.Email.value));
  // localStorage.setItem('areaCode', JSON.stringify(signUpForm.areaCode.value));
  // localStorage.setItem('PhoneNumber', JSON.stringify(signUpForm.PhoneNumber.value));

  let user_records = JSON.parse(localStorage.getItem('user_records')) || [];

  user_records.push({
    firstName: signUpForm.firstName.value,
    lastName: signUpForm.lastName.value,
    account: signUpForm.accountName.value,
    Password: signUpForm.password.value,
    confirmPassword: signUpForm.confirmPassword.value,
    Email: signUpForm.email.value,
    areaCode: signUpForm.areaCode.value,
    PhoneNumber: signUpForm.phoneNumber.value,
    Select: signUpForm.select.value,
    Confirm: signUpForm.confirm.value
  });

  localStorage.setItem('user_records', JSON.stringify(user_records));
};

initForm();


function validateForm() {
  signUpForm.firstName.value = document.getElementById("firstName").value;
  signUpForm.lastName.value = document.getElementById("lastName").value;
  signUpForm.accountName.value = document.getElementById("accountName").value;
  signUpForm.password.value = document.getElementById("password").value;
  signUpForm.confirmPassword.value = document.getElementById("confirmPassword").value;
  signUpForm.email.value = document.getElementById("email").value;
  signUpForm.areaCode.value = document.getElementById("areaCodeip").value;
  signUpForm.phoneNumber.value = document.getElementById("inputNumber").value;
  signUpForm.subject.select = document.getElementById("subject").value;
  signUpForm.confirm.value = document.querySelector('input[name="choice"]:checked').value;

  validatefirstName();
  validatelastName();
  validateaccountName();
  validatepassword();
  validateconfirmPassword();
  validateemail();
  validateareaCode();
  validatephoneNumber();

  if (
    signUpForm.firstName.valid &&
    signUpForm.lastName.valid &&
    signUpForm.accountName.valid &&
    signUpForm.password.valid &&
    signUpForm.confirmPassword.valid &&
    signUpForm.email.valid &&
    signUpForm.areaCode.valid &&
    signUpForm.phoneNumber.valid &&
    signUpForm.select.valid &&
    signUpForm.confirm.valid
  ) {
    register();
    return true;
  } else {
    return false;
  }
};

