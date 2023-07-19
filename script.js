function test(){
    const pedazo = document.getElementById('#pedazo').value;
    const personas = document.getElementById('#personas').value;
    let cantidad = pedazo / personas;
    if (cantidad => 1){
        mensaje = documento.getElementById('.mensaje');
        mensaje.innerHTML = "Hay suficiente";
    }
    else{
        mensaje.innerHTML ="No hay suficiente";
    }

}