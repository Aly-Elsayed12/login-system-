var loginForm = document.getElementById("loginForm")
var closeIcon = document.getElementById("closeIcon")
var loginBtn = document.getElementById("loginBtn")

var emailLog = document.getElementById("emailLog")
var pasLog = document.getElementById("passwordLog")

var alertLogin = document.getElementById("alertLogin")



users = JSON.parse(localStorage.getItem("users"))

//open end close form
loginForm.addEventListener('click', function(){
  Form.classList.add("d-block")
  Form.classList.remove("d-none")
})

closeIcon.addEventListener('click', function(){
  Form.classList.remove("d-block")
  Form.classList.add("d-none")
})


    // cick email and pass

loginBtn.addEventListener('click' , function(){
  for(var i = 0 ; i < users.length; i++){
    if(emailLog.value == users[i].email && pasLog.value == users[i].pas){
      usersName = users[i].code
      localStorage.setItem("userName", usersName )
      location.href = "/page/home.html"
  }else{
    console.log("try again");
    alertLogin.classList.remove("d-none")
    alertLogin.classList.add("d-block")
  }
  }
})







