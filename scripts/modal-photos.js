let modal = document.querySelector(".modal-photos");
let previews = document.querySelectorAll(".photos-section img");
let original = document.querySelector(".full-img");
let imgText = document.querySelector(".caption");

previews.forEach((preview) => {
    preview.addEventListener("click", () => {
        modal.classList.add("open");
        original.classList.add("open");
        //Dynamic change text and image
        let originalSrc = preview.getAttribute("data-original");
        original.src = `./images/gallery/${originalSrc}`;
        let altText = preview.alt;
        imgText.textContent = altText;
        console.log(previews);
    });
});

// modal.addEventListener("click", (e) => {
//     if (e.target.classList.contains('modal-photos')) {
//         modal.classList.remove("open");
//         original.classList.remove("open");
//         ('original').off('click');
//     }
// });

window.onclick = function(event) {
    if (event.target == modal) {
        modal.classList.remove("open");  
        ('original').off('click');
        // original.classList.remove("open");
    }
}