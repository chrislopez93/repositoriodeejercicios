function test(){
    let pedazo = document.querySelector(".pedazo").value;
    let personas = document.querySelector(".personas").value;
    let mensaje = document.querySelector(".mensaje")
    let cantidad = pedazo / personas;
    if (cantidad >= 1){
        mensaje = document.querySelector('.mensaje');
        mensaje.innerHTML = "Hay suficiente";
    }
    else{
        mensaje = document.querySelector('.mensaje');
        mensaje.innerHTML ="No hay suficiente";
    }

}
