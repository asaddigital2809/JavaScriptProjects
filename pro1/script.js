const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const cPassword = document.getElementById('cPassword')
//function error
function showError(input,message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText= message;
}
//function success
function showSuccess(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control success';

}
//function for email

function isEmailValid(email){
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

// function for email id
function getFieldId(input){
    //return input.id;
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}
// function for required field
function checkRequired(inputArray){
    inputArray.forEach(function(input){
        if(input.value === ''){
            showError(input,`${getFieldId(input)} is required`);
        }else{
            showSuccess(input);
        }
    });

}

//event
form.addEventListener('submit',function(e) {
    e.preventDefault();
    checkRequired([username,email,password,cPassword]);
})