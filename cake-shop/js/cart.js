const cartList = document.getElementById("cartList");
const cart = JSON.parse(localStorage.getItem("cart")) || [];


function renderCart() {
  if (cartList) {
    cartList.innerHTML = "";
    let totalPrice = 0;
    let totalQuantity = 0;
    cart.forEach((item) => {
      const tr = document.createElement("tr");
      const tdId = document.createElement("td");
      const tdImg = document.createElement("td");
      const tdPrice = document.createElement("td");
      const tdQuantity = document.createElement("td");
      const tdTotalPrice = document.createElement("td");
      const tdAction = document.createElement("td");
      const btnDelete = document.createElement("button");

      tdId.innerText = item.id;
      tdImg.innerHTML = `<img src="${item.img}" alt="${item.name}" style="width: 100px; height: 100px;"> ${item.name}`;
      tdPrice.innerText = item.price;
      tdQuantity.innerText = item.quantity;
      const totalPriceItem = calculateTotalPrice(item);
      tdTotalPrice.innerText = `${totalPriceItem.toLocaleString("vi-VN")} VNĐ`;
      btnDelete.innerText = "Xóa";
      btnDelete.classList.add("btn", "btn-danger");

      btnDelete.addEventListener("click", () => {
        const index = cart.findIndex((product) => product.id === item.id);
        cart.splice(index, 1);
        localStorage.setItem("cart", JSON.stringify(cart));
        toastMsg.innerText = "Đã xóa sản phẩm khỏi giỏ hàng";
        toastMsg.classList.add("bg-success", "text-white");
        toastBootstrap.show();
        renderCart();
      });

      tdAction.appendChild(btnDelete);
      tr.appendChild(tdId);
      tr.appendChild(tdImg);
      tr.appendChild(tdPrice);
      tr.appendChild(tdQuantity);
      tr.appendChild(tdTotalPrice);
      tr.appendChild(tdAction);
      cartList.appendChild(tr);

      totalQuantity += item.quantity;
      totalPrice += totalPriceItem;
    });

    const trFooter = document.createElement("tr");
    const tdFooter = document.createElement("td");
    const tdTotalPrice = document.createElement("td");
    const tdTotalQuantity = document.createElement("td");
    const tdAction = document.createElement("td");
    const btnCheckout = document.createElement("button");

    tdFooter.setAttribute("colspan", "3");
    tdFooter.innerText = "Tổng tiền";
    tdFooter.style.textAlign = "right";
    tdFooter.style.fontWeight = "bold";

    tdTotalPrice.innerText = `${totalPrice.toLocaleString("vi-VN")} VNĐ`;
    tdTotalPrice.style.fontWeight = "bold";

    tdTotalQuantity.innerText = totalQuantity;
    tdTotalQuantity.style.fontWeight = "bold";

    btnCheckout.innerText = "Thanh toán";

    btnCheckout.classList.add("btn", "btn-primary");
    btnCheckout.addEventListener("click", () => {
      window.location.href = "/checkout.html";
    });
    tdAction.appendChild(btnCheckout);

    trFooter.appendChild(tdFooter);
    trFooter.appendChild(tdTotalQuantity);
    trFooter.appendChild(tdTotalPrice);
    trFooter.appendChild(tdAction);
    cartList.appendChild(trFooter);
  }
}

renderCart();