<<<<<<< HEAD
function loguear()
{

    let user=document.getElementById("email").value;
    let pass=document.getElementById("password").value;

if(user === "Cesar" && pass === "1234")
{

    window.location="info.html";

}

else{

    alert("Datos incorrectos");
}

}
=======
const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});
>>>>>>> 2c0c9dabf1b0a4b07085eece5d084773d073ceed
