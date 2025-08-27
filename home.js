
// logout button
console.log('j')

document.getElementById('logout-btn').addEventListener('click', function () {
    console.log('logginh out')
    window.location.href = './index.html';
})


const validPin = 1234;

// add money
document.getElementById('add-money-btn').addEventListener('click', function (e) {
    e.preventDefault();
    const bank = document.getElementById('bank').value;
    const accountNum = document.getElementById('account-num').value;
    const amount = parseInt(document.getElementById('add-amount').value);
    const pin = parseInt(document.getElementById('add-pin').value);

    if (accountNum.length !== 11) {
        alert('Account number must be 11 digits')
        return;
    }

    if (pin !== validPin) {
        alert('Wrong Pin');
        return;
    }

    const availableBalance = parseInt(document.getElementById('available-balance').innerText);
    const newBalance = availableBalance + amount;



    document.getElementById('available-balance').innerText = newBalance;



})


// cashout money

document.getElementById('withdraw-money-btn').addEventListener('click', function (e) {

    e.preventDefault()


    const agentNum = document.getElementById('agent-num').value;
    const withdrawAmount = parseInt(document.getElementById('cashout-amount').value);
    const pin = parseInt(document.getElementById('cashout-pin').value);

    if (agentNum.length != 11) {
        alert('Account number must be 11 digits')
        return;
    }

    if (pin !== validPin) {
        alert('Wrong Pin');
        return;
    }

    
    const availableBalance = parseInt(document.getElementById('available-balance').innerText);
    const newBalance=availableBalance-withdrawAmount;


    document.getElementById('available-balance').innerText=newBalance;

}
)



// toggle
document.getElementById('add-btn').addEventListener('click', function () {

    document.getElementById('cashout-parent').style.display = 'none';
    document.getElementById('addmoney-parent').style.display = 'block';
})


document.getElementById('cashout-btn').addEventListener('click', function () {

    document.getElementById('addmoney-parent').style.display = 'none'
    document.getElementById('cashout-parent').style.display = 'block';
})