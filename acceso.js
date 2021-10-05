function validar (){
    let user =document.forms["formulario"]["usuario"].value;
    let psw =document.form["formulario"]["contraseña"].value;
    if (user == "Enrique" && psw == "examen"){
        sessionStorage.setItem("ingreso correcto ", "true")
        return true;
    }
    }

    sessionStorage.setItem("Ingreso Correcto", "False")
        alert("usuario o contraseña incorrecta")
return false;
