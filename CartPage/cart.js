
var data =JSON.parse(localStorage.getItem("reebok-product-data"));
var cartData = [];
cartData.push(data)
// console.log(cartData)
if(cartData.length <= 0)
{
    document.querySelector("#left").style.display="none";
    document.querySelector("#right").style.display="none";
    document.querySelector("#promo1").style.display="none";
    document.getElementById("start1").textContent = "There are no products in your Shopping Cart.";
}
else{
    printData(cartData)
}

function printData(cartData){
    document.querySelector("#left").innerHTML="";
    cartData.map(function(items,index){
        // console.log(items);

        var div_ship = document.createElement("div");
        var div_items = document.createElement("div");
        var para1 = document.createElement("p");
        para1.textContent = "Ships In 2-7 Days.";
        para1.style.color = "blue";
        para1.style.fontSize = "10px"

        div_ship.append(para1);

        // var div_remove = document.createElement("div");
        
        // var remove = document.createElement("p");
        // remove.textContent = "Remove Item"

        // div_remove.append(remove);

        var div = document.createElement("div");
        div.setAttribute("id","cart1");
        
        var div1 = document.createElement("div");
        div1.setAttribute("id","div1");
        var image = document.createElement("img");
        image.setAttribute("src",items.image);

        div1.append(image);

        var div2 = document.createElement("div");
        div2.setAttribute("id","div2");
        var name = document.createElement("a");
        name.textContent = items.name;
        name.setAttribute("id","name1")
        name.style.fontWeight = "700"
        var color = document.createElement("p");
        color.textContent = "Color: "+items.color;
        color.style.fontFamily = "arial"
        var size = document.createElement("p");
        size.textContent = "Size: 7";
        size.style.fontFamily = "arial"
        var  productType = document.createElement("p");
        productType.textContent = items.productType;
        productType.style.fontFamily = "arial"
        var  brand = document.createElement("p");
        brand.textContent = "Brand: "+items.brand;
        brand.style.fontFamily = "arial";

        var div2_1 = document.createElement("div");
        div2_1.setAttribute("id","div2_1");

        var remove = document.createElement("p");
        remove.textContent = "Remove Items";
        remove.style.marginRight = "6%"

        remove.addEventListener("click",function(){
        cartData.splice(index,1);
        localStorage.setItem("cartData",JSON.stringify(cartData));
        abc();
        document.getElementById("remove").textContent = "Item Remove Succesfully"
        printData(cartData);
       })

        var wishlist = document.createElement("p");
        wishlist.textContent = "Add To Wishlist"

        div2_1.append(remove,wishlist);

        div2.append(name,color,size,productType,brand,div2_1)

        var div3 = document.createElement("div");
        div3.setAttribute("id","div3");
        div3.textContent = "Qty:"
        var qty = document.createElement("input");
        
        qty.value = 1;

        div3.append(qty);

        var div4 = document.createElement("div");
        div4.setAttribute("id","div4");
        var div4_1 = document.createElement("div");
        var div4_2 = document.createElement("div");

        var button = document.createElement("button");
        button.textContent = "Update";
        var  price = document.createElement("p");
        price.textContent = items.price;
        price.style.fontWeight = "700"
        price.style.fontSize = "19px"
        var  strikeOffPrice = document.createElement("p");
        strikeOffPrice.textContent = items.strikeOffPrice;
        strikeOffPrice.style.textDecoration= "line-through"
        strikeOffPrice.style.color = "grey"
       
        
        div4_1.append(button)
        div4_2.append(price,strikeOffPrice)
        div4.append(div4_1,div4_2);

        div_items.append(div_ship,div);
        div.append(div1, div2, div3, div4);
        
        document.querySelector("#left").append(div,div_items);

        abc();
    })

}

// console.log(x);
function abc(){
    var x = cartData.reduce(function(a,b){
        return (+a + +b.price);
    },0) 
    document.querySelector("#mrp").textContent= x;
    document.querySelector("#mrp").style.fontSize = "18px"
    document.querySelector("#diss").textContent = "10% OFF";
    document.querySelector("#diss").style.color = "red"
    document.querySelector("#total").textContent = x*0.9;
}


function checkLogin(){

    var check = localStorage.getItem("login-count")
    // console.log(chack)

    if(check==1){
        check=0;
        localStorage.setItem("login-count",check)
        window.location.href="http://127.0.0.1:5501/LoginPage/delivery.html"
        
    }else{
        window.location.href="http://127.0.0.1:5501/LoginPage/login.html"

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