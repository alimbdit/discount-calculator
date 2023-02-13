document.getElementById("apply-btn-two").addEventListener('click', function(){
    
    const price2 = getTextValue ('price-two');
    const coupon = document.getElementById("coupon-field").value;
    document.getElementById("coupon-field").value = '';

    if(coupon === "DISC30"){
        const discount2 = price2*.7;
        setValue ("price-to-pay-two", discount2);
        
    }
    else{
        alert("Enter Valid Coupon...!!");
    }
    
})
