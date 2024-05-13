const inputUsername = document.getElementById("username");
const inputPassword = document.getElementById("password");
const inputFullName = document.getElementById("fullname");
const buttonRegister = document.getElementById("buttonRegister");

buttonRegister.addEventListener("click", (e) => {
  e.preventDefault();

  const username = inputUsername.value;
  const password = inputPassword.value;
  const fullName = inputFullName.value;

  if (!username || !password || !fullName) {
    toastMsg.innerText = "Vui lòng nhập đầy đủ thông tin!";
    toastMsg.classList.add("bg-danger", "text-white");
    toastBootstrap.show();
    return;
  }

  const user = listUser.find((user) => user.username === username);

  if (user) {
    toastMsg.innerText = "Tên đăng nhập đã tồn tại!";
    toastMsg.classList.add("bg-danger", "text-white");
    toastBootstrap.show();
    return;
  }

  const newUser = {
    username,
    password,
  };

  listUser.push(newUser);

  localStorage.setItem("listUser", JSON.stringify(listUser));
  toastMsg.innerText = "Đăng ký thành công!";
  toastMsg.classList.add("bg-success", "text-white");
  toastBootstrap.show();
  setTimeout(() => {
    window.location.href = "login.html";
  }, 1000);
});
