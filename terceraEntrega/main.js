document.addEventListener("DOMContentLoaded", () => {
  const registerForm = document.getElementById("registerForm");
  const loginForm = document.getElementById("loginForm");
  const userInfo = document.getElementById("userInfo");

  registerForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const created_at = Math.floor(Date.now() / 1000);
  
    const user = {
      username: username,
      password: password,
      created_at: created_at,
    };
    saveSession(user);
    displayUserInfo(user);

  });

  loginForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const loginUsername = document.getElementById("loginUsername").value;
    const loginPassword = document.getElementById("loginPassword").value;
    const savedUser = getUserByUsername(loginUsername);

    if (savedUser && savedUser.password === loginPassword) {
      displayUserInfo(savedUser);
    } else {
      alert("Credenciales inválidas.");
    }
  });

  function saveSession(user) {
    const saveSession = confirm("¿Desea guardar la sesión?");
    const storage = saveSession ? localStorage : sessionStorage;
    storage.setItem(user.username, JSON.stringify(user));
    alert("Usuario registrado exitosamente.");
  }

  function getUserByUsername(username) {
    const savedUser = localStorage.getItem(username) || sessionStorage.getItem(username);
    return JSON.parse(savedUser);
  }

  function displayUserInfo(user) {
    userInfo.innerHTML = `
      <h2>Información del Usuario</h2>
      <p>Username: ${user.username}</p>
      <p>Password: ${user.password}</p>
      <p>Created At: ${new Date(user.created_at * 1000).toLocaleString()}</p>
    `;
  }
});