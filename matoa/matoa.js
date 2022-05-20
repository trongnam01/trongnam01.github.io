const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);


const tabs = $$(".tab-item");
const panes = $$(".tab-pane");

const tabActive = $(".tab-item.active");
const line = $(".tabs .tabs-line");
let quantity = $("#quantity")
let quantity2 = $("#quantity2")
let result;
let modal = $(".modal-cart")
let addItemCart = $(".add-item-cart")
let clearItemCart = $$(".icon-trash-cart")


tabs.forEach((tab, index) => {
    const pane = panes[index];
  
    tab.onclick = function () {
      $(".tab-item.active").classList.remove("active");
      $(".tab-pane.active").classList.remove("active");
  
      line.style.left = this.offsetLeft + "px";
      line.style.width = this.offsetWidth + "px";
  
      this.classList.add("active");
      pane.classList.add("active");
    };
});



//  chừ 
$("#reduction").onclick = function() {
    result = +(quantity.textContent) - 1
    if(result <= 0){
        quantity.textContent = 0
    }else{
        quantity.textContent = result
    }
}


$("#more").onclick = function() {
    result = +(quantity.textContent) + 1
    quantity.textContent = result
    console.log(result);
}

// $("#reduction2").onclick = function() {
//     result = +(quantity2.textContent) - 1
//     if(result <= 0){
//         quantity2.textContent = 0
//     }else{
//         quantity2.textContent = result
//     }
// }

$(".cart-border").onclick = function () {
    modal.classList.add("open")
}

//  ẩn modal
$(".incon-delete-modal").onclick = function() {
    modal.classList.remove("open")
}
//                             ?????????????????????????????
modal.onclick = function() {
    modal.classList.remove("open")
}
$(".modal-cantainer").onclick = function(e) {
    e.stopPropagation()
}

$(".btn-add-cart").onclick = function () {
    let textCart = $("#cart-quantity").textContent
    let revewImg = $(".revew-img").getAttribute("src")
    let slideText = $(".slide-text").textContent
    let SaleOff = $(".js-sale-off").textContent
    let PriceProduct = $(".js-price-product span").textContent
    if(result) {
        $("#cart-quantity").textContent = 1 + +(textCart)
        let itemCart = document.createElement('div')
        itemCart.setAttribute("class", "item-product-cart")
        itemCart.innerHTML = `
            <div class="item-product-left">
                <div style="width: 110px">
                    <img class="item-product-img" src="${revewImg}" alt="">
                </div>
                <div class="item-product-text" style="margin-left: 20px;">
                    <p>${slideText}</p>
                    <p style="margin-bottom: 0;" class="old-price">${SaleOff}</p>
                    <div style="font-size: 20px; font-weight: 600;">Rp <span> ${PriceProduct}</span></div>
                    <p style="font-size: 16px;">Custom Engrave</p>
                    <p style="font-size: 16px;font-weight: 300;">“Happy | Birthday | from”
                    </p>
                </div>
            </div>
            <div class="item-product-right">
                <p>Select Packaging</p>
                <input type="text" placeholder="Wooden Packaging (Rp 50.000)">
                <i class="bi bi-chevron-down icon-input-cart"></i>
                <div class="d-sm-flex justify-content-end">
                    <div>
                        <button id="reduction2" style="width: 30px;">-</button>
                        <span id="quantity2">0</span>
                        <button id="more2">+</button>
                    </div>
                    <div class="d-flex">
                        <div  style="font-size: 20px; font-weight: 600; margin: 0 10px;"> <span class="js-price-product-cart">${PriceProduct} </span></div>
                        <div class="icon-trash-cart">
                            <i class="bi bi-trash"></i>
                        </div>
                    </div>
                </div>
            </div>
        `
        addItemCart.appendChild(itemCart)
    }
    result = undefined
    quantity.textContent = 0
    totalCart()
}

for(let i = 0 ; i < clearItemCart.length ; i++) {

    clearItemCart[i].onclick = function(e) {
        alert(1)
    }
}

function totalCart(){
    let  priceProductCart = $$(".js-price-product-cart")
    let totalPrice = $(".total-cart span").textContent
    let resultPrice = 0
    console.log(totalPrice);
 
    for(let i = 0 ; i < priceProductCart.length; i++) {
        resultPrice += Number.parseFloat(priceProductCart[i].textContent)
    }
    $(".total-cart span").textContent = resultPrice + ".000"
}



































window.onload = function() {
    
  
  line.style.left = tabs[0].offsetLeft + "px";
  line.style.width = tabs[0].offsetWidth + "px";


  totalCart()
}