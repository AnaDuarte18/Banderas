document.getElementById("puntos").innerHTML = localStorage.getItem("contador")

function correcta(siguiente){
    var contador = localStorage.getItem("contador")
    contador++
    localStorage.setItem("contador", contador);
    window.location.href= siguiente;
}
function incorrecta(siguiente){
    alert("Incorrecto")
    var contador = localStorage.getItem("contador")
    contador--
    localStorage.setItem("contador", contador);
    window.location.href= siguiente;
}
function enviar(){
    window.location.href="Pregunta1.html"
    var contador = localStorage.getItem("contador")
    contador=0
    localStorage.setItem("contador", contador);

}