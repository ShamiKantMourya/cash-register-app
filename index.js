const billAmount = document.querySelector('#bill-amount');
const cashGiven = document.querySelector('#cash-given');
const checkCash = document.querySelector('#check');
const noOfNotes = document.querySelectorAll('.noOfNotes');
const errorMessage = document.querySelector('#message');

checkCash.addEventListener('check', function validateBillAmountAndCash(){
    if (billAmount.value > 0) {
        if (cashGiven.value >= billAmount.value) {

        } 
        else {
            showMessage("Do You Want to Wash Plates");
        }
    } else {
        errorMessage.innerText = ("Enter Valid Amount..!")
    }

});
