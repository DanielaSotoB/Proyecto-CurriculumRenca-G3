const mensajeError = document.getElementsByClassName("error")[0];


document.getElementById("register-fors").addEventListener("submit", async (e) => {
    e.preventDefault();
    console.log(e.target.children.user.value)
    const res = await fetch("http://127.0.0.1:5500/Proyecto-CurriculumRenca-G3/pages/registro.html", {
        method: "POST",
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            user: e.target.children.user.value, 
            email: e.target.children.email.value,
            password: e.target.children.password.value
        })
    });
    if(!res.ok) return mensajeError.classList.toggle("escondido",false);
    const resJson = await res.json();
    if(resJson.redirect){
        window.location.href = resJson.redirect;
    }
})
