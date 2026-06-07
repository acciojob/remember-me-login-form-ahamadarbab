//your JS code here. If required.
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const checkbox = document.getElementById("checkbox");
const form = document.getElementById("loginForm");
const existingBtn = document.getElementByid("existing");

// check localstorage on page load
window.onload = function () {
	const savedUser = localStorage.getItem("username");
	const savedPass = localStorage.getItem("password");

	if(savedUser && savedPass) {
		existingBtn.style.display = "block";
	} else {
		existingBtn.style.display = "none";
	}

	// Ensure default state
	checkbox.checked = false;
	usernameInput.value = "";
	passwordInput.value = "";
};

// form submit handler
form.addEventListener("submit", function (e) {
	e.preventDefault();

	const username = usernameInput.value;
	const password = passwordInput.value;

	alert("Logged in as " + username);

	if(checkbox.checked) {
		localStorage.setItem("username", username);
		localStorage.setItem("password", password);
		existingBtn..style.display = "block";
	} else {
		localStorage.removeItem("username");
		localStorage.removeItem("password");
		existingBtn.style.display = "none";
	}
});

// existing user login
existingBtn.addEventlistener("click", function() {
	const savedUser = localStorage.getItem("username");

	if(savedUser) {
		alert("Logged in as " + savedUser);
	}
});