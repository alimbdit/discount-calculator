document.getElementById('apply-btn').addEventListener('click', function(){
 
    const price = getTextValue ('price');

    // const discount = price - price*30/100;
    const discount = price*.7;

    setValue ('price-to-pay', discount);
});