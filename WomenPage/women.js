function displayItems(womens_data) {
  document.getElementById("rb-men-display").innerHTML = "";
  console.log(womens_data);
  womens_data.map(function (item, index) {
    var id = "rb-box" + index;
    var div = document.createElement("div");
    div.setAttribute("class", "rb-card");
    div.setAttribute("id", id);
    div.addEventListener("click", function () {
      goToProductPage(item);
    });

    // Showing AddTocart button aand size on hovering
    div.addEventListener("mouseover", function () {
      var id = "#rb-box" + index;
      //   console.log("id", id);
      $(id + ">.rb-cart").show();
      $(id + " .rb-product-size").show();
      $(id + ">.rb-cart").attr("style", "display:flex");
    });
    div.addEventListener("mouseout", function () {
      var id = "#rb-box" + index;
      // console.log("id", id);
      $(id + ">.rb-cart").hide();
      $(id + " .rb-product-size").hide();
    });

    var image = document.createElement("img");
    image.setAttribute("src", item.image);

    var name = document.createElement("p");
    name.setAttribute("class", "rb-product-name");
    name.textContent = item.name;

    var category = document.createElement("p");
    category.setAttribute("class", "rb-product-category");
    category.textContent = item.brand;

    var price = document.createElement("span");
    price.setAttribute("class", "rb-product-price");
    price.textContent = "₹" + item.price;

    var strike_price = document.createElement("strike");
    strike_price.setAttribute("class", "rb-product-strikeprice");
    strike_price.textContent = "₹" + item.strikeOffPrice;

    var size = document.createElement("p");
    size.setAttribute("class", "rb-product-size");
    size.textContent = "SIZE  (UK) " + item.size.join(" ");

    var price_span = document.createElement("span");
    price_span.append(price, strike_price);

    var details_div = document.createElement("div");
    details_div.setAttribute("class", "rb-product-details");
    details_div.append(name, category, price_span, size);

    var cart_div = document.createElement("div");
    cart_div.setAttribute("class", "rb-cart");

    var div1 = document.createElement("div");

    var addToCart = document.createElement("p");
    addToCart.textContent = "ADD TO CART";

    div1.append(addToCart);

    var div2 = document.createElement("div");
    var icon_cart = document.createElement("i");
    icon_cart.setAttribute("class", "fas fa-shopping-cart");

    div2.append(icon_cart);

    cart_div.append(div1, div2);

    cart_div.addEventListener("click", function () {
      addProductToCart(index);
    });

    var discount = document.createElement("div");
    discount.setAttribute("class", "rb-men-discount");
    discount.textContent = "-" + item.discount + "%";

    div.append(image, discount, details_div, cart_div);

    document.getElementById("rb-men-display").append(div);
  });
}

function addProductToCart(index) {
  cart_Data.push(womens_data[index]);
  localStorage.setItem("reebok-cart-data", JSON.stringify(cart_Data));
  // alert("Added to Cart Successfully..configure the page");
  window.location.href="#";
}


function sortItems() {
  var val = document.getElementById("sort").value;
  if (val == "asc") {
    womens_data.sort(function (a, b) {
      return a.price - b.price;
    });
  } else if (val == "desc") {
    womens_data.sort(function (a, b) {
      return b.price - a.price;
    });
  } else if (val == "new") {
    womens_data = womens_data.slice(30);
    console.log(womens_data);
  } else if (val == "popular") {
    womens_data = womens_data.slice(20);
    console.log(womens_data);
  }

  displayItems(womens_data);
}

function goToProductPage(item) {
  // alert("going to product page..configure page");
    // productData.push(item);
    localStorage.setItem("reebok-product-data",JSON.stringify(item));
    //Go to Product Page link
    window.location.href = "http://127.0.0.1:5501/ProductPage/product.html";
}

function filterDisplay(checkedArray, val) {
  var len = checkedArray.length;
  if (len > 1) {
    $(".clear-all").attr("style", "display:flex");
    $(".clear-all").show();
    $(".fil-head").attr("style", "font-size:12px");
  }else{
    $(".clear-all").hide();
  }
  document.querySelector(".rb-filter-values").innerHTML = "";
  checkedArray.forEach(function (item, index) {
    var div = document.createElement("div");
    div.setAttribute("class", "rb-cross");
    var cross = document.createElement("i");
    cross.setAttribute("class", "fas fa-times-circle");
    var p = document.createElement("p");
    p.textContent = item;
    div.append(cross, p);
    div.addEventListener("click", function () {
      removeSelectedFilter(index);
    });
    document.querySelector(".rb-filter-values").append(div);
  });
}

function removeSelectedFilter(index) {
  var id = checkedArray[index];
  document.getElementById(id).checked = false;
  checkedArray.splice(index, 1);
  filterDisplay(checkedArray);
}
