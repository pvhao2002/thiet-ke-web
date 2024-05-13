const title = document.getElementById("about-title");
const pageCurrent = document.getElementById("page-current");
if (path.includes("/about.html")) {
  title.textContent = "Về chúng tôi";
  pageCurrent.textContent = "Về chúng tôi";
} else if (path.includes("/contact.html")) {
  title.textContent = "Liên hệ";
  pageCurrent.textContent = "Liên hệ";
} else if (path.includes("/menu.html")) {
  title.textContent = "Menu & Giá";
  pageCurrent.textContent = "Menu & Giá";
} else if (path.includes("/login.html")) {
  title.textContent = "Đăng nhập";
  pageCurrent.textContent = "Đăng nhập";
} else if (path.includes("/register.html")) {
  title.textContent = "Đăng ký";
  pageCurrent.textContent = "Đăng ký";
} else if (path.includes("/cart.html")) {
  title.textContent = "Giỏ hàng";
  pageCurrent.textContent = "Giỏ hàng";
} else if (path.includes("/checkout.html")) {
  title.textContent = "Thanh toán";
  pageCurrent.textContent = "Thanh toán";
} else if (path.includes("/thank.html")) {
  title.textContent = "Cảm ơn";
  pageCurrent.textContent = "Cảm ơn";
}