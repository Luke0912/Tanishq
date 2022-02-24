// import navbar from "../script/nav.js" 
// var nav=document.getElementById('hamcont');
// nav.innerHTML=navbar();

var mensData = JSON.parse(localStorage.getItem("mensData"));
console.log(mensData);

var cart = JSON.parse(localStorage.getItem("CartItems")) || [];

displayData(mensData);

// var wishlist =JSON.parse(localStorage.getItem("WishlistItems"))||[]

// displayData(mensData);


function handlePriceSort() {
  var selected = document.querySelector("#priceSort").value;
  console.log(selected);
  if (selected == "high") {
    mensData.sort(function (a, b) {
      return b.price - a.price;
    });
  }
  if (selected == "low") {
    mensData.sort(function (a, b) {
      return a.price - b.price;
    });
  }

  displayData(mensData);
}

// displayData(mensData)

function categoryg() {
  var selectcategory = document.querySelector(".categoryG").value;
  console.log(selectcategory);
  var categoryname = mensData.filter(function (elem) {
    return elem.type == selectcategory;
  });
  displayData(categoryname);
}

function categoryd() {
  var selectcategory = document.querySelector(".categoryD").value;
  console.log(selectcategory);
  var categoryname = mensData.filter(function (elem) {
    return elem.type == selectcategory;
  });
  displayData(categoryname);
}

function categoryw() {
  var selectcategory = document.querySelector(".categoryW").value;
  console.log(selectcategory);
  var categoryname = mensData.filter(function (elem) {
    return elem.type == selectcategory;
  });
  displayData(categoryname);
}

function displayData(mensData) {
  document.querySelector("#containermen").innerHTML = "";

  mensData.map(function (data) {
    var div = document.createElement("div");

    var img = document.createElement("img");
    img.setAttribute("src", data.image_link);

    var divr = document.createElement("div");
    divr.setAttribute("id", "divr");

    var rating = document.createElement("h4");
    rating.textContent = data.rating;

    var star = document.createElement("h3");
    star.textContent = " ★";
    star.style.color = "rgb(20,149,143)";

    divr.append(rating, star);

    var name = document.createElement("p");
    name.textContent = data.name;

    var brand = document.createElement("h4");
    brand.textContent = data.brandname;

    var div2 = document.createElement("div");
    div2.setAttribute("id", "flex");

    var p1 = document.createElement("p");
    p1.style.fontWeight = "700";
    p1.textContent = `Rs.${data.price}`;

    div2.append(p1);

    var btn = document.createElement("button");
    btn.setAttribute("id", "bagmen");
    btn.textContent = "MOVE TO BAG";

    btn.addEventListener("click", function () {
      addtocart(data);
    });

    div.append(img, divr, brand, name, div2, btn);

    document.querySelector("#containermen").append(div);
  });
}




// function addtocart(data) {
//   console.log(data, "data");
//   cart.push(data);
//   localStorage.setItem("CartItems", JSON.stringify(cart));
//   alert("added successfully");
// }
