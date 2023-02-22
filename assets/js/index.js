//TODO: add event click for login Button

const loginBtn = document.querySelector(".navbar__login-btn");
const loginUI = document.querySelector(".signin");

loginBtn.addEventListener("click", () => {
  loginUI.classList.add("show-loginUI");
});

loginUI.addEventListener("click", (event) => {
  loginUI.classList.remove("show-loginUI");
});


//TODO: add event click for signup button

const signupBtn = document.querySelector(".navbar__signup-btn");
const signupUI = document.querySelector(".signup");

signupBtn.addEventListener("click", () => {
  signupUI.classList.add("show-signupUI");
});

signupUI.addEventListener("click", (event) => {
  signupUI.classList.remove("show-signupUI");
});

