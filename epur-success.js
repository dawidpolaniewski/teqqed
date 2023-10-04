var reportButton = document.getElementById("downloadLink");

var password = new URLSearchParams(window.location.search).get("report");

var reports = {
"haslo1": "https://google.pl",
"haslo2": "https://google.pl",
    };

if (password in reports) {
  reportButton.href = reports[password];
} else {
  reportButton.style.display = "none";
  document.body.innerHTML +=
    'Nie znaleziono raportu dla hasła "' + password + '"';
}
