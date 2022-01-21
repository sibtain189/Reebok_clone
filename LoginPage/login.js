
var checkbox = document.querySelector("input[name=checkbox]");

checkbox.addEventListener('change', function() {
  if (this.checked) {
    console.log("Checkbox is checked..");
    var para = document.createElement("p");
    para.textContent = "PLEASE ENTER YOUR EMAIL ID."

    var email = document.createElement("input");
    email.setAttribute("placeholder","Email");

    var submit = document.createElement("button");
    submit.textContent = "Continue As Guest     >";
    submit.setAttribute("id", "sign_in");
    submit.style.width = "60%";

    document.querySelector("#pass").style.display = "none";

    document.querySelector(".form").innerHTML = "";

    document.querySelector(".form").append(para, email, submit);
  } else {
    window.location.href = "login.html";
  }
});


document.querySelector("form").addEventListener("submit", leftSign);

function leftSign(event) {
  event.preventDefault();
  document.querySelector(".wrong_left_mail").textContent = "";
  document.querySelector(".wrong_left_pass").textContent = "";
  console.log("yes");
  var a = document.querySelector("#left_email").value;

  var b = document.querySelector("#left_pass").value;

  if(a == "") {
    document.querySelector(".wrong_left_mail").textContent = "Please enter a valid Email address.";
  }

  else if(b == "") {
    document.querySelector(".wrong_left_pass").textContent = "Please enter a valid Password.";
  }
}


document.querySelector("#middle_form").addEventListener("submit", middleSign);

function middleSign(event) {
  event.preventDefault();
  document.querySelector(".wrong_left_mail").textContent = "";
  document.querySelector(".wrong_left_pass").textContent = "";
  console.log("yes");
  var a = document.querySelector("#first_name").value;

  var b = document.querySelector("#last_name").value;

  var c = document.querySelector("#middle_email").value;

  if(a == "") {
    document.querySelector(".wrong_left_mail").textContent = "Please enter a valid Email address.";
  }

  if(b == "") {
    document.querySelector(".wrong_left_pass").textContent = "Please enter a valid Password.";
  }

  else {

  }
}