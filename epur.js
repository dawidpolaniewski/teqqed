var passwordInput = document.getElementById("password");
var errorMessage = document.getElementById("error-message");

function redirectToSuccessPage() {
    var passwordValue = passwordInput.value;

var reports = {
"dZRiE4yAZu": "https://6691076.fs1.hubspotusercontent-na1.net/hubfs/6691076/EPUR/Personalized%20reports/European%20Profitability%20and%20Utilization%20Report%202023%20(Early%20Access)%20dZR_E4%7BAZ%7D.pdf",
"pRrx2t@8": "https://6691076.fs1.hubspotusercontent-na1.net/hubfs/6691076/EPUR/Personalized%20reports/European%20Profitability%20and%20Utilization%20Report%202023%20(Early%20Access)%20%3CRrx2t@8%3B.pdf",
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
