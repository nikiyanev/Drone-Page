var width = window.innerWidth
|| document.documentElement.clientWidth
|| document.body.clientWidth;
// SCROLL REVEAL - just trying this library
const sr = ScrollReveal({
    origin: "top",
    distance: "80px",
    duration: 2000,
    reset: true,
});

if (width < 500) {
    // scroll PORTFOLIO
    sr.reveal(".h2-cards", {})
    sr.reveal(".card", {interval: 200})

    // scroll TRAILER
    sr.reveal(".trailer h2", {})
    sr.reveal(".circle", {delay: 200})
    sr.reveal(".iframe-container", {delay: 400})
}