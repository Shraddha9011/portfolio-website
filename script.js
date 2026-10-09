// =========================================
// PORTFOLIO JAVASCRIPT
// =========================================

console.log("Welcome to Shraddha's Portfolio!");


// =========================================
// SMOOTH SCROLLING
// =========================================

document.querySelectorAll('a[href^="#"]').forEach(function (link) {

    link.addEventListener("click", function (event) {

        const targetId = this.getAttribute("href");

        const target = document.querySelector(targetId);

        if (target) {

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});


// =========================================
// CURRENT YEAR
// =========================================

const footerText = document.querySelector("footer p");

if (footerText) {

    const currentYear = new Date().getFullYear();

    footerText.textContent =
        `© ${currentYear} Shraddha. Built with HTML, CSS & JavaScript.`;

}