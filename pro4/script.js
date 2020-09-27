const currOnePicker = document.getElementById('currency-one');
const currTwoPicker = document.getElementById('currency-two');
const currOneAmount = document.getElementById('amount-one');
const currTwoAmount = document.getElementById('amount-two');
const flipButton = document.getElementById('flip');
const rate = document.getElementById('exchange');
//function for accessing api and calculating rates
function calculate() {
    const currOneCode = currOnePicker.value;
    const currTwoCode = currTwoPicker.value;
    fetch(`https://v6.exchangerate-api.com/v6/d43f335eaaa86f4143174de8/latest/${currOneCode}`)
        .then(res => res.json())
        .then(data => {
           //getting rate
            const exchangeRate = data.conversion_rates[currTwoCode];
           //conversion rate display
           rate.innerText = `1 ${currOneCode} = ${exchangeRate} ${currTwoCode}`
           //apply conversion rates
           currTwoAmount.value = (currOneAmount.value * exchangeRate).toFixed(2);

        });
}
//flip function for reversing currencies
function flip(){
    const temp = currOnePicker.value;
    currOnePicker.value = currTwoPicker.value;
    currTwoPicker.value = temp;
    calculate();
}
//EVent listeners
currOnePicker.addEventListener('change', calculate);
currTwoPicker.addEventListener('change', calculate);
currOneAmount.addEventListener('input', calculate);
currTwoAmount.addEventListener('input', calculate);
flipButton.addEventListener('click', flip);
calculate();