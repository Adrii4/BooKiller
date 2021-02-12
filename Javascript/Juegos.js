//PIEDRA PAPEL TIJERA
//VARIABLES
var suE= Math.floor(Math.random()*3)+1;
var vic=0;
var i;


//METODOS
function empezar(){
    ocultarMenu();
    document.getElementById("ppt").style.display="block";
    document.getElementById("puntos").style.display="block";
    document.getElementById("puntos").innerHTML="Puntos: "+vic;
}

function ocultarMenu(){
    document.getElementById("logo").style.display="none";
    document.getElementById("modo").style.display="none";
    document.getElementById("go").style.display="none";
}

function empate(){
    document.getElementById("versusp").innerHTML="EMPATE";
    document.getElementById("versusp").style.color="#00e5ff";
    document.getElementById("PPT").style.backgroundColor="blue";
}
function ganar(){
    document.getElementById("versusp").innerHTML="VICTORIA";
    document.getElementById("versusp").style.color="#22f5cb";
    document.getElementById("PPT").style.backgroundColor="green";
    vic++;
    document.getElementById("puntos").innerHTML="Puntos: "+vic;
}
function perder(){
    document.getElementById("versusp").innerHTML="DERROTA";
    document.getElementById("versusp").style.color="#27032e";
    document.getElementById("PPT").style.backgroundColor="red";
}

function terminarJuego(){
    document.getElementById("logo").style.display="block";
    document.getElementById("modo").style.display="block";
    document.getElementById("una").style.display="block";
    document.getElementById("UNA").style.display="block";
    document.getElementById("tres").style.display="block";
    document.getElementById("TRES").style.display="block";
    document.getElementById("versus").style.display="none";
}

