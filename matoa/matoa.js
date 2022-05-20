const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);


const tabs = $$(".tab-item");
const panes = $$(".tab-pane");

const tabActive = $(".tab-item.active");
const line = $(".tabs .tabs-line");
let quantity = $("#quantity")
let result;
let modal = $(".modal-cart")

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

//  cộng 
$(".btn-add-cart").onclick = function () {
    let textCart = $("#cart-quantity").textContent
    if(result) {
        console.log(result);
        $("#cart-quantity").textContent = result + +(textCart)
    }
    result = undefined
    quantity.textContent = 0
}

$(".cart-border").onclick = function () {
    modal.classList.add("open")
}

//  ẩn modal
$(".incon-delete-modal").onclick = function() {
    modal.classList.remove("open")
}

modal.onclick = function() {
    console.log(1);

    modal.classList.remove("open")
}
$(".modal-cantainer").onclick = function(e) {
    e.stopPropagation()
}































window.onload = function() {
  
  line.style.left = tabs[0].offsetLeft + "px";
  line.style.width = tabs[0].offsetWidth + "px";
}