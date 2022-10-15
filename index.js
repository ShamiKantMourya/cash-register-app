const billAmount = document.querySelector('#bill-amount');
const cashGiven = document.querySelector('#cash-given');
const checkCash = document.querySelector('#checkbtn');
const noOfNotes = document.querySelectorAll('.noOfNotes');
const errorMessage = document.querySelector('#message');

checkCash.addEventListener("click", function validateBillAmountAndCash(){
    errorMessage.style.display = "none";
     if (billAmount.value > 0) {
       if (cashGiven.value >= billAmount.value) {
        
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
