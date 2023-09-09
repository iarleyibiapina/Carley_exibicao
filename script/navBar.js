// const toggleBtn = document.querySelector(".toggle_btn");
// const toggleBtnIcon = document.querySelector(".toggle_btn ion-icon");
// const dropDownMenu = document.querySelector(".navbar");

// toggleBtn.onclick = function () {
//   dropDownMenu.classList.toggle("open");
//   const isOpen = dropDownMenu.classList.contains("open");

//   toggleBtnIcon.classList = isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars";
// };

// const botao = document.getElementById("icone");
// const nav = document.getElementsByTagName("nav");
// botao.addEventListener(
//   "click",
//   () => console.log("teste")((nav.style.right = none)),
//   (nav.style.width = none)
// );

class MobileNav {
  constructor(menu, navList, navLinks) {
    this.menu = document.querySelector(menu);
    this.navList = document.querySelector(navList);
    this.navLinks = document.querySelectorAll(navLinks);
    this.activeClass = "active";

    this.handleClick = this.handleClick.bind(this);
  }

  animateLinks() {
    this.navLinks.forEach((link, index) => {
      link.style.animation
        ? (link.style.animation = "")
        : (link.style.animation = `navLinkFade 0.5s ease forwards ${
            index / 7 + 0.3
          }s`);
    });
  }

  handleClick() {
    this.navList.classList.toggle(this.activeClass);
    this.menu.classList.toggle(this.activeClass);
    this.animateLinks();
  }

  addClickEvent() {
    this.menu.addEventListener("click", this.handleClick);
  }
  // inicia SE a classe menu esta no documento, if sozinho retorna true ou falso
  init() {
    if (this.menu) {
      this.addClickEvent();
    }
    return this;
  }
}

const mobileNav = new MobileNav(".icone-navbar", ".navbar", ".navbar li");

mobileNav.init();
