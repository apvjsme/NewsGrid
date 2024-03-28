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

let firstNameRegex = /^(?=.*[a-zA-Z])(?=.*\d)+$/;
let lastNameRegex = /^(?=.*[a-zA-Z])(?=.*\d)+$/;
let passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/;
let signUpForm = undefined;
let firstNameElemnent = undefined;
let firstNameErrorElement = undefined;
let lastNameElemnent = undefined;
let lastNameErrorElement = undefined;
let passwordElement = undefined;
let passwordErrorElement = undefined;

function initForm() {
  firstNameElemnent = document.getElementById("firstName");
  firstnameErrorElement = document.getElementById("firstName-error");
  lastNameElemnent = document.getElementById("lastName");
  lastNameErrorElement = document.getElementById("lastName-error");
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
    Account: {
      value: "",
      valid: false,
      errorMessage: "",
    },
    Password: {
      value: "",
      valid: false,
      errorMessage: "",
    },
    ConfirmPassword: {
      value: "",
      valid: false,
      errorMessage: "",
    },
    Email: {
      value: "",
      valid: false,
      errorMessage: "",
    },

    AreaCode: {
      value: "",
      valid: false,
      errorMessage: "",
    },
    PhoneNumber: {
      value: "",
      valid: false,
      errorMessage: "",
    },
    Subject: {
      select: "Choose Option",
    },
    Confirm: {
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

  if (firstName.length < firstNameMinLength || firstName.length > firstNameMaxLength) {
    setfirstNameInvalid(`firstName must be between ${firstNameMinLength} and ${firstNameMaxLength} characters`);
    return;
  }

  if (!firstNameRegex.test(firstName)) {
    setfirstNameInvalid("firstName must contain numbers and alphabet characters");
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

  if (lastName.length < lastNameMinLength || lastName.length > lastNameMaxLength) {
    setlastNameInvalid(`lastName must be between ${lastNameMinLength} and ${lastNameMaxLength} characters`);
    return;
  }

  if (!lastNameRegex.test(lastName)) {
    setlastNameInvalid("lastName must contain numbers and alphabet characters");
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

  if (accountName.length < accountNameMinLength || accountName.length > accountNameMaxLength) {
    setaccountNameInvalid(`accountName must be between ${accountNameMinLength} and ${accountNameMaxLength} characters`);
    return;
  }

  if (!accountNameRegex.test(accountName)) {
    setaccountNameInvalid("accountName must contain numbers and alphabet characters");
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

  if (password.length < passwordMinLength || password.length > passwordMaxLength) {
    setpasswordInvalid(`password must be between ${passwordMinLength} and ${passwordMaxLength} characters`);
    return;
  }

  if (!passwordRegex.test(password)) {
    setpasswordInvalid("password must contain numbers and alphabet characters");
    return;
  }
  setpasswordValid();
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
  var areaCode = document.getElementById("areaCode").value;

  if (areaCode.length != areaCodeLength) {
    setareaCodeInvalid(`areaCode must be ${areaCodeLength} characters`);
    return;
  }
  setareaCodeValid();
}

/////////////////////////      phoneNumber     ///////////////////////////////////////

function setphoneNumberInvalid(message) {
  signUpForm.phoneNumber.valid = false;
  signUpForm.phoneNumber.errorMessage = message;
  phoneNumberErrorElement.innerHTML = message;
  phoneNumberErrorElement.style.display = "block";
}

function setphoneNumberValid() {
  signUpForm.phoneNumber.valid = true;
  phoneNumberErrorElement.style.display = "none";
}

function validatephoneNumber() {
  var phoneNumber = document.getElementById("phoneNumber").value;

  if (phoneNumber.length != phoneNumberLength) {
    setphoneNumberInvalid(`phoneNumber must be ${phoneNumberLength} characters`);
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
    setpasswordInvalid(`Confirm password must be the same as password`);
    return;
  }
  setconfirmPasswordValid();
}

////////////////////////////////////////////////////////////////////////////////////////////////


function register() {
  alert('Your Account Was Created Successfully!')
}

initForm();
