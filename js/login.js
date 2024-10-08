let loginSubmit = document.getElementById("loginSubmit"); // to login for home

let signup = document.getElementById("signup"); // open signup form

let siginupSection = document.getElementById("siginupSection");
let loginSection = document.getElementById("loginSection");

let emailLog = document.getElementById("emailLog");
let pasLog = document.getElementById("passwordLog");

let alertLogin = document.getElementById("alertLogin");

users = JSON.parse(localStorage.getItem("users"));

signup.addEventListener("click", openSignSection);

function openSignSection() {
  loginSection.classList.add("d-none");
  siginupSection.classList.remove("d-none");
}

// cick email and pass

loginSubmit.addEventListener("click", function () {
  for (let i = 0; i < users.length; i++) {
    if (emailLog.value == users[i].email && pasLog.value == users[i].pas) {
      usersName = users[i].code;
      localStorage.setItem("userName", usersName);
      location.href = "/page/home.html";
    } else {
      console.log("try again");
      alertLogin.classList.remove("d-none");
      alertLogin.classList.add("d-block");
    }
  }
});
