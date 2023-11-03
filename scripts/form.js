const password = document.querySelector("#pwd");
const confirm = document.querySelector("#pwdConfirm");
const message = document.querySelector("#messageAlert");

confirm.addEventListener("focusout", checkSame);

function checkSame() {
    if (password.value !== confirm.value) {
        message.textContent = "❗Key Phrases DO NOT MATCH!";
        message.style.visibility = "show";
        confirm.style.backgroundColor = "#fff0f3";
        confirm.style.border = "2px solid red";
        confirm.value = "";
        confirm.focus();
    } else {
        message.style.display = "none";
        confirm.style.backgroundColor = "#fff";
        confirm.style.color = "#000";
    }
}

const rangevalue = document.getElementById("rangevalue");
const range = document.getElementById("r");

// RANGE event listener
range.addEventListener('change', displayRatingValue);
range.addEventListener('input', displayRatingValue);

function displayRatingValue() {
    rangevalue.innerHTML = range.value;
}







