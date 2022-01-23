

var user_login = JSON.parse(localStorage.getItem("userLoginData")) || [];



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
    submit.style.marginTop = "10%";
    submit.style.width = "55%";

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

  else if(a != "" && b != "") {    
    var count = 0;

    user_login.map(function(item) {
      if(item.email == a && item.pass == b) {
        //alert("login Succesfull redirecting to homepage");
         count++;
         localStorage.setItem("login-count",count)
         window.location.href="http://127.0.0.1:5501/CartPage/cart.html"
      }

    });

    if(count == 0) {
      // alert("Wrong Credentials!!");
      document.querySelector("#wrongDetails").textContent = "Sorry!! wrong credentials";
      //localStorage.setItem("login-count",count)
    }
  }
}

document.querySelector("#middle_sign_in").addEventListener("click", middleSign);


function middleSign(event) {
  event.preventDefault();
  document.querySelector("#wrong_middle_first_name").textContent = "";
  document.querySelector("#wrong_middle_last_name").textContent = "";
  document.querySelector("#wrong_middle_email").textContent = "";
  document.querySelector("#wrong_middle_pass1").textContent = "";
  document.querySelector("#wrong_middle_pass2").textContent = "";
  document.querySelector("#wrong_gender").textContent = "";
  // console.log("yes");

  var a = document.querySelector("#first_name").value;

  var b = document.querySelector("#last_name").value;

  var c = document.querySelector("#middle_email").value;

  var d = document.querySelector("#middle_pass").value;

  var e = document.querySelector("#retype_middle_pass").value;

  var f = document.querySelector("#gen1");

  var g = document.querySelector("#gen2");

  if(a == "") {
    document.querySelector("#wrong_middle_first_name").textContent = "Please enter your first name.";
  }

  if(b == "") {
    document.querySelector("#wrong_middle_last_name").textContent = "Please enter your last name";
  }

  if(c == "") {
    document.querySelector("#wrong_middle_email").textContent = "Please enter a valid Email address.";
  }

  if(d== "") {
    document.querySelector("#wrong_middle_pass1").textContent = "Please enter a valid 8 character Password.";
  }

  if(e == "") {
    document.querySelector("#wrong_middle_pass2").textContent = "Retype your password";
  }

  if(!f.checked && !g.checked) {
    document.querySelector("#wrong_gender").textContent = "Select your gender";
  }

  if (a != "" && b != "" && c != "" && d!= "" && e != "" && (f.checked || g.checked)) {
    if(d == e && d.length >= 8) {
      var obj = {
        email : c,
        pass : d
      };
      user_login.push(obj);
      localStorage.setItem("userLoginData", JSON.stringify(user_login));
      alert("SignUp Successfull");      
      window.location.href="login.html"
    }
    else if(d.length < 8){
      alert("password id too short");
    }
    else {
      alert("Password in not matching");
      document.querySelector("#wrong_middle_pass2").textContent = "Password not matching";
    }
  }
}



function Login(){
  window.location.href="http://127.0.0.1:5501/LoginPage/login.html"
}

function goToCart(){
  window.location.href="http://127.0.0.1:5501/CartPage/cart.html"
}

function goToHome(){
  window.location.href="http://127.0.0.1:5501/HomePage/home.html"
}