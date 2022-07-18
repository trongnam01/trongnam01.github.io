// 
let ar = document.querySelectorAll(".card-title")

// console.log(ar[0].parentElement.parentElement.parentElement);
// let a = ar[1].parentElement.parentElement.parentElement
// 
// a.onclick = () => {
//     console.log(a);
// }



// 

let userlogin = false
let titleProducts = []



let arrTitlCard = Array.from(document.querySelectorAll(".card-title"))

let formProducts = Array.from(document.querySelectorAll(".card-title"))

let indexProduct = document.querySelectorAll(".products")               //  trang index
let cart = document.querySelector(".header-cart")                     // gio hang
let deleteCart = document.querySelector(".icon-delete-modal")         // xóa modal
let detaiContent = document.querySelector(".products-detai-content")   // xem thêm 
let seeMore = document.querySelector(".see-more")                       // xem thêm 
let methodBank = document.querySelector(".method-bank")                    // hình thức chuỷen
let payBank = document.querySelector("#bank")                               // stk 
let whenReceiving = document.querySelector("#when-receiving")               //        
let footerModal = document.querySelector(".footer-modal button")           //  
let modaproduct = document.querySelector(".modal-cantainer")
let modalogin = document.querySelector(".modal-login")
let login = document.querySelector("#login")
let informationUser = document.querySelector(".modal-information-user")
let btnNext = document.querySelector(".next")
let inputSearch = document.querySelector(".slider-input-search")

let formSearch = document.querySelector(".slider-content-ul")           // thẻ ul search
let ulSearch = document.querySelector(".slider-content-ul ul")           // thẻ ul search
let contaiProducts = document.querySelector("#products")           // id product
let prodCard = document.querySelectorAll(".js-products-card")           // card product
let tabsproducts = document.querySelector("#products .product-item-tabs ")           // tabs product
let modalCart = document.querySelector(".modal-cart")               // gio hang
let btnOder = document.querySelector(".btn-pay-order")              // btn order
let btnHotline = document.querySelector(".btn-hotline")              // btn order
let btnOderCard = document.querySelector(".btn-order")              // btn order
let indexProdDetai = document.querySelector(".js-products-detai")              // btn order
let indexProducts = document.querySelector(".js-products")              // btn order

if (modalCart)
    modalCart.onclick = (e) => {
        document.querySelector(".modal-cart").style.display = "none"
    }


// mở modal
if (cart) {
    cart.onclick = function () {
        document.querySelector(".modal-cart").style.display = "flex"
        informationUser.style.display = "none"
        modalogin.style.display = "none"
        modaproduct.style.display = "block"
    }
}

// đóng modal
if (deleteCart) {
    deleteCart.onclick = () => {
        document.querySelector(".modal-cart").style.display = "none"
    }
}

// mở text producst detai
if (seeMore) {
    seeMore.onclick = () => {
        if (detaiContent.getAttribute("class") === "products-detai-content active") {
            detaiContent.classList.remove("active")
            seeMore.innerHTML = ' Xem thêm <i class="fa-solid fa-caret-down"></i> '
        } else {
            detaiContent.classList.add("active")
            seeMore.innerHTML = ' Thu gọn <i class="fa-solid fa-caret-up icon-up"></i> '
        }
        seeMore.classList.toggle("active")
    }
}

// phương thức mua hàng
if (payBank) {
    payBank.onclick = () => {
        methodBank.classList.add("active")
    }
}
if (whenReceiving) {
    whenReceiving.onclick = () => {
        methodBank.classList.remove("active")
    }
}

// if đk chuyến đến trang thanh toán

if (footerModal) {

    footerModal.onclick = () => {
        if (userlogin) {
            // khi đã đăng nhập

        } else {
            modaproduct.style.display = "none"
            modalogin.style.display = "block"

        }
    }
}


//  bỏ sự lan tỏa từ thẻ cha
if (modaproduct)
    modaproduct.onclick = (e) => {
        e.stopPropagation()
    }

if (modalogin)
    modalogin.onclick = (e) => {
        e.stopPropagation()
    }
if (informationUser)
    informationUser.onclick = (e) => {
        e.stopPropagation()
    }


// đăng nhập
if (login) {
    login.onclick = (e) => {
        modalogin.style.display = "none"
        informationUser.style.display = "block"

    }
}
// qua trang thanh toán
if (btnNext) {
    btnNext.onclick = (e) => {
        informationUser.style.display = "none"
        window.location = "payment.html";
    }
}


// push titleproduct
formProducts.forEach((data) => {
    titleProducts.push(data.innerText)
})

// check li search
function checkLiSearch(liSearch) {
    // thẻ ul search
    for (let i = 5; i < liSearch.length; i++) {
        liSearch[i].style.display = "none"
    }

    for (let i = 0; i < liSearch.length; i++) {
        liSearch[i].setAttribute("onclick", `selectLi(this)`)
    }
}

