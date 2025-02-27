document.getElementById("cashout-money-btn").addEventListener("click", function(event){
    event.preventDefault();
    
    const currentBalance = document.getElementById("current-balance").innerText;
    const convertedCurrentBalance = parseFloat(currentBalance);

    const amount = document.getElementById("cashout-amount").value;
    const convertedAmount = parseInt(amount);

    const pin = document.getElementById("cashout-pin").value;
    const convertedPin = parseInt(pin);

    const accountNumber = document.getElementById("account-number").value;
    const bank = document.getElementById("bank-name").value;

    if(convertedAmount < 0){
        alert("Sorry, invalid amount");
        return;
    }
    else{
        if(convertedAmount > convertedCurrentBalance ){
            alert("Sorry, you don't have enough balance");
            return;
        }
    }

    if(amount && pin){
        if(convertedPin === 1234){
            const remaining = convertedCurrentBalance - convertedAmount;
            document.getElementById("current-balance").innerText = remaining;

            const div = document.getElementById("container");
            const p = document.createElement("p");
            p.innerHTML = `
             Your cashout money is successful! <br>
                ${bank}: <b>Amount</b> ${convertedAmount}, <b>Account: </b> ${accountNumber}
            `
            div.appendChild(p);
        }
        else{
            alert("Invalid Pin, please try again")
        }
    }
    else{
        alert("Empty fields, please input the valid info")
    }
})