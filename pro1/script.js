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


//event
form.addEventListener('submit',function(e) {
    e.preventDefault();

    if(username.value === ''){
        showError(username,'Username is required');
    }else{
        showSuccess(username);
    }

    if(email.value === ''){
        showError(email,'Email is required');
    }else if(!isEmailValid(email.value)){
        showError(email,'Invalid Email');
    }
    else{
        showSuccess(email);
    }
   
    if(password.value === ''){
        showError(password,'Password is required');
    }else{
        showSuccess(password);
    }

    if(cPassword.value === ''){
        showError(cPassword,'Confirm Password is required');
    }else{
        showSuccess(cPassword);
    }
})