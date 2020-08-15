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

function checkEmail(input){
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(input.value.trim())){
        showSuccess(input);
    }else{
        showError(input,'Please provide a valid email')
    }
}

// function for field id
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
//function for string length
function checkLength(input,min,max){
    if(input.value.length < min){
        showError(input,`${getFieldId(input)} needs to be at least ${min} characters`);
    }else if(input.value.length > max){
        showError(input,`${getFieldId(input)} needs to be less than ${max} characters`);
    }else{
        showSuccess(input);
    }

}
// fucnction to check password
function checkPassword(input1,input2){
    if(input1.value !== input2.value){
        showError(input2,'Password does not match');
    }
}

//event
form.addEventListener('submit',function(e) {
    e.preventDefault();
    checkRequired([username,email,password,cPassword]);
    checkLength(username,3,10);
    checkLength(password,6,30);
    checkEmail(email);
    checkPassword(password,cPassword);
})