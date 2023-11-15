const showPopuBtn = document.querySelector(".login-btn");
const hidePopuBtn = document.querySelector(".form-popup .close-btn");

// Show form popup
showPopuBtn.addEventListener("click", () => {
    document.body.classList.toggle("show-popup");
});

// Hide form popup
hidePopuBtn.addEventListener("click", ()=> showPopuBtn.click());