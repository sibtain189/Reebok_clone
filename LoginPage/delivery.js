
var data = JSON.parse(localStorage.getItem("reebok-product-data"))

var billingData = [];


// var z = JSON.parse(localStorage.getItem("billingData"));

function checkout() {

    document.querySelector("#error").textContent = "";
    document.querySelector("#first_name").textContent = "";
    document.querySelector("#last_name").textContent = "";
    document.querySelector("#wrong_address").textContent = "";
    document.querySelector("#wrong_l_mark").textContent = "";
    document.querySelector("#wrongState").textContent = "";
    document.querySelector("#wrongPin").textContent = "";
    document.querySelector("#wrong_number").textContent = "";

    var f_name = document.querySelector("#f_name").value;

    var l_name = document.querySelector("#l_name").value;

    var address = document.querySelector("#address").value;

    var l_mark = document.querySelector("#l_mark").value;

    var state = document.querySelector("#state").value;

    var pincode = document.querySelector("#pincode").value;

    var mNumber = document.querySelector("#m_number").value;

    var checkbox = document.querySelector("input[type=checkbox]");


    if(checkbox.checked) {
        if(f_name == "") {
            document.querySelector("#first_name").textContent = "Enter valid first name";
        }
        if(l_name == "") {
            document.querySelector("#last_name").textContent = "Enter valid last name";
        }
        if(address == "") {
            document.querySelector("#wrong_address").textContent = "Enter valid address";
        }
        if(l_mark == "") {
            document.querySelector("#wrong_l_mark").textContent = "Enter valid landmark";
        }
        if(state == "") {
            document.querySelector("#wrongState").textContent = "Enter valid state";
        }
        if(pincode == "") {
            document.querySelector("#wrongPin").textContent = "Enter valid pincode";
        }
        if(mNumber.length != 10) {
            document.querySelector("#wrong_number").textContent = "Enter valid 10 digit number";
        }      

        var obj = {
            firstName: f_name,
            lastName : l_name,
            address: address,
            landMark : l_mark,
            state: state,
            pinCode: pincode,
            phoneNumber: mNumber,
        }

        billingData.push(obj);

        localStorage.setItem("billingData", JSON.stringify(billingData));

        if(f_name != "" && l_name != "" && address != "" && l_mark != "" && state != "" && pincode != "" && mNumber.length == 10 ) {
            window.location.href = "payment.html";
        }
    }

    else{
        document.querySelector("#error").textContent = "Please tick the checkbox";
        document.querySelector("#error").style.color = "red";
    }
}

var menData = [];
menData.push(data)

display(menData);

function display() {
    
    menData.map(function (item) {

        var z = total();

        document.querySelector("#one").textContent = z;
        document.querySelector("#two").textContent = "10% off";
        document.querySelector("#three").textContent = z*0.9;


        // document.querySelector(".right12").innerHTML = "";

        var div_main = document.createElement("div");
        div_main.setAttribute("id", "js");

        var div1 = document.createElement("div");
        div1.setAttribute("id", "right_img");

        var div2 = document.createElement("div");
        div2.setAttribute("id", "right_detail");

        var image = document.createElement("img");
        image.setAttribute("src", item.image);

        div1.append(image);

        var name = document.createElement("h5");
        name.textContent = item.name;
        name.style.fontWeight = "bold";

        var size = document.createElement("p");
        size.textContent = `Size: ${item.size[1]}`;

        var qty = document.createElement("p");
        qty.textContent = "Qty :" + 2;

        var price = document.createElement("p");
        price.textContent = "Price: ₹" +item.price;

        div2.append(name, size, qty, price);

        div_main.append(div1, div2);

        document.querySelector(".right12").append(div_main);

    });   
}


function total() {
    var total = menData.reduce(function(a,b) {
        return (a + b.price);
    },0);
    return total;
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