document.getElementById("mobile-Plus").addEventListener("click", function () {
    const mobileInput = document.getElementById("mobile-Count");
    const mobileCount = parseInt(mobileInput.value)
    const totalMobile = mobileCount + 1;
    mobileInput.value = totalMobile;
    const totalMobilePrice = totalMobile * 1219;
    document.getElementById("mobilePrice").innerText = totalMobilePrice;
 })

 document.getElementById("mobile-Minus").addEventListener("click", function (event) {
    const mobileInput = document.getElementById("mobile-Count");
    const mobileCount = parseInt(mobileInput.value);
    const totalMobile = mobileCount - 1;
    mobileInput.value = totalMobile;
    const totalMobilePrice = totalMobile * 1219;
    document.getElementById("mobilePrice").innerText = totalMobilePrice;
 })