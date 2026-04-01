function login() {
  const role = document.getElementById("role").value;
  const error = document.getElementById("error");

  if (!role) {
    error.innerText = "Please select a role";
    return;
  }

  localStorage.setItem("role", role);
  window.location.href = "dashboard.html";
}

function loadDashboard() {
  const role = localStorage.getItem("role");

  if (!role) {
    window.location.href = "index.html";
    return;
  }

  document.getElementById("welcome").innerText = "Welcome, " + role.toUpperCase()
  document.getElementById("roleText").innerText = role;

  if (role === "admin") {
    document.getElementById("adminPanel").style.display = "block";
    document.getElementById("userPanel").style.display = "none";
  } else {
    document.getElementById("userPanel").style.display = "block";
    document.getElementById("adminPanel").style.display = "none";
  }
}

function showPage(page) {
  document.getElementById("dashboardPage").style.display = "none";
  document.getElementById("profilePage").style.display = "none";

  if (page === "dashboard") {
    document.getElementById("dashboardPage").style.display = "block";
  } else {
    document.getElementById("profilePage").style.display = "block";
  }
}

function logout() {
  localStorage.removeItem("role");
  window.location.href = "index.html";
}