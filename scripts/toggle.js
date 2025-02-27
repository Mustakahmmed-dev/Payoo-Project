
document.getElementById("add-money-card").addEventListener("click", function(){
    document.getElementById("add-money-sec").style.display = "block";
    document.getElementById("cashout-money-sec").style.display = "none";
    document.getElementById("transactions-sec").style.display = "none";
    document.getElementById("transfer-money-sec").style.display = "none";
})
document.getElementById("cashout-money-card").addEventListener("click", function(){
    document.getElementById("add-money-sec").style.display = "none";
    document.getElementById("cashout-money-sec").style.display = "block";
    document.getElementById("transactions-sec").style.display = "none";
    document.getElementById("transfer-money-sec").style.display = "none";

})
document.getElementById("transfer-money-card").addEventListener("click", function(){
    document.getElementById("add-money-sec").style.display = "none";
    document.getElementById("cashout-money-sec").style.display = "none";
    document.getElementById("transactions-sec").style.display = "none";
    document.getElementById("transfer-money-sec").style.display = "block";
})

document.getElementById("transaction-money-card").addEventListener("click", function(){
    document.getElementById("transactions-sec").style.display = "block";

})
