const numberCartItem = document.getElementById("numberCartItem");
const cartDetail = document.getElementById("cartDetail");
const cart = JSON.parse(localStorage.getItem("cart")) || [];
const forms = document.getElementById("needs-validation");

function renderCart() {
  cartDetail.innerHTML = "";
  let totalPrice = 0;

  cart.forEach((item) => {
    const li = document.createElement("li");
    li.classList.add(
      "list-group-item",
      "d-flex",
      "justify-content-between",
      "lh-sm",
      "fs-6"
    );
    const div = document.createElement("div");
    const h6 = document.createElement("h6");
    h6.classList.add("my-0");
    h6.innerText = item.name;
    h6.style.fontSize = "14px";

    const small = document.createElement("small");
    small.classList.add("text-muted");
    small.innerText = item.description;
    div.appendChild(h6);
    div.appendChild(small);
    const span = document.createElement("span");
    span.classList.add("text-muted");
    const totalPriceItem = calculateTotalPrice(item);
    span.innerText = `${totalPriceItem.toLocaleString("vi-VN")}`;
    span.style.fontSize = "13px";

    li.appendChild(div);
    li.appendChild(span);
    cartDetail.appendChild(li);

    totalPrice += totalPriceItem;
  });

  const liTotal = document.createElement("li");
  liTotal.classList.add(
    "list-group-item",
    "d-flex",
    "justify-content-between",
    "bg-light"
  );
  const spanTotal = document.createElement("span");
  spanTotal.innerText = "Tổng (VND)";
  const strong = document.createElement("strong");
  strong.innerText = `${totalPrice.toLocaleString("vi-VN")} đ`;
  liTotal.appendChild(spanTotal);
  liTotal.appendChild(strong);
  cartDetail.appendChild(liTotal);
}

renderCart();

forms.addEventListener(
  "submit",
  function (event) {
    event.preventDefault();
    if (!forms.checkValidity()) {
      event.stopPropagation();
      forms.classList.add("was-validated");
    } else {
      const formData = new FormData(forms);
      const data = {};
      for (let key of formData.keys()) {
        data[key] = formData.get(key);
      }

      const order = {
        ...data,
        cart: cart,
      };

      toastMsg.innerText = "Đặt hàng thành công!";
      toastMsg.classList.add("bg-success", "text-white");
      toastBootstrap.show();

      localStorage.setItem("order", JSON.stringify(order));

      setTimeout(() => {
        localStorage.removeItem("cart");
        window.location.href = "index.html";
      }, 1000);
    }
  },
  false
);
