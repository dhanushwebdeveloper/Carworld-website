const form=document.querySelector('#form');
const username=document.querySelector('#username');
const password=document.querySelector('#password');

form.addEventListener('subit',(e)=>{
    if(!validateInput()){
        e.preventDefault();
    }
})

function validateInput(){
    const usernameval = username.value.trim();
    const passwordval = password.value.trim();
    let success = true
    
    if(usernameval===''){
        success = false;
        setError(username,'username is required')
    }
    else{
        setSuccess(usernsme)
    }
    if(password===''){
        success=false;
        setError(password,'password is required')
    }
    else if(password.length<8){

        setError(password,'password must be atleast in 8 characters long')
    }
    else{
        setSuccess(password)
    }
    return success;
}

function setError(element,message){
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error')

    errorElement.innerText=message;
    inputGroup.classList.add('error')
    inputGroup.classList.remove('success')
}
function setSuccess(element){
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error')

    errorElement.innerText=message;
    inputGroup.classList.add('success')
    inputGroup.classList.remove('error')
}
