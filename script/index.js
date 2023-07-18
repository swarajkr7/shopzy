document.querySelector("form").addEventListener("submit",signup)
    let signArr=JSON.parse(localStorage.getItem("signList"))||[]
    function signup(event){
        // console.log("hello");
        // console.log("hello9");
        event.preventDefault()
        let signObj={
            personName:document.querySelector("#name").value,
            personEmail:document.querySelector("#email").value,
            personPassword:document.querySelector("#password").value,
        }
        signArr.push(signObj);
        localStorage.setItem("signList",JSON.stringify(signArr))
        window.location.href="login.html"
    }