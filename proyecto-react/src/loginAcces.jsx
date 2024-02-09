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