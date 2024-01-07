const displayMsg=(msg,id,colorName)=>{
    document.getElementById(id).innerHTML=msg
    document.getElementById(id).style.color=colorName
}
const fnameValidate=()=>{
    const first_name=document.getElementById('firstname').value
    if(first_name==""){
        displayMsg('firstname is required','fnameMsg','red')
        return false
    }
    else if(!first_name.match(/^[a-z]+$/)){
        displayMsg('firstname only contains lowercase alphabets','fnameMsg','red')
        return false 
    }
    else if(first_name.length<3){
        displayMsg('firstname must be more than 2 characters','fnameMsg','red')
        return false
    }
    else{
        displayMsg('valid firstname','fnameMsg','green')
        return true 
    }
}
const lnameValidate=()=>{
    const last_name=document.getElementById('lastname').value
    if(last_name==""){
        displayMsg('lastname is required','lnameMsg','red')
        return false
    }
    else if(!last_name.match(/^[a-z]+$/)){
        displayMsg('lastname only contains lowercase alphabets','lnameMsg','red')
        return false 
    }
    else if(last_name.length<3){
        displayMsg('lastname must be more than 2 characters','lnameMsg','red')
        return false
    }
    else{
        displayMsg('valid lastname','lnameMsg','green')
        return true 
    }
}

const emailValidate=()=>{
    const email=document.getElementById('email').value
    if(email==""){
        displayMsg('email is required','emailMsg','red')
        return false
    }
    else if(!email.match(/^([a-z0-9])[a-z0-9\-\_\.]+\@+[a-z]+\.+[a-z]+$/)){
        displayMsg('invalid email format','emailMsg','red')
        return false 
    }
    else{
        displayMsg('valid email','emailMsg','green')
        return true 
    }
}
const pwdValidate=()=>{
    const pwd=document.getElementById('pwd').value
    if(pwd==""){
        displayMsg('password is required','pwdMsg','red')
        return false
    }
    else if(!pwd.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$?!_]).{8,50}$/)){
        displayMsg('passwword must be at least of 8 characters and contains uppercase,lowercase,numeric and special characters','pwdMsg','red')
        return false 
    }
    else{
        displayMsg('valid password','pwdMsg','green')
        return true 
    }
}

const cpwdValidate=()=>{
    const pwd=document.getElementById('pwd').value
    const cpwd=document.getElementById('cpwd').value
    if(cpwd==""){
        displayMsg('confirm password is required','cpwdMsg','red')
        return false
    }
    else if(pwd!==cpwd){
        displayMsg('password and confirm password doesnot match','cpwdMsg','red')
        return false
    }
    else{
        displayMsg('password and confirm password matched','cpwdMsg','green')
        return true 
    }
}

const validForm=()=>{
    if(fnameValidate()&&lnameValidate()&&emailValidate()&&pwdValidate()&&cpwdValidate()){
        return true
    }
    else{
        return false
    }
}