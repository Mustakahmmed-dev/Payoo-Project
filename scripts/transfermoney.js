document.getElementById("transfer-money-btn").addEventListener("click", function (event) {
    event.preventDefault();

    const bank = document.getElementById("transfer-bank-name").value;
    const account = document.getElementById("transfer-account").value;
    const accountNumber = parseInt(account);

    const pin = document.getElementById("transfer-pin").value;
    const pinCode = parseInt(pin);

    const amount = document.getElementById("transfer-amount").value;
    const transferAmount = parseInt(amount);

    const currentBalance = document.getElementById("current-balance").innerText;
    const availableBalance = parseFloat(currentBalance);



    if (account && transferAmount && pinCode) {
        if (account.length === 11) {
            if (pinCode == 1234) {
                if (transferAmount < availableBalance) {
                    const remainingOfTransfer = availableBalance - transferAmount;
                    document.getElementById("current-balance").innerText = remainingOfTransfer;

                    const div = document.getElementById("container");
                    const p = document.createElement("p");
                    p.innerHTML = `
                     Your transfer money is successful! <br>
                        ${bank}: <b>Amount</b> ${transferAmount}, <b>Account: </b> ${accountNumber}
                    `
                    div.appendChild(p);

                }
                else {
                    alert("Sorry, insufficient balance")
                }
            }
            else {
                alert("Invalid pin")
            }
        }
        else {
            alert("Invalid Account")
        }
    }
    else {
        alert("Please enter valid info")
    }


})