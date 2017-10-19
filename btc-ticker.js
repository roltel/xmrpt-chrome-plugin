var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var myObj = JSON.parse(this.responseText);
     document.getElementById("quote-btc").innerHTML += myObj.USD.last + "$" + " | " + "BTC/EUR " + myObj.EUR.symbol + myObj.EUR.last;
    }
};
xmlhttp.open("GET", "https://blockchain.info/ticker", true);
xmlhttp.send();