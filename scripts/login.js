
document.getElementById("btn-submit").addEventListener("click", function(event){
    event.preventDefault();

    let accountNumber = document.getElementById("account-number").value;
    
    let pin = document.getElementById("pin").value;
    let convertedPin = parseInt(pin);
    
    if(accountNumber.length === 11){
        if(convertedPin == 12345){
            window.location.href="../main.html";
        }
        else{
            alert("Your pin is incorrect, please input the valid pin");
        }
    }
    else{
        alert("Account number is not found. Please input the correct Account number.")
    }
})