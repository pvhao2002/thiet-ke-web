const inputUsername = document.getElementById("username");
const inputPassword = document.getElementById("password");
const buttonLogin = document.getElementById("buttonLogin");

buttonLogin.addEventListener("click", (e) => {
  e.preventDefault();

  const username = inputUsername.value;
  const password = inputPassword.value;

  if (!username || !password) {
    toastMsg.innerText = "Tên đăng nhập hoặc mật khẩu không được để trống!";
    toastMsg.classList.add("bg-danger", "text-white");
    toastBootstrap.show();
    return;
  }

  const user = listUser.find(
    (user) => user.username === username && user.password === password
  );

  if (!user) {
    toastMsg.innerText = "Tên đăng nhập hoặc mật khẩu không chính xác!";
    toastMsg.classList.add("bg-danger", "text-white");
    toastBootstrap.show();
    return;
  }

  localStorage.setItem("user", JSON.stringify(user));
  window.location.href = "index.html";
});
