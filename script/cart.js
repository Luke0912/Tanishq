let cartData = JSON.parse(localStorage.getItem("cartItm")) || [];

let totalD = document.querySelector(".totl");

let totalItm = document.querySelector(".titm");

let upy = document.querySelector(".upy");

let finalDiscount = document.querySelector(".fdisc");

let mdiv = document.getElementById("cart-mid");

cartDisplay(cartData, mdiv);

function cartDisplay(data, target) {
  displayTotal();
  data[0].cart.map((e) => {
    mdiv.innerHTML += `

    <div class="oneEl">
    <div class="dflex">
    <div class="mid-left">
            <div class="oneitm">
              <img src="${e.image_link}" alt="" />
              <div class="onedec">
                <h2>${e.name}</h2>
                <p>500064SWAAGA092JA005975</p>
                <p class="price">${
                  e.price
                }<span style="text-decoration: line-through;color: gray;font-size: 20px;">₹9999</span></p>
              </div>
            </div>
          </div>
          <div class="mid-right">
              <div class="flexC">
                <div class="qnty">
                <button class="minus" onclick="changeUnit('minus',${
                  e.id
                })">-</button>
                <div class="number">${1}</div>
                  <button class="plus" onclick="changeUnit('plus',${
                    e.id
                  })">+</button>
                </div>
                <div class="rbtn">
                    <button onclick = "removeCartItm(${
                      e.id
                    })" class="remove">Remove</button>
                 </div>
              </div>
              <div class="price-con">
                  <h3 style="margin-right: 6px;">${e.price}</h2>
              </div>
              
          </div>
          </div>
          <div id="cart-bottom">
            <div><p>SHIPPING METHOD:</p>
                <p style="padding: 15px; background-color: black; color: white;">HOME DELIVERY</p>
            </div>
            <div>
                <p>COUNTRY</p>
                <select id="select" name="country" id="">
                    <option value="india">India</option>
                    <option value="Spain">Spain</option>
                    <option value="UAE">UAE</option>
                    <option value="Australia">Australia</option>
                    <option value="Canada">Canada</option>
                    <option value="Malasiya">Malasiya</option>
                </select>
            </div>
            <div>
                <p>PIN-CODE</p>
                <div></div>
                <input style="border: none; background-color: #f6f6f6; padding: 15px;font-weight: bolder;" type="number">
                <button style="background-color: black; color: white; padding: 15px; border: none;width: 140px; font-weight: bolder; letter-spacing: 2px;">Check</button>
            </div>
    </div>
        
          
</div>
   
        
        
        
        
        
        
        `;

    itmQty();
  });
}

function itmQty() {

  let qty = document.querySelector(".itmQty");

  qty.innerHTML = `CART: ${cartData[0].cart.length} ITEM(s)`;

  localStorage.setItem("cartLen", cartData.length);
}

function removeCartItm(id) {
  let ndiv = document.querySelector("#cart-mid");

  cartData[0].cart = cartData[0].cart.filter((itm) => itm.id != id);

  let test = cartData[0].cart;

  localStorage.setItem("CartItems", JSON.stringify(test));

  let newCart = JSON.parse(localStorage.getItem("CartItems") || []);

  updateCart(newCart, ndiv);

  finalDiscount.innerHTML = `DISCOUNT<span class="disc">₹${0}</span> `;

  itmQty();

  displayTotal();
}

function updateCart(data, target) {
  target.innerHTML = "";
  data.map((e) => {
    target.innerHTML += `
   <div class="oneEl">
    <div class="dflex">
    <div class="mid-left">
            <div class="oneitm">
              <img src="${e.image_link}" alt="" />
              <div class="onedec">
                <h2>${e.name}</h2>
                <p>500064SWAAGA092JA005975</p>
                <p class="price">${
                  e.price
                }<span style="text-decoration: line-through;color: gray;font-size: 20px;">₹9999</span></p>
              </div>
            </div>
          </div>
          <div class="mid-right">
              <div class="flexC">
                <div class="qnty">
                <button class="minus" onclick="changeUnit('minus',${
                  e.id
                })">-</button>
                <div class="number">${1}</div>
                  <button class="plus" onclick="changeUnit('plus',${
                    e.id
                  })">+</button>
                </div>
                <div class="rbtn">
                    <button onclick = "removeCartItm(${
                      e.id
                    })" class="remove">Remove</button>
                 </div>
              </div>
              <div class="price-con">
                  <h3 style="margin-right: 6px;">${e.price}</h2>
              </div>
              
          </div>
          </div>
          <div id="cart-bottom">
            <div><p>SHIPPING METHOD:</p>
                <p style="padding: 15px; background-color: black; color: white;">HOME DELIVERY</p>
            </div>
            <div>
                <p>COUNTRY</p>
                <select id="select" name="country" id="">
                    <option value="india">India</option>
                    <option value="Spain">Spain</option>
                    <option value="UAE">UAE</option>
                    <option value="Australia">Australia</option>
                    <option value="Canada">Canada</option>
                    <option value="Malasiya">Malasiya</option>
                </select>
            </div>
            <div>
                <p>PIN-CODE</p>
                <div></div>
                <input style="border: none; background-color: #f6f6f6; padding: 15px;font-weight: bolder;" type="number">
                <button style="background-color: black; color: white; padding: 15px; border: none;width: 140px; font-weight: bolder; letter-spacing: 2px;">Check</button>
            </div>
    </div>
        
          
</div>
   
   
   `;
    //  displayTotal();
  });
}

function displayTotal() {
  let total = 0;
  let totlI = 0;

  cartData[0].cart.forEach((e) => {
    total += e.price;
  });
  totlI = cartData[0].cart.length;
  // totalD.innerHTML = total;
  totalItm.innerHTML = `ORDER TOTAL (${totlI} ITEMS) <span class="totl">₹${total}</span> `;
  upy.innerHTML = `YOU PAY <span class="upay">${total}</span>`;

  let btn = document.querySelector(".promobtn");

  btn.addEventListener("click", () => {
    displayTotal();
    let inpVal = document.getElementById("promo").value;
    if (inpVal == "masai30" || inpVal == "Masai30") {
      let discountTotal = Math.ceil(total * 0.3);
      let newTotal = Math.ceil(total - discountTotal);
      totalItm.innerHTML = `ORDER TOTAL (${totlI} ITEMS) <span class="totl">₹${newTotal}</span> `;
      upy.innerHTML = `YOU PAY <span class="upay">${newTotal}</span>`;
      finalDiscount.innerHTML = `DISCOUNT<span class="disc">₹${discountTotal}</span> `;
    } else {
      alert("Wrong Coupon Code Entered");
    }
  });
}

var total_cart = localStorage.getItem("cartLen");
if (total_cart > 0) {
  document.getElementById("amartocart").innerHTML = `CART(${total_cart})`;
}

// var usrname = JSON.parse(localStorage.getItem("name"))||[];
// document.getElementById("amarname").textContent = `${usrname}`;

var userdelet = document.getElementById("gotologin");

userdelet.addEventListener("click", function () {
  console.log(userdelet);
  localStorage.removeItem("logInUserdata");
  localStorage.removeItem("name");
});
