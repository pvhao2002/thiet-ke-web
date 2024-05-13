const path = window.location.pathname;
const navLinks = document.querySelectorAll(".nav-item");
const user = JSON.parse(localStorage.getItem("user"));

navLinks.forEach((link) => {
  if (path === "/" && link.getAttribute("href") === "index.html") {
    link.classList.add("active");
    return;
  }

  if (path.includes(link.getAttribute("href"))) {
    link.classList.add("active");
  }
});

const btnLogin = document.getElementById("btn-login");
const btnRegister = document.getElementById("btn-register");
const btnLogout = document.getElementById("btn-logout");
const btnCart = document.getElementById("btn-cart");
const btnCheckOut = document.getElementById("btn-checkout");

if (user) {
  btnLogin.style.display = "none";
  btnRegister.style.display = "none";
  btnLogout.style.display = "block";
  btnCart.style.display = "block";
  btnCheckOut.style.display = "block";
} else {
  btnLogin.style.display = "block";
  btnRegister.style.display = "block";
  btnLogout.style.display = "none";
  btnCart.style.display = "none";
  btnCheckOut.style.display = "none";

  if (path === "/checkout.html" || path === "/cart.html") {
    window.location.href = "/login.html";
  }
}

btnLogout.addEventListener("click", () => {
  localStorage.removeItem("user");
  localStorage.removeItem("cart");
  window.location.href = "/login.html";
});
