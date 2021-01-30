function handleProductChange(){
    const mobileInput = document.getElementById("mobile-Count");
    const mobileCount = parseInt(mobileInput.value);
    var totalMobile = decrement(mobileCount);
    mobileInput.value = totalMobile;
    const totalMobilePrice = totalMobile * 1219;
    document.getElementById("mobilePrice").innerText = totalMobilePrice;
 }

 function decrement(mobileCount){
    const totalMobile = mobileCount - 1;
    return totalMobile;
 }

 function increment(mobileCount){
    const totalMobile = mobileCount + 1;
    return totalMobile;

 }
document.getElementById("mobile-Plus").addEventListener("click", function () {
    const mobileInput = document.getElementById("mobile-Count");
    const mobileCount = parseInt(mobileInput.value)
    const totalMobile = increment(mobileCount);
    mobileInput.value = totalMobile;
    const totalMobilePrice = totalMobile * 1219;
    document.getElementById("mobilePrice").innerText = totalMobilePrice;
 })

 document.getElementById("mobile-Minus").addEventListener("click", function (event) {
    handleProductChange()
 })

