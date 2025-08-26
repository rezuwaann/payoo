// login button functionality
document.getElementById('login-btn').addEventListener('click', function (e) {
    e.preventDefault();

    const mobileNum = 1234;
    const pinNum = 1234;

    const userNum = document.getElementById('number-input').value;
    const userPin = document.getElementById('pin-input').value;

    const userNumConverted = parseInt(userNum);
    const userPinConverted = parseInt(userPin);

    if (mobileNum === userNumConverted && pinNum === userPinConverted) {
        window.location.href = './home.html';
    } else if (mobileNum !== userNumConverted) {
        alert('Wrong Number')
    }else {
        alert('Wrong Pin')
    }
})

