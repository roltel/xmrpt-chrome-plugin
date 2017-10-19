var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var myObj = JSON.parse(this.responseText);
           //   document.getElementById("demo").innerHTML = myObj.name;
     document.getElementById("quote-xmr").innerHTML += myObj.USD + "$" + " | XMR/EUR: " + myObj.EUR + " | BTC/XMR: " + myObj.BTC;
    }
};
xmlhttp.open("GET", "https://min-api.cryptocompare.com/data/price?fsym=XMR&tsyms=BTC,USD,EUR", true);
xmlhttp.send();