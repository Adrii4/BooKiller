//VARIABLES
var suE= Math.floor(Math.random()*3)+1; //hace que la eleccion del oponente sea totalmente aleatoria
var i;


//FUNCIONES
function empezar(){//al clickar en la imagen de las espadas cruzadas oculta todo lo perteneciente al menu y muestra la siguiente pantalla
    ocultarMenu();
    document.getElementById("ppt").style.display="block";
    document.getElementById("puntos").style.display="block";
    document.getElementById("puntos").innerHTML="Puntos: "+vic;
}

function ocultarMenu(){//oculta el logo, el texto y la imagen de las espadas
    document.getElementById("logo").style.display="none";
    document.getElementById("modo").style.display="none";
    document.getElementById("go").style.display="none";
}

function empate(){//muestra un texto de "empate" cambia el color de fondo y el color del texto
    document.getElementById("versusp").innerHTML="EMPATE";
    document.getElementById("versusp").style.color="#00e5ff";
    document.getElementById("PPT").style.backgroundColor="blue";
}
function ganar(){//muestra un texto de "victoria" cambia el color de fondo, el color del texto 
    document.getElementById("versusp").innerHTML="VICTORIA";
    document.getElementById("versusp").style.color="#22f5cb";
    document.getElementById("PPT").style.backgroundColor="green";
}
function perder(){//muestra un texto de "Derrota" cambia el color de fondo y el color del texto
    document.getElementById("versusp").innerHTML="DERROTA";
    document.getElementById("versusp").style.color="#27032e";
    document.getElementById("PPT").style.backgroundColor="red";
}

function terminarJuego(){//vuelve a mostrar la pantalla inicial y oculta todo lo siguiente a ella
    document.getElementById("PPT").style.backgroundColor="rgb(158, 33, 127)";
    document.getElementById("logo").style.display="block";
    document.getElementById("modo").style.display="block";
    document.getElementById("go").style.display="block";
    document.getElementById("versus").style.display="none";
    suE= Math.floor(Math.random()*3)+1;
}

function quienGana(a){//funcion que muestra la pantalla de las dos elecciones
    document.getElementById("ppt").style.display="none";
    document.getElementById("versus").style.display="block";
    document.getElementById("versus").style.display="block";
    if(suE==a){// condicion para saber si tu eleccion gana, pierde o empata contra la suya
        empate();
    }else if(suE==3 && a==2){
        perder();
    }else if(suE==3 && a==1){
        ganar();
    }else if(suE==2 && a==3){
        ganar();
    }else if(suE==2 && a==1){
        perder();
    }else if(suE==1 && a==3){
        perder();
    }else if(suE==1 && a==2){
        ganar();
    }
    if(suE==1){//condicion para mostrar su eleccion
        document.getElementById("suE").src="Imagenes/PiedraE.png";
    } else if(suE==2){
        document.getElementById("suE").src="Imagenes/PapelE.png"
    } else{
        document.getElementById("suE").src="Imagenes/TijeraE.png"
    }
    if(a==1){//condicion para mostrar tu eleccion
        document.getElementById("tuE").src="Imagenes/Piedra.png";
    } else if(a==2){
        document.getElementById("tuE").src="Imagenes/Papel.png"
    } else{
        document.getElementById("tuE").src="Imagenes/Tijera.png"     
    }
}
