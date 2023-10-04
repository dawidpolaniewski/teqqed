var reportButton = document.getElementById("downloadLink");

var password = new URLSearchParams(window.location.search).get("report");

var reports = {
"haslo1": "https://6691076.fs1.hubspotusercontent-na1.net/hubfs/6691076/EPUR/Personalized%20reports/European%20Profitability%20and%20Utilization%20Report%202023%20(Early%20Access)%20dZR_E4%7BAZ%7D.pdf",
"haslo2": "https://6691076.fs1.hubspotusercontent-na1.net/hubfs/6691076/EPUR/Personalized%20reports/European%20Profitability%20and%20Utilization%20Report%202023%20(Early%20Access)%20%3CRrx2t@8%3B.pdf",
    };

if (password in reports) {
  reportButton.href = reports[password];
} else {
  reportButton.style.display = "none";
  document.body.innerHTML +=
    'Nie znaleziono raportu dla hasła "' + password + '"';
}