let copyCard
// input search
if (inputSearch) {
    inputSearch.onkeyup = (e) => {
        let valueinput = e.target.value
        let keywCard = []
        let arrelement = []

        if (valueinput) {
            arrelement = titleProducts.filter(data => {
                return data.toLowerCase().replace(/ /g, '').startsWith(valueinput.toLowerCase().replace(/ /g, ''))
            })
            arrelement = arrelement.map((data) => {
                return `<li> ${data} </li> `
            })

            if (document.querySelector(".js-index")) {
                document.querySelector("#all-products").style.display = "none"
                document.querySelector(".js-search").style.display = "block"

                for (let i = 0; i < arrTitlCard.length; i++) {
                    let keywtitlSearch = arrTitlCard[i].innerText

                    if (keywtitlSearch.toLowerCase().replace(/ /g, '').startsWith(valueinput.toLowerCase().replace(/ /g, ''))) {
                        let parenkeyw = arrTitlCard[i].parentElement.parentElement.parentElement
                        let sale = ''

                        if (parenkeyw.querySelector("span.sale-off")) {
                            sale = parenkeyw.querySelector(".sale-off").innerText
                        }

                        let objProdSearch = {
                            title: parenkeyw.querySelector(".card h5.card-title").innerText,
                            img: parenkeyw.querySelector("img").getAttribute("src"),
                            price: parenkeyw.querySelector(".price").innerText,
                            sale: sale,
                            id: parenkeyw.querySelector(".card").getAttribute("id-data")
                        }
                        keywCard.push(objProdSearch)
                        document.querySelector(".js-search > p").innerHTML = ` <p>Kết quả được từ tìm thấy với từ khóa"<span class="keyword-search">${valueinput}</span>"</p>`

                    }
                }
                showCard(keywCard)
                if (keywCard.length === 0) {
                    document.querySelector(".js-search > p").innerHTML = ` <p> Không tìm thấy kết quả nào tìm thấy với từ khóa "<span class="keyword-search">${valueinput}</span>"</p>`
                }
            }


            // trang products
            if (contaiProducts) {
                tabsproducts.style.display = "none"

                for (let i = 0; i < prodCard.length; i++) {
                    let titleProd = prodCard[i].querySelector(".card h5.card-title").innerText

                    if (titleProd.toLowerCase().replace(/ /g, '').indexOf(valueinput) > -1) {
                        prodCard[i].style.display = ""
                    } else {
                        prodCard[i].style.display = "none"

                    }
                }
            }
            // trang index
            if (formSearch)
                formSearch.classList.add("active")

            showLiSearch(arrelement)
            showCard(keywCard)

        } else {
            //  khi ko onkeyup

            if (formSearch)
                formSearch.classList.remove("active")


            if (prodCard)
                if (contaiProducts) {
                    tabsproducts.style.display = "flex"
                }
            for (let i = 0; i < prodCard.length; i++) {
                prodCard[i].style.display = "block"
            }

            if (document.querySelector(".js-index")) {
                document.querySelector("#all-products").style.display = "block"
                document.querySelector(".js-search").style.display = "none"
            }
        }
        let liSearch = document.querySelectorAll(".slider-content-ul li")
        checkLiSearch(liSearch)

        copyCard = [...keywCard]
    }
}

function selectLi(e) {
    inputSearch.value = e.innerText
    formSearch.classList.remove("active")
    inputSearch.focus()
    let copyData = []

    for (let i = 0; i < copyCard.length; i++) {
        let textCatdCopy = copyCard[i].title
        if (textCatdCopy.toLowerCase().replace(/ /g, '').startsWith(e.innerText.toLowerCase().replace(/ /g, ''))) {
            copyData.push(copyCard[i])
        } else {
            console.log(copyCard[i]);

        }
    }
    console.log(e.innerText);
    document.querySelector(".js-search > p").innerHTML = ` <p>Kết quả được từ tìm thấy với từ khóa"<span class="keyword-search">${e.innerText}</span>"</p>`
    showCard(copyData)
}

// show li search
function showLiSearch(data) {
    let htmlUl;
    if (!data.length) {
        valueinput = inputSearch.value

        htmlUl = `<li>${valueinput} </li>`
    } else {
        htmlUl = data.join('')
    }
    if (ulSearch)
        ulSearch.innerHTML = htmlUl
}

function showCard(data) {
    let contaiShowCard = document.querySelector(".js-search > .row")

    let htmlCard = data.map((el) => {
        return `
        <div class="col-12 col-sm-6 col-lg-4">
            <div class="card" id-data="${el.id}">
                <img src="${el.img}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${el.title}</h5>
                    <span class="price">${el.price}</span>
                </div>
                <span class="sale-off">${el.sale}</span>
            </div>
         </div>
     `
    }).join('')

    if (document.querySelector(".js-index"))
        contaiShowCard.innerHTML = htmlCard

    let saleProduct = document.querySelectorAll(".sale-off")
    saleProduct.forEach(e => {
        if (e.innerText = ' ') {
            e.style.display = "none"
        }
    });
}


