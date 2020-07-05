const loginModal = document.getElementById("login-modal");
const registerModal = document.getElementById("register-modal");

function showRegisterModal() {
  registerModal.style.display = "block";
}
function showLoginModal() {
  loginModal.style.display = "block";
}

function cancelLoginModal() {
  loginModal.style.display = "none";
}

function cancelRegisterModal() {
  registerModal.style.display = "none";
}

document.addEventListener("mouseup", function (e) {
  if (!loginModal.contains(e.target)) {
    loginModal.style.display = "none";
  }
});

document.addEventListener("mouseup", function (e) {
  if (!registerModal.contains(e.target)) {
    registerModal.style.display = "none";
  }
});
