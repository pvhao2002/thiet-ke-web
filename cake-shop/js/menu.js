const currentUser = JSON.parse(localStorage.getItem("user"));

const allCake = document.querySelectorAll(".cake");
allCake.forEach((cake) => {
  // Lắng nghe sự kiện khi hover vào cake
  cake.addEventListener("mouseover", () => {
    cake.classList.add("cake-active");
  });

  // Lắng nghe sự kiện khi hover ra khỏi cake
  cake.addEventListener("mouseout", () => {
    cake.classList.remove("cake-active");
  });

  // Lắng nghe sự kiện khi click vào cake
  cake.addEventListener("click", () => {
    if (currentUser) {
      const id = cake.getAttribute("data-id");
      const img = cake.querySelector("img").src;
      const name = cake.querySelector(".cake-name").innerText;
      const price = cake.querySelector(".price").innerText;
      const description = cake.querySelector(".cake-description").innerText;

      const cart = JSON.parse(localStorage.getItem("cart")) || [];
      const cakeExist = cart.find((item) => item.id === id);

      if (cakeExist) {
        cakeExist.quantity += 1;
        cakeExist.price = price;
      } else {
        cart.push({
          id,
          img,
          name,
          price,
          description,
          quantity: 1,
        });
      }

      localStorage.setItem("cart", JSON.stringify(cart));

      toastMsg.innerText = "Đã thêm vào giỏ hàng!";
      toastMsg.classList.add("bg-success", "text-white");
      toastBootstrap.show();
    } else {
      toastMsg.innerText = "Vui lòng đăng nhập để thêm vào giỏ hàng";
      toastMsg.classList.add("bg-danger", "text-white");
      toastBootstrap.show();
    }
  });
});
