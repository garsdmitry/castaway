const menu = window.document.querySelector('.header-hamburger-menu')

const mobileMenu = window.document.querySelector('.header-mobile__menu')
let isOpenMenu = false;

menu.addEventListener('click', () => {
    isOpenMenu = !isOpenMenu
    if (isOpenMenu) {
        menu.classList.add('header-hamburger-menu_close')
    } else {
        menu.classList.remove('header-hamburger-menu_close')
    }
    mobileMenu.style.display = isOpenMenu ? 'block' : 'none'
})