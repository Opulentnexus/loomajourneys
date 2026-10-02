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












<script>
/* =========================================================
   LOOMA INTERNATIONAL DESTINATIONS POPUP
   ========================================================= */

const internationalPopup =
  document.getElementById("internationalPopup");


function openInternationalPopup() {
  internationalPopup.classList.add("active");

  document.body.style.overflow = "hidden";
}


function closeInternationalPopup() {
  internationalPopup.classList.remove("active");

  document.body.style.overflow = "";
}


/* Close when clicking outside popup */
internationalPopup.addEventListener("click", function (event) {

  if (event.target === internationalPopup) {
    closeInternationalPopup();
  }

});


/* Close with ESC */
document.addEventListener("keydown", function (event) {

  if (event.key === "Escape") {
    closeInternationalPopup();
  }

});


/* =========================================================
   WHATSAPP
   ========================================================= */

function sendInternationalWhatsApp(place) {

  const phoneNumber = "918330000696";

  const message =
    `Hi Looma Journeys! 👋\n\n` +
    `I'm interested in planning a trip to ${place}.\n\n` +
    `Please share the available packages, itinerary and pricing.`;

  const whatsappURL =
    `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  window.open(whatsappURL, "_blank");
}
</script>
