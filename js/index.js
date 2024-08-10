const header = document.querySelector(".header");
const offer = document.querySelector(".offer");
const headerBurger = document.querySelector(".header__burger");
const headerMenu = document.querySelector(".header__menu");

offer.style.paddingTop =  header.clientHeight + "px";   

headerBurger.addEventListener("click", () => {
    headerBurger.classList.toggle("is-expanded");
    headerMenu.classList.toggle("show");
    offer.style.paddingTop =  header.clientHeight + "px";   
});

$('.open-popup-link').magnificPopup({
    type: 'inline',
    showCloseBtn: true
    // other options
  });

$('.open-popup-product-link').magnificPopup({
    type: 'inline',
    showCloseBtn: true,
    callbacks: {
        open: function () {
            this.content.find("h2").text(this.currItem.el.attr("data-title"));
            this.content.find("img").text(this.currItem.el.attr("data-img"));
        }
    }
    // other options
});

AOS.init();
