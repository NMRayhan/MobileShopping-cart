
function mobileChangeHandler(isIncrease) {
    const mobileInput = document.getElementById("mobile-Count");
    const mobileCount = parseInt(mobileInput.value)
    let totalMobile = mobileCount;
    if (isIncrease == true) {
        totalMobile = mobileCount + 1;
    } if (isIncrease == false && mobileCount > 0) {
        totalMobile = mobileCount - 1;
    }
    mobileInput.value = totalMobile;
    const totalMobilePrice = totalMobile * 1219;
    document.getElementById("mobilePrice").innerText = totalMobilePrice;
    calculateTotal();
}

function caseChangeHandler(isIncrease) {
    const mobileInput = document.getElementById("case-Count");
    const mobileCount = parseInt(mobileInput.value)
    let totalMobile = mobileCount;
    if (isIncrease == true) {
        totalMobile = mobileCount + 1;
    } if (isIncrease == false && mobileCount > 0) {
        totalMobile = mobileCount - 1;
    }
    mobileInput.value = totalMobile;
    const totalCasePrice = totalMobile * 59;
    document.getElementById("casePrice").innerText = totalCasePrice;
    calculateTotal();
}

function taxCalculator(mobile, Case) {
    var mobileTax = (.07 * mobile);
    var caseTax = (.07 * Case);
    return mobileTax + caseTax;
}

function calculateTotal() {
    const mobileInput = document.getElementById("mobile-Count");
    const mobileCount = parseInt(mobileInput.value);

    const caseInput = document.getElementById("case-Count");
    const caseCount = parseInt(caseInput.value);
    

    var totalPrice = (mobileCount * 1219) + (caseCount * 59);
    document.getElementById("sub-total").innerText = '$' + totalPrice;
    var taxTotal = taxCalculator(mobileCount, caseCount);

    var tax = parseFloat(taxTotal.toFixed(2));
    var subtotalFloat = parseFloat(totalPrice.toFixed(2));
    document.getElementById("tax").innerText = '$' + tax;
    var total = subtotalFloat + tax;
    document.getElementById("total").innerText = '$' + total;
}


