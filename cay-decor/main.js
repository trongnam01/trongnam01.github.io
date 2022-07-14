// 






// 



let cart = document.querySelector(".header-cart")
let deleteCart = document.querySelector(".icon-delete-modal")
let detaiContent = document.querySelector(".products-detai-content")
let seeMore = document.querySelector(".see-more")

if(cart) {

    cart.onclick = function() {
        document.querySelector(".modal-cart").style.display = "flex"
    }
}
deleteCart.onclick = () => {
    document.querySelector(".modal-cart").style.display = "none"
}


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
