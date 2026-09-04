/* =========================================
   HEADER JAVASCRIPT
========================================= */

document.addEventListener("DOMContentLoaded", () => {

    const header = document.getElementById("travelHeader");
    const menuToggle = document.getElementById("menuToggle");
    const mobileMenu = document.getElementById("mobileMenu");


    /* =====================================
       STICKY HEADER EFFECT
    ===================================== */

    const handleScroll = () => {

        if (window.scrollY > 20) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }

    };


    window.addEventListener("scroll", handleScroll);

    handleScroll();


    /* =====================================
       MOBILE MENU
    ===================================== */

    menuToggle.addEventListener("click", () => {

        const isOpen = menuToggle.classList.toggle("active");

        mobileMenu.classList.toggle("open");

        menuToggle.setAttribute(
            "aria-expanded",
            isOpen ? "true" : "false"
        );

    });


    /* =====================================
       MOBILE DROPDOWNS
    ===================================== */

    const dropdownButtons =
        document.querySelectorAll(".mobile-dropdown-btn");


    dropdownButtons.forEach(button => {

        button.addEventListener("click", () => {

            const parent =
                button.closest(".mobile-dropdown");

            parent.classList.toggle("active");

        });

    });


    /* =====================================
       CLOSE MOBILE MENU AFTER CLICK
    ===================================== */

    const mobileLinks =
        document.querySelectorAll(".mobile-menu a");


    mobileLinks.forEach(link => {

        link.addEventListener("click", () => {

            menuToggle.classList.remove("active");

            mobileMenu.classList.remove("open");

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

        });

    });

});