(function ($) {
  "use strict";
  // Sticky Navbar
  $(window).scroll(function () {
    if ($(this).scrollTop() > 40) {
      $(".navbar").addClass("sticky-top");
    } else {
      $(".navbar").removeClass("sticky-top");
    }
  });

  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $(".back-to-top").fadeIn("slow");
    } else {
      $(".back-to-top").fadeOut("slow");
    }
  });
  $(".back-to-top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 1500, "easeInOutExpo");
    return false;
  });
})(jQuery);

const liveToast = document.getElementById("liveToast");
const toastMsg = document.getElementById("toast-msg");
const listUser = JSON.parse(localStorage.getItem("listUser")) || [];

let toastBootstrap;
if (liveToast) {
  toastBootstrap = bootstrap.Toast.getOrCreateInstance(liveToast);
}

function isImproving() {
  toastMsg.classList.add("bg-success", "text-white");
  toastBootstrap.show();
}
function calculateTotalPrice(product) {
  const priceStr = product.price.replace(/[^\d,]/g, "");
  const price = parseFloat(priceStr.replace(",", "."));
  const totalPrice = price * product.quantity;
  return totalPrice;
}
