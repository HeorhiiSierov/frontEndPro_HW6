export function saveUser(userData) {
  if (typeof Storage !== "undefined") {
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

    existingUsers.push(userData);

    localStorage.setItem("users", JSON.stringify(existingUsers));

    return true;
  } else {
    alert("LocalStorage is not supported in this browser");
    return false;
  }
}
