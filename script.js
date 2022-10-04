const desktopMenu = document.querySelector(".desktop-menu");
const menuEmail = document.querySelector(".navbar-email");
const menuHamburger = document.querySelector(".menu");
const menuMobile = document.querySelector(".mobile-menu");
const menuCarrito = document.querySelector(".navbar-shopping-cart");
const shoppingCartContainer = document.querySelector("#shoppingCartContainer");
const cards = document.querySelector(".cards-container");
const productDetailContainer = document.querySelector("#productDetail");
const productDetailIconClose = document.querySelector(".product-detail-close");
const darken = document.querySelector(".darken");


menuEmail.addEventListener("click", toggleDesktopMenu = () => {
    const isAsideOpen = !shoppingCartContainer.classList.contains("inactive");
    const isProductDetailClose = productDetailContainer.classList.contains("inactive");

    if (!isProductDetailClose) {
        productDetailContainer.classList.add("inactive");
    }
    if (isAsideOpen) {
        shoppingCartContainer.classList.add("inactive")
    }

    darken.classList.add("inactive")
    desktopMenu.classList.toggle("inactive");
});

menuHamburger.addEventListener("click", toggleMenuMobile = () => {
    const isAsideOpen = !shoppingCartContainer.classList.contains("inactive");
    const isProductDetailClose = productDetailContainer.classList.contains("inactive");

    if (!isProductDetailClose) {
        productDetailContainer.classList.add("inactive");
    }

    if (isAsideOpen) {
        shoppingCartContainer.classList.add("inactive");
    }

    menuMobile.classList.toggle("inactive");
});

menuCarrito.addEventListener("click", toggleProductDetail = () => {
    const isMobileMenuClose = menuMobile.classList.contains("inactive");
    const isDesktopMenuClose = desktopMenu.classList.contains("inactive");
    const isProductDetailClose = productDetailContainer.classList.contains("inactive");


    if (!isProductDetailClose) {
        productDetailContainer.classList.add("inactive");
    }

    if (!isMobileMenuClose) {
        menuMobile.classList.add("inactive");
    }
    if (!isDesktopMenuClose) {
        desktopMenu.classList.add("inactive");
    }
    if (shoppingCartContainer.classList.contains("inactive")) {
        darken.classList.remove("inactive")
    } else {
        darken.classList.add("inactive")
    }
    
    shoppingCartContainer.classList.toggle("inactive");
    
});

productDetailIconClose.addEventListener("click", closeProductDetail = () => {
    darken.classList.add("inactive")
    productDetailContainer.classList.add("inactive");
});

const productList = [];

productList.push({
    name: "Bike",
    price: 120,
    image: "https:images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});

productList.push({
    name: "Televisor",
    price: 220,
    image: "https:images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});

productList.push({
    name: "Notebook",
    price: 620,
    image: "https:images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});

productList.push({
    name: "Bike",
    price: 120,
    image: "https:images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});

productList.push({
    name: "Televisor",
    price: 220,
    image: "https:images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});

productList.push({
    name: "Notebook",
    price: 620,
    image: "https:images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});

/*
<div class="product-card">
    <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
    <div class="product-info">
        <div>
            <p>$120,00</p>
            <p>Bike</p>
        </div>
        <figure>
            <img src="./icons/bt_add_to_cart.svg" alt="">
        </figure>
    </div>
</div>
*/

const renderProducts = (arr) => {
    for (product of arr) {
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");
    
        const productImg = document.createElement("img");
        productImg.setAttribute("src", product.image);
        productImg.addEventListener("click", openProductDetailAside = () => {
            const isAsideOpen = !shoppingCartContainer.classList.contains("inactive");
            const isMobileMenuClose = menuMobile.classList.contains("inactive");
            const isDesktopMenuClose = desktopMenu.classList.contains("inactive");

            if (isAsideOpen) {
                shoppingCartContainer.classList.add("inactive");
            }
            if (!isMobileMenuClose) {
                menuMobile.classList.add("inactive");
            }
            if (!isDesktopMenuClose) {
                desktopMenu.classList.add("inactive");
            }
            darken.classList.remove("inactive")
            productDetailContainer.classList.remove("inactive");
        });

    
        const productInfo = document.createElement("div");
        productInfo.classList.add("product-info");
    
        const productInfoDiv = document.createElement("div");
    
        const productPrice = document.createElement("p");
        productPrice.innerText = "$" + product.price;
    
        const productName = document.createElement("p");
        productName.innerText = product.name;
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
        const productInfoFigure = document.createElement("figure");
        const productImgCart = document.createElement("img");
        productImgCart.setAttribute("src", "./icons/bt_add_to_cart.svg");
    
        productInfoFigure.appendChild(productImgCart);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        cards.appendChild(productCard);
    
    }
}

renderProducts(productList)