function quienGana(a){
    document.getElementById("ppt").style.display="none";
    document.getElementById("versus").style.display="block";
    document.getElementById("versus").style.display="block";
    if(suE==a){
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
    if(suE==1){
        document.getElementById("suE").src="Imagenes/PiedraE.png";
    } else if(suE==2){
        document.getElementById("suE").src="Imagenes/PapelE.png"
    } else{
        document.getElementById("suE").src="Imagenes/TijeraE.png"
    }
    if(a==1){
        document.getElementById("tuE").src="Imagenes/Piedra.png";
    } else if(a==2){
        document.getElementById("tuE").src="Imagenes/Papel.png"
    } else{
        document.getElementById("tuE").src="Imagenes/Tijera.png"     
    }
    jugarVeces--;
    if(jugarVeces==3 && vic==2 || jugarVeces==1 && vic==1){
        document.getElementById("otra").src="Imagenes/victoria.png";
        terminar=1;
    }
}

function vj(){
    if(terminar==1){
        terminarJuego();
    }
    document.getElementById("versus").style.display="none";
    document.getElementById("ppt").style.display="block";
    document.getElementById("otra").style.display="none";
}




//MATAPATOS
//CONSTANTES
const PATO_NORMAL=1000;
const PATO_ESPECIAL=5000;
const PATO_NEGRO=1000;

//VARIABLES
let patos = ["pato1","pato2","pato3","pato4","pato5","pato6","pato7",
			"pato8","pato9","pato10","pato11","pato12","pato13",
			"pato14","pato15"];
var fallos =0;
var puntos =0;
var balas =6;
var i =3;
var tiempo =4;
var tiempomili = 2000;
var tiempomilireloj = 1000;
var cantPatos=10;
var Reloj=25;
var mute=0;

//METODOS
function Carga(){	
	document.getElementById("modoNormal").style.display="none";
	document.getElementById("modoHard").style.display="none";
	document.getElementById("modoFancy").style.display="none";
	document.getElementById("seleccion").innerHTML="Modo Novato";
	if(i==0){
		mostrarJuego();
	}
	document.getElementById("cuenta").innerHTML=i;
	i --;
	setTimeout(Carga, 500);
}

function CargaHard(){	
	document.getElementById("modoNormal").style.display="none";
	document.getElementById("modoHard").style.display="none";
	document.getElementById("modoFancy").style.display="none";
	document.getElementById("seleccion").innerHTML="Modo #~·#";
	document.getElementById("pato1").src="Imagenes/Joan.png";
	document.getElementById("pato2").src="Imagenes/Joan.png";
	document.getElementById("pato3").src="Imagenes/Joan.png";
	document.getElementById("pato4").src="Imagenes/Joan.png";
	document.getElementById("pato5").src="Imagenes/Joan.png";
	document.getElementById("pato6").src="Imagenes/Joan.png";
	document.getElementById("pato7").src="Imagenes/Joan.png";
	document.getElementById("pato8").src="Imagenes/Joan.png";
	document.getElementById("pato9").src="Imagenes/Joan.png";
	document.getElementById("pato10").src="Imagenes/JoanEspecial.png";
	document.getElementById("pato11").src="Imagenes/JoanEspecial.png";
	document.getElementById("pato12").src="Imagenes/JoanEspecial.png";
	document.getElementById("pato13").src="Imagenes/JoanEspecial.png";
	document.getElementById("pato14").src="Imagenes/JoanNegro.png";
	document.getElementById("pato15").src="Imagenes/JoanNegro.png";
	document.getElementById("juego").style.backgroundColor="brown";
	tiempomili=500;
	tiempomilireloj=200;
	if(i==0){
		mostrarJuego();
	}
	document.getElementById("cuenta").innerHTML=i;
	i --;
	setTimeout(CargaHard, 200);
}

function CargaFancy(){
	document.getElementById("modoNormal").style.display="none";
	document.getElementById("modoHard").style.display="none";
	document.getElementById("modoFancy").style.display="none";
	document.getElementById("seleccion").innerHTML=":D";
	document.getElementById("juego").style.backgroundColor="pink";
	
	tiempomili=4000;
	tiempomilireloj=1500;
	if(i==0){
		mostrarJuego();
	}
	document.getElementById("cuenta").innerHTML=i;
	i --;
	setTimeout(CargaFancy, 1500);
}


function reloj(){
	if(Reloj==-1){
		final();
	}
	document.getElementById("reloj").innerHTML="00:"+Reloj;
	Reloj--;
	setTimeout(reloj, tiempomilireloj);
}

function mostrarJuego(){
	reloj();
	document.getElementById("espera").style.display="none";
	document.getElementById("Fallos").innerHTML="Fallos: "+fallos;
	document.getElementById("Balas").innerHTML="Balas: "+balas;
	document.getElementById("Puntos").innerHTML="Puntos: "+puntos;
	document.getElementById("juego").style.display="block";
	document.getElementById("menu").style.display="block";
	volverMira();
	volarPatos();

}

function final(){
	document.getElementById("juego").style.display="none";
	document.getElementById("menu").style.display="none";
	document.getElementById("final").style.display="block";
	document.getElementById("textoFinal").innerHTML="TIEMPOO!";
	document.getElementById("puntuacionFinal").innerHTML=puntos+" PatoPuntos ";
	document.getElementById("falloFinal").innerHTML=fallos+" Fallos ";
}

function sumarPuntosN(){
	if(balas!=0){
		puntos += PATO_NORMAL;
		document.getElementById("matar").volume=1;
		document.getElementById("matar").play();
		document.getElementById("Puntos").innerHTML="Puntos: "+puntos;
	}
}

function sumarPuntosE(){
	puntos += PATO_ESPECIAL;
	document.getElementById("matarEspecial").volume=1;
	document.getElementById("matarEspecial").play();
	document.getElementById("Puntos").innerHTML="Puntos: "+puntos;
}

function restarPuntos(){
	puntos -= PATO_NEGRO;
	document.getElementById("matarNegro").volume=1;
	document.getElementById("matarNegro").play();
	document.getElementById("Puntos").innerHTML="Puntos: "+puntos;
}

function disparar(){
	if(balas==1){
		recargar();
	} else{
	balas -= 1;
	document.getElementById("juego").style.cursor="url(Imagenes/Disparo.png) 16 16, auto";
	document.getElementById("disparo").volume=0.1;
	document.getElementById("disparo").play();
	document.getElementById("Balas").innerHTML="Balas: "+balas;
	setTimeout(volverMira,200);
	}
}

function recargar(){
	balas=6;
	document.getElementById("juego").style.cursor="url(Imagenes/Recargando.png) 16 16, auto";
	document.getElementById("Balas").innerHTML="Balas: "+balas;
	document.getElementById("recargar").volume=1;
	document.getElementById("recargar").play();
	setTimeout(volverMira,1000);
}

function volverMira(){
	document.getElementById("juego").style.cursor="url(Imagenes/Mira.png) 16 16, auto";
}

function volverFondo(){
	document.getElementById("juego").style.backgroundColor="#1E93D6"
}

function fallo(){
	if(balas!=0){
		fallos ++;
		document.getElementById("Fallos").innerHTML="Fallos: "+fallos;
		document.getElementById("juego").style.backgroundColor="red";
		setTimeout(volverFondo, 100);
	}
	disparar();
}

function ocultar(a){
	a.style.display="none";
}


function volarPatos(){
	if(puntos>=0){
		pato=[Math.floor(Math.random()*15)+0];
		document.getElementById(patos[pato]).style.display="block";
	}
	setTimeout(volarPatos,tiempomili);
}

function Volumen(){
	
	if(mute==1){
		document.getElementById("BMute").src="Imagenes/Muteado.png";
		document.getElementById("cancion").volume=0;
		mute=0;
	} else if (mute==0){
		document.getElementById("BMute").src="Imagenes/Desmuteado.png";
		document.getElementById("cancion").volume=0.05;
		document.getElementById("cancion").play();
		mute=1;
	}
}

 