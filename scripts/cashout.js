document.getElementById("cashout-money-btn").addEventListener("click", function(event){
    event.preventDefault();
    
    const currentBalance = document.getElementById("current-balance").innerText;
    const convertedCurrentBalance = parseFloat(currentBalance);

    const amount = document.getElementById("cashout-amount").value;
    const convertedAmount = parseInt(amount);

    const pin = document.getElementById("cashout-pin").value;
    const convertedPin = parseInt(pin);

    if(amount && pin){
        if(convertedPin === 1234){
            const remaining = convertedCurrentBalance - convertedAmount;
            document.getElementById("current-balance").innerText = remaining;
        }
        else{
            alert("Invalid Pin, please try again")
        }
    }
    else{
        alert("Empty fields, please input the valid info")
    }
})