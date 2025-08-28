
// logout button


document.getElementById('logout-btn').addEventListener('click', function () {
    console.log('logging out')
    window.location.href = './index.html';
})


const validPin = 1234;
const transectionData = []

// funtion to get input vallue number
function getValueNumber(id) {
    return parseInt(document.getElementById(id).value);
}

//function to get input value
function getValue(id) {
    return document.getElementById(id).value;
}

// function to get innerText

function getInnerText(id) {
    return parseInt(document.getElementById(id).innerText);
}

// function to get innerText
function setInnerText(value) {
    document.getElementById('available-balance').innerText = value;
}


// function to handle toggle

function handleToggle(id) {
    const forms = document.getElementsByClassName('form');
    for (const form of forms) {
        form.style.display = 'none';
    }

    document.getElementById(id).style.display = 'block';


}

// function to toggle buttons backgrounds

function handleButtonToggle(id) {

    const formBtns = document.getElementsByClassName('form-btn')

    for (const btn of formBtns) {
        btn.classList.remove("border-[#0874f2]", "bg-[#0874f20d]", "text-[#0874f2]")
        btn.classList.add("border-gray-300")

    }

    document.getElementById(id).classList.remove("border-gray-300");
    document.getElementById(id).classList.add("border-[#0874f2]", "bg-[#0874f20d]", "text-[#0874f2]");



}

handleButtonToggle('add-btn')

// add money
document.getElementById('add-money-btn').addEventListener('click', function (e) {
    e.preventDefault();



    const bank = getValueNumber('bank');
    const accountNum = getValue('account-num');
    const amount = getValueNumber('add-amount');
    const pin = getValueNumber('add-pin');

    if (accountNum.length !== 11) {
        alert('Account number must be 11 digits')
        return;
    }

    if (pin !== validPin) {
        alert('Wrong Pin');
        return;
    }

    if (amount <= 0) {
        alert("Inavalid amount");
        return;
    }

    const availableBalance = getInnerText('available-balance');
    const newBalance = availableBalance + amount;



    setInnerText(newBalance);

    const data = {
        name: "Add Money",
        date: new Date().toLocaleTimeString()
    };

    transectionData.push(data);
    console.log(transectionData)


})


// cashout money
document.getElementById('withdraw-money-btn').addEventListener('click', function (e) {

    e.preventDefault()


    const agentNum = getValue('agent-num');
    const withdrawAmount = getValueNumber('cashout-amount');
    const pin = getValueNumber('cashout-pin');

    if (agentNum.length != 11) {
        alert('Account number must be 11 digits')
        return;
    }

    if (pin !== validPin) {
        alert('Wrong Pin');
        return;
    }



    const availableBalance = getInnerText('available-balance');

    if (withdrawAmount <= 0 || withdrawAmount > availableBalance) {
        alert('Invalid amount');
    }

    const newBalance = availableBalance - withdrawAmount;
    setInnerText(newBalance);

    const data = {
        name: "Withdraw Money",
        date: new Date().toLocaleTimeString()
    };

    transectionData.push(data);
    console.log(transectionData)

}
)


// transfer money
document.getElementById('transfer-money-btn').addEventListener('click', function (e) {

    e.preventDefault()


    const userNum = getValue('user-num');
    const transferAmount = getValueNumber('transfer-amount');
    const pin = getValueNumber('transfer-pin');

    if (userNum.length != 11) {
        alert('Account number must be 11 digits')
        return;
    }

    if (pin !== validPin) {
        alert('Wrong Pin');
        return;
    }



    const availableBalance = getInnerText('available-balance');

    if (transferAmount <= 0 || transferAmount > availableBalance) {
        alert('Invalid amount');
    }

    const newBalance = availableBalance - transferAmount;
    setInnerText(newBalance);

    const data = {
        name: "Transfer Money",
        date: new Date().toLocaleTimeString()
    };

    transectionData.push(data);
    console.log(transectionData)

}
)


// get bonus
document.getElementById('get-bonus-btn').addEventListener('click', function (e) {

    e.preventDefault()


    alert('Invalid Coupon')

}
)

// Pay bill
document.getElementById('pay-money-btn').addEventListener('click', function (e) {
    e.preventDefault();



    const bank = getValueNumber('bank');
    const billerNum = getValue('biller-num');
    const payAmount = getValueNumber('bill-amount');
    const pin = getValueNumber('bill-pin');

    if (billerNum.length !== 11) {
        alert('Account number must be 11 digits')
        return;
    }

    if (pin !== validPin) {
        alert('Wrong Pin');
        return;
    }

    if (payAmount <= 0) {
        alert("Inavalid amount");
        return;
    }

    const availableBalance = getInnerText('available-balance');
    const newBalance = availableBalance + payAmount;



    setInnerText(newBalance);

    const data = {
        name: "Pay Bill",
        date: new Date().toLocaleTimeString()
    };

    transectionData.push(data);
    console.log(transectionData)


})


// transection money
document.getElementById('transection-btn').addEventListener('click', function (e) {

    const transectionContainer = document.getElementById('transection-container');


    transectionContainer.innerText = '';

    for (const transection of transectionData) {
        const div = document.createElement('div');

        div.innerHTML = `
    <div class="bg-white p-3 mt-3 rounded-xl flex items-center justify-between">
                <div class="flex items-center">
                    <div class=" bg-[#F4F5F7] rounded-full p-3">
                        <img src="./assets/wallet1.png" alt="">
                    </div>

                    <div class="ml-3">
                        <h1 class="font-semibold">${transection.name}</h1>
                        <p class="text-[12px]">${transection.date}</p>
                    </div>

                </div>

                <div>
                    <i class="fa-solid fa-ellipsis-vertical"></i>
                </div>
            </div>
    `;
        transectionContainer.appendChild(div);
    }


})


// toggle


document.getElementById('add-btn').addEventListener('click', function () {

    handleToggle('addmoney-parent');
    handleButtonToggle('add-btn');


})


document.getElementById('cashout-btn').addEventListener('click', function () {

    handleToggle('cashout-parent');
    handleButtonToggle('cashout-btn');

})


document.getElementById('transfer-btn').addEventListener('click', function () {

    handleToggle('transfer-parent');
    handleButtonToggle('transfer-btn');
})

document.getElementById('bonus-btn').addEventListener('click', function () {

    handleToggle('bonus-parent');
    handleButtonToggle('bonus-btn');
})

document.getElementById('pay-btn').addEventListener('click', function () {

    handleToggle('pay-parent');
    handleButtonToggle('pay-btn');
})

document.getElementById('transection-btn').addEventListener('click', function () {

    handleToggle('transection-parent');
    handleButtonToggle('transection-btn');
})

