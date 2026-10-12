
const signInForm = document.getElementById("signInForm");

signInForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    const savedEmail = localStorage.getItem("email");
    const savedPassword = localStorage.getItem("password");

    if (email === savedEmail && password === savedPassword) {
        alert("Sign In Successful!");
        window.location.href = "./index.html";
    } else {
        alert("Invalid Email or Password!");
    }
});
