const mensajeError= document.getElementsByClassName("error")[0]

document.getElementsById("login-form").addEventListener("submit", async(e)=>{
    e.preventDefault();
    const user = e.target.children.user.value;
    const password = e.target.children.password.value;

    const res = await fetch("http://127.0.0.1:5500/Proyecto-CurriculumRenca-G3/pages/login.html", {
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify({
            user, password
        })
    });
    if(!res.ok) return mensajeError.classList.toggle("escondido",false);
    const resJson = await res.json();
    if(resJson.redirect){
    window.location.href = resJson.redirect;
    }
})
