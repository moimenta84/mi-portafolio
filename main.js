let menuvisible = false;
//funcion para ocultar o mastrar menu//
function mostarOcultarMenu() {
    if (menuvisible) {
        document.getElementById("nav").classList = "";
        menuvisible = false;
    } else {
        document.getElementById("nav").classList = "responsive";
        menuvisible = true;
    }
}
function seleccionar() {
    //oculto el menu una vez que seleccionamos una opcion//
    document.getElementById("nav").classList = "";
    menuvisible = false
}
//funcionque aplica las animaciones a las habilidades//
function efectosHabilidades() {

    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if (distancia_skills >= 300) {
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("java");
        habilidades[3].classList.add("git");
        habilidades[4].classList.add("comunicacion");
        habilidades[5].classList.add("trabajo");
        habilidades[6].classList.add("creatividad");
        habilidades[7].classList.add("dedicacion");
    }
}
//detecto el scroll para aplicar la animacion en la barra de habilidades//
window.onscroll = function () {
    efectosHabilidades();
}

