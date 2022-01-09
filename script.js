var modal = document.getElementById('myModal'); //получаем элеимент по индинтификатору
var img = document.getElementById('myImg'); 
var modalImg = document.getElementById("img01"); 
var captionText = document.getElementById("caption"); //получить по индинтификатору значение caption

img.onclick = function () { 
    modal.style.display = "block"; //меняем знаение display на block
    modalImg.src = this.src;//значение пути к изображению будеm сменяться на альтернативный текст под изображением
    captionText.innerHTML = this.alt;
}
var span = document.getElementsByClassName("close")[0];// получение элемента чере класс
span.onclick = function () {
    modal.style.display = "none";// изменение display на none
}