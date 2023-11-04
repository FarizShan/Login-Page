const wrapper = document.querySelector(".wrapper");
const LoginLink = document.querySelector(".login-link");
const RegLink = document.querySelector(".reg-link");
const LoginPopUp = document.querySelector(".btn-login-popup");
const IconClose = document.querySelector(".icon-close");
RegLink.addEventListener("click", () => {
  wrapper.classList.add("active");
});
LoginLink.addEventListener("click", () => {
  wrapper.classList.remove("active");
});
LoginPopUp.addEventListener("click", () => {
  wrapper.classList.add("Pop-Up-Btn");
});
IconClose.addEventListener("click", () => {
    wrapper.classList.remove("Pop-Up-Btn");
  });
