
document.getElementById("add-money-btn").addEventListener("click", function(event){
    event.preventDefault();

    const amount = document.getElementById("amount").value;
    const convertedAmount = parseInt(amount);

    const pin = document.getElementById("pin").value;
    const convertedPin = parseInt(pin);

    const currentBalance = document.getElementById("current-balance").innerText;
    const convertedCurrentBalance = parseFloat(currentBalance)
    
    const accountNumber = document.getElementById("add-money-account").value;
    const bank = document.getElementById("all-banks").value;
    
    if(amount && pin){
        if(convertedPin === 1234){
            const newAmount = convertedAmount + convertedCurrentBalance;
            document.getElementById("current-balance").innerText = newAmount;

            const div = document.getElementById("container");
            const p = document.createElement("p");
            p.innerHTML = `
             Money added successfully! <br>
                ${bank}: <b>Amount</b> ${convertedAmount}, <b>Account: </b> ${accountNumber}
            `
            div.appendChild(p);
        }
        else{
            alert("Please enter a valid PIN")
        }
    }
    else{
        alert("Sorry, something went wrong")
    }
})