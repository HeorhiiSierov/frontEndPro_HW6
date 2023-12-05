export function regisetrUser() {
  const usernameInput = document.getElementById("username");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");

  const username = usernameInput.value.trim();
  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();

  if (username === "" || email === "" || password === "") {
    alert("Please fill in all fields");
    return;
  }

  const userData = {
    username: username,
    email: email,
    password: password,
  };

  return userData;
}
