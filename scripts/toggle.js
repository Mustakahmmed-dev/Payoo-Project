
document.getElementById("add-money-card").addEventListener("click", function(){
    document.getElementById("add-money-sec").style.display = "block";
    document.getElementById("cashout-money-sec").style.display = "none";
})
document.getElementById("cashout-money-card").addEventListener("click", function(){
    document.getElementById("add-money-sec").style.display = "none";
    document.getElementById("cashout-money-sec").style.display = "block";
})