function dataCard(keywCard, valueinput) {

    if (document.querySelector(".js-index")) {
        document.querySelector("#all-products").style.display = "none"
        document.querySelector(".js-search").style.display = "block"

        for (let i = 0; i < arrTitlCard.length; i++) {
            let keywtitlSearch = arrTitlCard[i].innerText

            if (keywtitlSearch.toLowerCase().replace(/ /g, '').startsWith(valueinput)) {
                let parenkeyw = arrTitlCard[i].parentElement.parentElement.parentElement
                let sale = ''

                if (parenkeyw.querySelector("span.sale-off")) {
                    sale = parenkeyw.querySelector(".sale-off").innerText
                }

                let objProdSearch = {
                    title: parenkeyw.querySelector(".card h5.card-title").innerText,
                    img: parenkeyw.querySelector("img").getAttribute("src"),
                    price: parenkeyw.querySelector(".price").innerText,
                    sale: sale,
                    id: parenkeyw.querySelector(".card").getAttribute("id-data")
                }
                keywCard.push(objProdSearch)
                document.querySelector(".js-search > p").innerHTML = ` <p>Kết quả được từ tìm thấy với từ khóa"<span class="keyword-search">${valueinput}</span>"</p>`

            } else {
                document.querySelector(".js-search > p").innerHTML = ` <p> Không tìm thấy kết quả nào tìm thấy với từ khóa "<span class="keyword-search">${valueinput}</span>"</p>`
            }
        }

        showCard(keywCard)
    }
}
if (btnOder) {
    btnOder.onclick = () => {
        toast({
            title: 'Thành Công',
            message: 'Bạn đã mua hàng thành công',
            typeo: 'success',
            duration: 3000
        })

        btnOder.disabled = true;

        setTimeout(() => {
            window.location = "index.html";
        }, 2500)
    }
}


function toast({
    title = '',
    message = '',
    typeo = '',
    duration = 3000
}) {
    const main = document.getElementById('toast')

    if (main) {
        // tạo thẻ div 
        const toast = document.createElement('div')
        const icons = {
            info: "fa-solid fa-circle-check",
            warning: "fa-solid fa-circle-check",
            success: "fa-solid fa-circle-check",
            error: "fa-solid fa-circle-exclamation"
        }
        //  xóa tự động
        const removeTimeo = setTimeout(function () {
            main.removeChild(toast)
        }, duration + 1000)

        //   xóa bằng click
        toast.onclick = function (e) {
            if (e.target.closest('.toast__close')) {
                main.removeChild(toast)
                clearTimeout(removeTimeo);
            }
        }

        const icon = icons[typeo]
        const delay = (duration / 1000).toFixed(2)

        toast.classList.add("toasts", `toast--${typeo}`)
        toast.style.animation = `sideInLeft ease 0.3s, fadeOut linear 1s ${delay}s forwards`
        toast.innerHTML = `
        <div class="toast__icon">
            <i class="${icon}"></i>
        </div>
        <div class="toast__body">
            <h3 class="toast__title">${title}</h3>
            <p class="toast__msg">${message} </p>
        </div>
        <div class="toast__close">
            <i class="fa-solid fa-xmark"></i>
        </div>
        `;

        // đưa toast vào thẻ main
        main.appendChild(toast)

    }
}




let arrItemPoducts
arrItemPoducts = JSON.parse(window.localStorage.getItem("itemProduct"))

if (document.querySelector(".js-index")) {
    arrItemPoducts = {}

    for (let i = 0; i < indexProduct.length; i++) {
        let card = indexProduct[i].querySelectorAll(".card")
        let nameArr = indexProduct[i].getAttribute("id")
        let arr = []

        card.forEach((e) => {
            let id = e.getAttribute("id-data")
            let img = e.querySelector("img").getAttribute("src")
            let title = e.querySelector(".card-title").innerText
            let price = e.querySelector(".price").innerText
            let sale = ''
            if (e.querySelector(".sale-off")) {

                sale = e.querySelector(".sale-off").innerText
            }

           let objContent = {
                id: id,
                img: img,
                title: title,
                price: price,
                sale: sale,
            }

            arr.push(objContent)
        })
        arrItemPoducts[nameArr] = arr
    }
    window.localStorage.setItem("itemProduct", JSON.stringify(arrItemPoducts))
}

// 
if(contaiProducts) {

}





































if(indexProdDetai) {
    btnOderCard.onclick = () => {
        toast({
            title: 'Thành Công',
            message: 'Sản phẩm đã được thêm vào giỏ hàng',
            typeo: 'success',
            duration: 3000
        })
    
    }
}
