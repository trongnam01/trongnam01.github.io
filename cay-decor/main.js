// 






// 



let cart = document.querySelector(".header-cart")
let deleteCart = document.querySelector(".icon-delete-modal")
let detaiContent = document.querySelector(".products-detai-content")
let seeMore = document.querySelector(".see-more")
let methodBank = document.querySelector(".method-bank")
let payBank = document.querySelector("#bank")
let whenReceiving = document.querySelector("#when-receiving")

if(cart) {
    cart.onclick = function() {
        document.querySelector(".modal-cart").style.display = "flex"
    }
}
if(deleteCart) {
    deleteCart.onclick = () => {
        document.querySelector(".modal-cart").style.display = "none"
    }
}

if(seeMore) {
    seeMore.onclick = () => {
        if(detaiContent.getAttribute("class") === "products-detai-content active") {
            detaiContent.classList.remove("active")
            seeMore.innerHTML = ' Xem thêm <i class="fa-solid fa-caret-down"></i> '
        } else {
            detaiContent.classList.add("active")
            seeMore.innerHTML = ' Thu gọn <i class="fa-solid fa-caret-up icon-up"></i> '
        }
        seeMore.classList.toggle("active")
    }
}

if(payBank) {
    payBank.onclick = () => {
        methodBank.classList.toggle("active")
    }
}
if(whenReceiving) {
    whenReceiving.onclick = () => {
        methodBank.classList.remove("active")
    }
}