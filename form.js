let email = document.getElementsByClassName("pass");
 let error =document.getElementById("error");
 let error1 =document.getElementById("error1");
function validate(){
   
    if(email[0].value==""||email[1].value==""){
        alert('Fields not be empty');
        return false;
    }
    else{
        return true;
        //alert('Validation is proper');
    }
}

function emailValidate() {
    let regex =/^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/
    if (regex.test(email[0].value)){
        error.innerHTML='Valid'
        error.style.color='green'
        return true
    }
    else{
        error.innerHTML='Invalid Email Format'
        error.style.color='red'
        return false
    }
    
}

function passwordValidate(){
    if (email[1].value!=""){
        
        return true
    }
    else{
        error1.innerHTML="password cannot be blank"
        error1.style.color='red'
        return false
        
        
    }
}
 function pwdUpp(){
     var UpperCase=/[A-Z]/g;
     
     if(email[1].value.match(UpperCase)){
         return true
     }
     else{
         error1.innerHTML="password contain atleast 1 upper letter"
         return false
     }
   
 }

  function pwdlow(){
    var LowerCase=/[a-z]/g;
    if(email[1].value.match(LowerCase)){
        return true
    }
    else{
        error1.innerHTML="password contain atleast 1 lower case letter"
        return false
    }
  }
  function pwdNum(){
    var Num=/[0-9]/g;
    if(email[1].value.match(Num)){
        return true
    }
    else{
        error1.innerHTML="password contain atleast 1 Number letter"
        return false
    }
  }
function pwdlen(){
    if(email[1].value.length >= 8){
        return true
    }
    else{
        error1.innerHTML="password conatin atleast 8 charactar"
        return false
    }
}

const input =document.querySelector("#checker");
const weak =document.querySelector(".weak");
const medium =document.querySelector(".medium");
const strong =document.querySelector(".strong");
const indicator =document.querySelector(".indicator");
const text=document.querySelector(".text");
let regExpWeak=/[a-z]/;
let regExpMedium=/[A-Z]/;
let regExpStrong=/[0-9]/;

function trigger(){
    if(checker.value !=""){
        indicator.style.display="block";
        indicator.style.display="flex";
        if(input.value.length <=3 &&(input.value.match(regExpWeak)|| input.value.match(regExpMedium)|| input.value.match(regExpStrong)))no=1;
        if(input.value.length >=6 &&((input.value.match(regExpWeak)&& input.value.match(regExpMedium))||(input.value.match(regExpMedium) && input.value.match(regExpStrong))||(input.value.match(regExpWeak)&& input.value.match(regExpStrong))))no=2;
        if(input.value.length >=6 && input.value.match(regExpWeak)&& input.value.match(regExpMedium)&& input.value.match(regExpStrong))no=3;
        if(no==1){
            weak.classList.add("active");
            text.style.display="block";
            text.textContent="Your Password strength is Weak";
            text.classList.add("weak");
        }
        if(no==2){
            medium.classList.add("active");
            text.textContent="Your Password strength is Medium";
            text.classList.add("medium");
        }else{
        medium.classList.remove("active");
        text.classList.remove("medium");
    }
        if(no==3){
        medium.classList.add("active");
        strong.classList.add("active");
        text.textContent="Your Password strength is Strong";
        text.classList.add("strong");
    }else{
        strong.classList.remove("active");
        text.classList.remove("strong");
    }
    }else{
        indicator.style.display="none"
        text.style.display="none"
    }
        
}

function phone(){
    var a = document.getElementById("mobile").value;
    if(a==""){
        document.getElementById("messages").innerHTML="** Please fill mobile number";
        return false;
    }
    if(isNaN(a)){
        document.getElementById("messages").innerHTML="** Enter Only Numbers";
        return false;

    }
    if(a.length<10){
        document.getElementById("messages").innerHTML="** Phone Numbers requires 10 digits";
        return false;
    }
    if(a.length>10){
        document.getElementById("messages").innerHTML="** Phone Numbers requires 10 digits";
        return false;
    }else{
        return true;
    }
}
         
                
            


// function validateForm(){
//     var validation = true;
//     validation &= emailValidate();
//     validation &= passwordValidate();
//     return validation;
