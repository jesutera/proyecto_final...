const showPopuBtn = document.querySelector(".login-btn");
const hidePopuBtn = document.querySelector(".form-popup");
const formPopup = document.querySelector(".form-popup .close-btn");
const loginSignuplink = document.querySelectorAll(".form-box .bottom-link a");

// Show form popup
showPopuBtn.addEventListener("click", () => {
    document.body.classList.toggle("show-popup");
});

// Hide form popup
hidePopuBtn.addEventListener("click", ()=> showPopuBtn.click());

loginSignuplink.forEach(link => {
    link.addEventListener("click", (e) => {
         e.preventDefault();
        formPopup.classList[link.id === "signup-link" ? 'add' : 'remove'] ("show-signup");
    });
});