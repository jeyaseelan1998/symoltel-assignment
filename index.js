const menuToggler = document.querySelector(".hamburger-btn")
menuToggler.addEventListener("click", () => {
    const menu = document.querySelector(".mobile-nav-items")
    menu.classList.toggle("show-menu")
})