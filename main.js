const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute(
    "class",
    isOpen ? "ri-close-line" : "ri-menu-4-line"
  );
});

navLinks.addEventListener("click", () => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-4-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".header__image img", {
  ...scrollRevealOption,
  origin: "right",
});
ScrollReveal().reveal(".header__content h2", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".header__content p", {
  ...scrollRevealOption,
  delay: 1500,
});
ScrollReveal().reveal(".header__btn", {
  ...scrollRevealOption,
  delay: 2000,
});
ScrollReveal().reveal(".header__socials li", {
  ...scrollRevealOption,
  delay: 2500,
  interval: 500,
});

// SOCIAL SIGNUP EVENTS
document.querySelectorAll(".social").forEach(btn => {
  btn.addEventListener("click", () => {
    const provider = btn.textContent.trim();
    alert(`Signing up with ${provider}...`);
  });
});

// CHECK LOGIN STATE
function updateNav() {
  const isLoggedIn = localStorage.getItem("loggedIn") === "true";
  const navLinks = document.getElementById("nav-links");

  const signupLink = navLinks.querySelector('a[href="signup.html"]');
  const signinLink = navLinks.querySelector('a[href="signin.html"]');

  if (isLoggedIn) {
    signupLink.style.display = "none";
    signinLink.style.display = "none";
  } else {
    signupLink.style.display = "block";
    signinLink.style.display = "block";
  }
}

updateNav();
