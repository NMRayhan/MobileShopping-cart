
function mobileChangeHandler(isIncrease) {
    const mobileInput = document.getElementById("mobile-Count");
    const mobileCount = parseInt(mobileInput.value)
    let totalMobile = mobileCount;
    if (isIncrease == true) {
        totalMobile = mobileCount + 1;
    }if(isIncrease == false && mobileCount > 0){
        totalMobile = mobileCount - 1;
    }
    mobileInput.value = totalMobile;
    const totalMobilePrice = totalMobile * 1219;
    document.getElementById("mobilePrice").innerText = totalMobilePrice;
}

function caseChangeHandler(isIncrease) {
    const mobileInput = document.getElementById("case-Count");
    const mobileCount = parseInt(mobileInput.value)
    let totalMobile = mobileCount;
    if (isIncrease == true) {
        totalMobile = mobileCount + 1;
    }if(isIncrease == false && mobileCount > 0){
        totalMobile = mobileCount - 1;
    }
    mobileInput.value = totalMobile;
    const totalMobilePrice = totalMobile * 59;
    document.getElementById("casePrice").innerText = totalMobilePrice;
}
