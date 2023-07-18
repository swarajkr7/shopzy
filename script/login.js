let count=0;

document.querySelector("form").addEventListener("submit",loginIn);
let loginArr=JSON.parse(localStorage.getItem("signList"))||[];
let length=loginArr.length;

function loginIn(event){
    event.preventDefault()
    let email=document.querySelector("#email").value;
    let password=document.querySelector("#password").value;
    console.log(name);
    console.log(email);
    console.log(password);
    
    loginArr.forEach(function(elem,index){
        console.log(elem.personName);
        console.log(elem.personEmail);
    if((elem.personEmail==email)&&(elem.personPassword==password)){
        
        window.location.href="women.html";
    }else{
        
        count++;
    }

    if(count==length)
    {
        alert("enter correct credentials!");
        count=0;
    }

});
}