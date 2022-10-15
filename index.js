const billAmount = document.querySelector('#bill-amount');
const cashGiven = document.querySelector('#cash-given');
const checkCash = document.querySelector('#checkbtn');
const noOfNotes = document.querySelectorAll('.noOfNotes');
const errorMessage = document.querySelector('#message');

const availableNotes = [2000,500,100,20,10,5,1];

checkCash.addEventListener("click", function validateBillAmountAndCash(){
    errorMessage.style.display = "none";
     if (billAmount.value > 0) {
       if (cashGiven.value >= billAmount.value) {
        const cashToBeReturned = cashGiven.value-billAmount.value;
        calculateChange(cashToBeReturned);
       }
       else {
        errorMessage.style.display = "block";
        errorMessage.innerText = "Do You Want to do the dishes";
       }
    } else {
        errorMessage.style.display = "block";
        errorMessage.innerText = "Enter Valid Amount..!";
    }

});
function calculateChange(cashToBeReturned) {
    for (let i = 0; i< availableNotes.length; i++){
            const numberOfNotes = Math.trunc(cashToBeReturned/availableNotes[i]);
            cashToBeReturned = cashToBeReturned%availableNotes[i];  
            noOfNotes[i].innerText = numberOfNotes;
    }
}