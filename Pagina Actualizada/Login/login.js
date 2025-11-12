// ==========================
// LOGIN - VALIDACIÓN BÁSICA
// ==========================
const form = document.querySelector("form");
const userInput = form.querySelector("input[type='text']");
const passInput = form.querySelector("input[type='password']");
const userError = form.querySelectorAll(".error-message")[0];
const passError = form.querySelectorAll(".error-message")[1];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let valid = true;

  if (userInput.value.trim() === "") {
    userError.style.display = "block";
    valid = false;
  } else {
    userError.style.display = "none";
  }

  if (passInput.value.trim() === "") {
    passError.style.display = "block";
    valid = false;
  } else {
    passError.style.display = "none";
  }

  if (valid) {
    alert("¡Bienvenido al sistema académico!");
    // Aquí después conectas con tu backend o DB
  }
});

// ==========================
// MODAL - RECUPERAR CONTRASEÑA
// ==========================
const openForgot = document.getElementById("open-forgot");
const modal = document.getElementById("forgot-modal");
const closeBtns = document.querySelectorAll(".close-modal");
const mainLogin = document.getElementById("main-login");

openForgot.addEventListener("click", (e) => {
  e.preventDefault();
  modal.classList.remove("hidden");
  mainLogin.classList.add("hidden");
});

closeBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    modal.classList.add("hidden");
    mainLogin.classList.remove("hidden");
  });
});

// ==========================
// RECUPERAR CONTRASEÑA - PASOS
// ==========================
const verifyCodeBtn = document.getElementById("verify-code-btn");
const accessCode = document.getElementById("access-code");
const stepCode = document.getElementById("step-code");
const stepPassword = document.getElementById("step-password");
const forgotError = document.getElementById("forgot-error");

verifyCodeBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (accessCode.value.trim() === "12345678") { // Ejemplo, cámbialo
    stepCode.style.display = "none";
    stepPassword.style.display = "block";
    forgotError.textContent = "";
  } else {
    forgotError.textContent = "Código incorrecto";
    forgotError.style.color = "#ff0033";
  }
});

// ==========================
// MOSTRAR / OCULTAR CONTRASEÑAS
// ==========================
document.querySelectorAll(".toggle-password").forEach(btn => {
  btn.addEventListener("click", () => {
    const target = document.getElementById(btn.dataset.target);
    if (target.type === "password") {
      target.type = "text";
      btn.textContent = "🙈";
    } else {
      target.type = "password";
      btn.textContent = "👁️";
    }
  });
});

// ==========================
// VALIDAR NUEVA CONTRASEÑA
// ==========================
const newPass = document.getElementById("new-password");
const confirmPass = document.getElementById("confirm-password");
const recoverForm = document.getElementById("recover-form");

recoverForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const rules = {
    length: newPass.value.length >= 5,
    number: /\d/.test(newPass.value),
    special: /[!@#$%^&*(),.?":{}|<>]/.test(newPass.value),
  };

  if (!rules.length || !rules.number || !rules.special) {
    alert("La contraseña no cumple los requisitos.");
    return;
  }

  if (newPass.value !== confirmPass.value) {
    alert("Las contraseñas no coinciden.");
    return;
  }

  alert("✅ Contraseña restablecida con éxito.");
  modal.classList.add("hidden");
  mainLogin.classList.remove("hidden");
});
// Efecto de aparición al cargar el header
window.addEventListener("load", () => {
  const header = document.querySelector("header");
  header.style.opacity = "0";
  header.style.transition = "opacity 1s ease";
  setTimeout(() => {
    header.style.opacity = "1";
  }, 200);
});

