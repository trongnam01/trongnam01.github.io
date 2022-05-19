const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);


const tabs = $$(".tab-item");
const panes = $$(".tab-pane");

const tabActive = $(".tab-item.active");
const line = $(".tabs .tabs-line");
let result;

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

$("#reduction").onclick = function() {
    result = +($("#quantity").textContent)
    if(result <= 0){
        $("#quantity").textContent = result
    }else{
        $("#quantity").textContent = result - 1
    }
}
$("#more").onclick = function() {
    result = +($("#quantity").textContent)
    $("#quantity").textContent = result + 1
}


$(".btn-add-cart").onclick = function () {
 
    
}





























window.onload = function() {
  
  line.style.left = tabs[0].offsetLeft + "px";
  line.style.width = tabs[0].offsetWidth + "px";
}