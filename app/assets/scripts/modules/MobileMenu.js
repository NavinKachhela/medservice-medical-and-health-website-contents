/**
 * 1. Select the element
 * 2. Add Listener to it
 * 3. Write a function which performs job whe event occurs 
 * document.querySelector("selector").addEventListener("click", function() {
 * 
 * });
 */

class MobileMenu {
    constructor() {
        // Select the Element
        this.menuIcon = document.querySelector(".mobile-header-icon");
        this.mobileHeader = document.querySelector(".mobile-menu");
        this.events();
    }

    events() {
        this.menuIcon.addEventListener("click", () => this.toggleMenu());
    }
    toggleMenu() {
        this.mobileHeader.classList.toggle("mobile-menu-active");
        this.menuIcon.classList.toggle("mobile-header-icon-close");
    }
}

export default MobileMenu;
