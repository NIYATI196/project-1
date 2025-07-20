document.addEventListener("DOMContentLoaded", () => {
    // Animate header links on hover (bounce effect)
    const navLinks = document.querySelectorAll("header ul li a");

    navLinks.forEach(link => {
        link.addEventListener("mouseover", () => {
            link.style.transform = "scale(1.1)";
        });

        link.addEventListener("mouseout", () => {
            link.style.transform = "scale(1)";
        });
    });

    // Smooth fade-in animation for main content when scrolling into view
    const mainContent = document.querySelector("main");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                mainContent.style.opacity = 1;
                mainContent.style.transition = "opacity 1s ease-in-out";
            }
        });
    });

    observer.observe(mainContent);

    // Optional: Scroll-to-top button or interactive feature can go here
});
