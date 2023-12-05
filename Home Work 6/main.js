// main.js
import { registerUser } from "./form.js";
import { saveUser } from "./storage.js";

document.addEventListener("DOMContentLoaded", function () {
  const signupForm = document.getElementById("signup-form");

  function handleRegistration() {
    const userData = registerUser();

    if (userData) {
      saveUser(userData);

      const usernameInput = document.getElementById("username");
      const emailInput = document.getElementById("email");
      const passwordInput = document.getElementById("password");

      usernameInput.value = "";
      emailInput.value = "";
      passwordInput.value = "";

      alert("Registration successful!");
    }
  }

  const registerButton = document.querySelector("button");
  registerButton.addEventListener("click", handleRegistration);
});
