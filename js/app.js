//toggle menu/navbar script
$(".menu-btn2").hide();
$(".menu-btn1").click(function () {
    $(".sombra").toggleClass("mostrar");
    $(".navegacion").toggleClass("active");
    $(".menu-btn1").hide();
    $(".menu-btn2").show();
});

$(".menu-btn2").click(function () {
    $(".sombra").toggleClass("mostrar");
    $(".navegacion").toggleClass("active");
    $(".menu-btn2").hide();
    $(".menu-btn1").show();
});

//SLIDER
const slider = document.querySelector("#slider"); //la constante llama al id slider
let sliderSection = document.querySelectorAll(".slider__section"); //es una variable que llama a los slider section
let sliderSectionLast = sliderSection[sliderSection.length - 1]; //obtener el ultimo slider para poner al principio

const btnLeft = document.querySelector("#btn-left"); //constamtes fijos para bones
const btnRight = document.querySelector("#btn-right");

slider.insertAdjacentElement("afterbegin", sliderSectionLast); //coloca la ultima imagen despues que inicia la clase SLIDER

function Next() {
    let sliderSectionFirst = document.querySelectorAll(".slider__section")[0]; //captura la primera imagen
    slider.style.marginLeft = "-200%"; //avanza 2 imagenes para mostrar la tercera
    slider.style.transition = "all 1s";

    setTimeout(function () {
        slider.style.transition = "none";
        slider.insertAdjacentElement("beforeend", sliderSectionFirst); //coloca la primera imagen al ultimo antes de terminar la clase SLIDER
        slider.style.marginLeft = "-100%";
    }, 1000); // 500 es medio segundo
}

function Prev() {
    let sliderSection = document.querySelectorAll(".slider__section");
    let sliderSectionLast = sliderSection[sliderSection.length - 1];
    slider.style.marginLeft = "0"; //muestra la ultima imagen que se coloco despues que inicia la clase SLIDER
    slider.style.transition = "all 1s";

    setTimeout(function () {
        slider.style.transition = "none";
        slider.insertAdjacentElement("afterbegin", sliderSectionLast);
        slider.style.marginLeft = "-100%";
    }, 1000);
}

btnRight.addEventListener("click", function () {
    //escucha el evento click para ejecutar la funcion NEXT
    Next();
});

btnLeft.addEventListener("click", function () {
    //escucha el evento click para ejecutar la funcion PREV
    Prev();
});

//funcion para avance automatico
setInterval(function () {
    Next();
}, 4000);

//accediendo a los enlaces con querySelectorAll

const enlaces = document.querySelector("#social");
enlaces.href = "https://www.facebook.com/jirotec";

//submenu

$(".submenu").click(function () {
    $(this).children("ul").slideToggle();
});

$("ul").click(function (propagacion) {
    propagacion.stopPropagation();
});


// VENTANA MODAL
// Obtener todas las imágenes de la sección producto
var productImages = document.querySelectorAll('.product-image');
var boton = document.getElementById('modal-boton');

// Añadir un evento de clic a cada imagen de la sección producto
productImages.forEach(function (image) {
    image.addEventListener('click', function () {
        // Obtener la ruta de la imagen grande correspondiente
        var modalImg = this.getAttribute('data-modal-img');
        // Establecer la ruta de la imagen grande en la ventana modal
        document.getElementById('modal-img').src = modalImg;
        //Mostrar la ventana modal
        modal.classList.toggle("modal-open");
    });
});

//Añadir un evento de clic al botón de cierre de la ventana modal
boton.addEventListener('click', function () {
    modal.classList.toggle("modal-open");
});





