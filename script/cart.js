let cartData = JSON.parse(localStorage.getItem("cartItms"));

let mdiv = document.getElementById("cart-mid");

cartDisplay(cartData, mdiv);

function cartDisplay(data, target) {
  data.map((e) => {
    // mdiv.innerHTML = "";
    mdiv.innerHTML += `

    <div class="oneEl">
    <div class="dflex">
    <div class="mid-left">
            <div class="oneitm">
              <img src="${e.image_link}" alt="" />
              <div class="onedec">
                <h2>${e.name}</h2>
                <p>500064SWAAGA092JA005975</p>
                <p class="price">${e.price}<span style="text-decoration: line-through;color: gray;font-size: 20px;">₹9999</span></p>
              </div>
            </div>
          </div>
          <div class="mid-right">
              <div class="flexC">
                <div class="qnty">
                <button class="minus">-</button>
                  <input type="number">
                  <button class="plus">+</button>
                </div>
                <div class="rbtn">
                    <button onclick = "removeItm(${e.id})" class="remove">Remove</button>
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
        
          
</div>`;
    // console.log(e);
    itmQty();
  });
}

function itmQty() {
  let qty = document.querySelector(".itmQty");

  qty.innerHTML = `CART: ${cartData.length} ITEM(s)`;
}
