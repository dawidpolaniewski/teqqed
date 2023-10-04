var reportButton = document.getElementById("downloadLink");

var password = new URLSearchParams(window.location.search).get("report");

    var reports = {
        "haslo1": "https://example.com/report1.pdf",
        "haslo2": "https://example.com/report2.pdf",
    };

if (password in reports) {
  reportButton.href = reports[password];
} else {
  reportButton.style.display = "none";
  document.body.innerHTML +=
    'Nie znaleziono raportu dla hasła "' + password + '"';
}
