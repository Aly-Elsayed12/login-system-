let signUpBtn = document.getElementById("signUp");

let loginBtn = document.getElementById("loginBtn");

let nameInput = document.getElementById("name");
let emailInput = document.getElementById("email");
let pasInput = document.getElementById("password");

let alertName = document.getElementById("alertName");
let alertEmail = document.getElementById("alertEmail");
let alertPas = document.getElementById("alertPas");
let alertExitEmail = document.getElementById("alertExitEmail");

let alertSingup = document.getElementById("alertSingup");

let users;

if (localStorage.getItem("users") != null) {
  users = JSON.parse(localStorage.getItem("users"));
} else {
  users = [];
}

loginBtn.addEventListener("click", openLoginSection);

function openLoginSection() {
  loginSection.classList.remove("d-none");
  loginSection.classList.add("d-block");
  siginupSection.classList.add("d-none");
}

// singup
function signUp() {
  let userinfo = {
    code: nameInput.value,
    email: emailInput.value,
    pas: pasInput.value,
  };
  if (
    validEmail() == true &&
    validName() == true &&
    validPas() == true &&
    emailExit() == false
  ) {
    alertSingup.classList.add("d-none");
    alertSingup.classList.remove("d-block");
    users.push(userinfo);
    updateLocalStorage();
    clearInput();
    removeVaildClass();
    openLoginSection();
  } else {
    console.log("not okay");
    alertSingup.classList.remove("d-none");
    alertSingup.classList.add("d-block");
  }
}

signUpBtn.addEventListener("click", signUp);

function updateLocalStorage() {
  localStorage.setItem("users", JSON.stringify(users));
}

function clearInput() {
  nameInput.value = null;
  emailInput.value = null;
  pasInput.value = null;
}
function removeVaildClass() {
  nameInput.classList.remove("is-valid");
  emailInput.classList.remove("is-valid");
  pasInput.classList.remove("is-valid");
}
// input event

nameInput.addEventListener("input", validName);
emailInput.addEventListener("input", validEmail);
pasInput.addEventListener("input", validPas);
emailInput.addEventListener("blur", emailExit);

//   validition

function validName() {
  let regex = /^[a-z]{3,15}$/i;
  if (regex.test(nameInput.value)) {
    nameInput.classList.add("is-valid");
    nameInput.classList.remove("is-invalid");
    alertName.classList.add("d-none");
    alertName.classList.remove("d-block");
    return true;
  } else {
    nameInput.classList.add("is-invalid");
    nameInput.classList.remove("is-valid");
    alertName.classList.remove("d-none");
    alertName.classList.add("d-block");
    return false;
  }
}
function validEmail() {
  let regex = /^\w{3,}@(gmail||yahoo).com$/i;
  if (regex.test(emailInput.value)) {
    emailInput.classList.add("is-valid");
    emailInput.classList.remove("is-invalid");
    alertEmail.classList.add("d-none");
    alertEmail.classList.remove("d-block");
    return true;
  } else {
    emailInput.classList.add("is-invalid");
    emailInput.classList.remove("is-valid");
    alertEmail.classList.remove("d-none");
    alertEmail.classList.add("d-block");
    return false;
  }
}
function validPas() {
  let regex = /^\w{5,20}$/i;
  if (regex.test(pasInput.value)) {
    pasInput.classList.add("is-valid");
    pasInput.classList.remove("is-invalid");
    alertPas.classList.add("d-none");
    alertPas.classList.remove("d-block");
    return true;
  } else {
    pasInput.classList.add("is-invalid");
    pasInput.classList.remove("is-valid");
    alertPas.classList.remove("d-none");
    alertPas.classList.add("d-block");
    return false;
  }
}
function emailExit() {
  if (localStorage.getItem("users") != null) {
    for (let i = 0; i < users.length; i++) {
      if (emailInput.value == users[i].email) {
        alertExitEmail.classList.remove("d-none");
        alertExitEmail.classList.add("d-block");
        return true;
      } else {
        alertExitEmail.classList.add("d-none");
        alertExitEmail.classList.remove("d-block");
        return false;
      }
    }
  } else {
    return false;
  }
}
