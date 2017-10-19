var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var myObj = JSON.parse(this.responseText);
     document.getElementById("minerstats").innerHTML += myObj.amtDue + "<br>" + "Hash Rate: " + myObj.hash + " H/s <br>";
    }
};
xmlhttp.open("GET", "https://supportxmr.com/api/miner/44VZ4vmpZcG5zB1jXwwr3oJZRKXmdQna9AyAc6QnqhLAKdG3jcsu9hiBJ7PqP7ibSQVBhsQLbDZPHBqJskXzoZ98Mk77qNy/stats", true);
xmlhttp.send();