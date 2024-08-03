const minusButton = document.getElementById('minus');
const plusButton = document.getElementById('plus');
const quantityDisplay = document.getElementById('quantity');

let quantity = 1;

minusButton.addEventListener('click', () => {
    if (quantity > 1) {
        quantity--;
        quantityDisplay.textContent = quantity;
    }
});

plusButton.addEventListener('click', () => {
    quantity++;
    quantityDisplay.textContent = quantity;
});

//

myButton.addEventListener(
    "click",
    function () {
        myPopup.classList.add("show");
    }
);
closePopup.addEventListener(
    "click",
    function () {
        myPopup.classList.remove(
            "show"
        );
    }
);
window.addEventListener(
    "click",
    function (event) {
        if (event.target == myPopup) {
            myPopup.classList.remove(
                "show"
            );
        }
    }
);

// Get the modal
var modal = document.getElementById("installmentModal");

// Get the button that opens the modal
var btn = document.getElementById("instbtn1");


// Get the <span> element that closes the modal
var span = document.getElementById("close");

// Get the done button
var doneBtn = document.querySelector(".done-btn");

// When the user clicks the button, open the modal 
btn.onclick = function () {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal


window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}

// When the user clicks the done button, close the modal
doneBtn.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


function showPig() {
    document.getElementById("pig").style.display = "flex";
}

function hidePig() {
    document.getElementById("pig").style.display = "none";
}



function showPopup() {
    document.getElementById("walletPopup").style.display = "block";
}

function hidePopup() {
    document.getElementById("walletPopup").style.display = "none";
}

function showTopUpPopup() {
    document.getElementById("topUpPopup").style.display = "block";
    document.getElementById("walletPopup").style.display = "none"; // Hide the wallet popup when showing the top-up popup
}

function hideTopUpPopup() {
    document.getElementById("topUpPopup").style.display = "none";
    document.getElementById("walletPopup").style.display = "block"; // Optionally, show the wallet popup when hiding the top-up popup
}

function showInstallmentPopup() {
    document.getElementById("installmentPopup").style.display = "block";
    document.getElementById("walletPopup").style.display = "none"; // Hide the wallet popup when showing the installment popup
}

function hideInstallmentPopup() {
    document.getElementById("installmentPopup").style.display = "none";
    document.getElementById("walletPopup").style.display = "block"; // Optionally, show the wallet popup when hiding the installment popup
}

function showTransactionPopup() {
    document.getElementById("transactionPopup").style.display = "block";
    document.getElementById("walletPopup").style.display = "none"; // Hide the wallet popup when showing the transaction history popup
}

function hideTransactionPopup() {
    document.getElementById("transactionPopup").style.display = "none";
    document.getElementById("walletPopup").style.display = "block"; // Optionally, show the wallet popup when hiding the transaction history popup
}

