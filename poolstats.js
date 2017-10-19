var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var myObj = JSON.parse(this.responseText);
     document.getElementById("poolstats").innerHTML += myObj.pool_statistics.miners + "<br>" + "Hash Rate: " + myObj.pool_statistics.hashRate + "H/s" + "<br>" + "Block Found: " + myObj.pool_statistics.totalBlocksFound ;
    }
};
xmlhttp.open("GET", "https://pool.xmr.pt/api/pool/stats", true);
xmlhttp.send();