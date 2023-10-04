var passwordInput = document.getElementById("password");
var errorMessage = document.getElementById("error-message");

function redirectToSuccessPage() {
    var passwordValue = passwordInput.value;

var reports = {
"haslo1": "https://google.pl",
"haslo2": "https://google.pl",
    };

    if (passwordValue in reports) {
        var url = "epur-results-success";
        url += "?report=" + passwordValue;
        window.location.href = url;
    } else {
        errorMessage.style.display = "block";
        passwordInput.classList.add("invalid");
    }
}

document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();
    redirectToSuccessPage();
});

passwordInput.addEventListener("input", function() {
    if (this.classList.contains("invalid")) {
        errorMessage.style.display = "none";
        this.classList.remove("invalid");
    }
});
