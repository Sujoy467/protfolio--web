
// Hero Section JavaScript

document.addEventListener("DOMContentLoaded", function () {

    // Hire Me button smooth scrolling
    const hireButton = document.querySelector(
        '.primary-btn'
    );

    if (hireButton) {
        hireButton.addEventListener("click", function (event) {
            const target = document.querySelector("#contact");

            if (target) {
                event.preventDefault();
                target.scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    }

    // View Portfolio smooth scrolling
    const portfolioButton = document.querySelector(
        '.secondary-btn'
    );

    if (portfolioButton) {
        portfolioButton.addEventListener("click", function (event) {
            const target = document.querySelector("#portfolio");

            if (target) {
                event.preventDefault();
                target.scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    }

    // Social link click effect
    const socialLinks = document.querySelectorAll(
        ".social-links a"
    );

    socialLinks.forEach(function (link) {
        link.addEventListener("mouseenter", function () {
            link.style.transform = "translateY(-5px)";
        });

        link.addEventListener("mouseleave", function () {
            link.style.transform = "translateY(0)";
        });
    });

});

// Personal Information Section Animation

document.addEventListener("DOMContentLoaded", function () {

    const aboutSection = document.querySelector(".about-content");

    if (!aboutSection) return;

    const observer = new IntersectionObserver(function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {
                entry.target.classList.add("about-visible");
                observer.unobserve(entry.target);
            }

        });

    }, {
        threshold: 0.15
    });

    observer.observe(aboutSection);

});

// MY SKILLS ANIMATION


/* MY SKILLS ANIMATION FIX */

document.addEventListener("DOMContentLoaded", function () {

    const skillsSection = document.querySelector("#skills");
    const progressBars = document.querySelectorAll(".skill-progress");

    if (!skillsSection || progressBars.length === 0) return;

    const observer = new IntersectionObserver(function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                progressBars.forEach(function (bar) {
                    bar.style.width = bar.getAttribute("data-progress");
                });

                observer.unobserve(skillsSection);
            }

        });

    }, {
        threshold: 0.2
    });

    observer.observe(skillsSection);

});


// CONTACT FORM - EMAIL DRAFT

document.addEventListener("DOMContentLoaded", function () {

    const contactForm = document.getElementById("contactForm");

    if (!contactForm) return;

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const name = document.getElementById("contactName").value.trim();
        const email = document.getElementById("contactEmail").value.trim();
        const subject = document.getElementById("contactSubject").value.trim();
        const message = document.getElementById("contactMessage").value.trim();

        if (!name || !email || !subject || !message) {
            alert("Please fill in all fields.");
            return;
        }

        const mailSubject = encodeURIComponent(subject);
        const mailBody = encodeURIComponent(
            "Name: " + name +
            "\nEmail: " + email +
            "\n\nMessage:\n" + message
        );

        const mailtoLink =
            "mailto:sujoy20@gmail.com" +
            "?subject=" + mailSubject +
            "&body=" + mailBody;

        window.location.href = mailtoLink;

        document.getElementById("formNote").textContent =
            "Your email app should open with your message.";

    });

});

// AUTOMATIC COPYRIGHT YEAR

document.addEventListener("DOMContentLoaded", function () {

    const yearElement = document.getElementById("currentYear");

    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

});
