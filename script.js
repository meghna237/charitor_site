function validate(){
    let name=document.getElementById("name").value;
    let email=document.getElementById("email").value;
    let subject=document.getElementById("subject").value;
    let message=document.getElementById("message").value;
    let msg=document.getElementById("msg");
    msg.style.color='red';
    if (name===''){
        msg.textContent = "Enter Name";
        return false;
    }
    else if(email===''){
        msg.textContent = "Enter Email";
        return false;
    }
    else if(subject===''){
        msg.textContent = "Enter Subject";
        return false;
    }
    else if(message===''){
        msg.textContent = "Enter Message";
        return false;
    }
    return true;
}