
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

document.getElementById("mobile-Plus").addEventListener("click", function () {
    mobileChangeHandler(true);
})

document.getElementById("mobile-Minus").addEventListener("click", function (event) {
    mobileChangeHandler(false);
})

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
document.getElementById("case-Plus").addEventListener("click", function () {
    caseChangeHandler(true);
})

document.getElementById("case-Minus").addEventListener("click", function (event) {
    caseChangeHandler(false);
})