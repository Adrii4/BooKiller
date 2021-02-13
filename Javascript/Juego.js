//PUNTOS DE LOS PATOS AL ACERTAR
const PATO_NORMAL=1000;
const PATO_ESPECIAL=5000;
const PATO_NEGRO=1000;

//VARIABLES
//una array de patos en la que cada uno tiene una animación y van a ser activados de forma aleatoria
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

//FUNCIONES
//Una pequeña pantalla de carga de 3 segundos que te carga el modo normal o "NOVATO" para que estes listo
function Carga(){	
	document.getElementById("modoNormal").style.display="none";
	document.getElementById("modoHard").style.display="none";
	document.getElementById("modoFancy").style.display="none";
	document.getElementById("seleccion").innerHTML="Modo Novato";
	if(i==0){ //es un pequeño reloj que tarda 500 milisegundos en pasar al siguiente numero y cuando llega a 0 te muestra el juego
		mostrarJuego();
	}
	document.getElementById("cuenta").innerHTML=i;
	i --;
	setTimeout(Carga, 500);
}
//lo mismo que Carga() pero mas rapido y intercambia todas las imagenes de los 15 patos por la cara de un participande tel equipo(Tenemos su consetimiento para hacerlo)
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
	tiempomili=500; //cambia la variable para que el reloj avance mas rapido, cada medio segundo
	tiempomilireloj=200; // cambia la variable para que las cabezas aparezcan cada 200 milisegundos
	if(i==0){  //otro sencillo reloj pero en vez de 500 milisegundos son 200
		mostrarJuego();
	}
	document.getElementById("cuenta").innerHTML=i;
	i --;
	setTimeout(CargaHard, 200);
}
//Lo mismo que Carga() y CargaHard() pero mas lento y haciendo que el fondo sea rosa para una mayos sensacion de tranquilidad
function CargaFancy(){
	document.getElementById("modoNormal").style.display="none";
	document.getElementById("modoHard").style.display="none";
	document.getElementById("modoFancy").style.display="none";
	document.getElementById("seleccion").innerHTML=":D";
	document.getElementById("juego").style.backgroundColor="pink";
	tiempomili=4000; //cambia la variable para que el reloj avance mas lento, cada 4 segundos
	tiempomilireloj=1500; //cambia la variable para que los patos aparezcan cada 1,5 segundos
	if(i==0){ //otro reloj sencillo pero esta vez tardara 1,5 segundos en avanzar cada numero para dar mayor sensacion se seguridad
		mostrarJuego();
	}
	document.getElementById("cuenta").innerHTML=i;
	i --;
	setTimeout(CargaFancy, 1500);
}
// Funcion que actualiza un reloj y que cnd llega a -1 ejecuta la funcion final()
function reloj(){
	if(Reloj==-1){
		final();
	}
	document.getElementById("reloj").innerHTML="00:"+Reloj;
	Reloj--;
	setTimeout(reloj, tiempomilireloj);
}
// Funcion que se activa despues de la pantalla de carga
function mostrarJuego(){
	reloj();
	document.getElementById("espera").style.display="none"; //Oculta la pantalla de carga
	document.getElementById("Fallos").innerHTML="Fallos: "+fallos; //Muestra por primera vez los fallos
	document.getElementById("Balas").innerHTML="Balas: "+balas; //Muestra por primera vez las balas
	document.getElementById("Puntos").innerHTML="Puntos: "+puntos; //Muestra por primera vez los puntos
	document.getElementById("juego").style.display="block"; //Muestra la pantalla del juego
	document.getElementById("menu").style.display="block"; //Muestra el menu
	volverMira(); //pone el cursor en el div juego con una mirilla personalizada creada por nosotros
	volarPatos(); //ejecuta la funcion que hace que empiezen a salir los patos
}
// Esta funcion se activa cuando el reloj llega a -1
function final(){
	document.getElementById("juego").style.display="none"; //Oculta el juego
	document.getElementById("menu").style.display="none"; //Oculta el menu
	document.getElementById("final").style.display="block"; //Muestra el div final
	document.getElementById("textoFinal").innerHTML="TIEMPOO!"; //Muestra el texto final
	document.getElementById("puntuacionFinal").innerHTML=puntos+" PatoPuntos "; //Muestra la puntuacion total
	document.getElementById("falloFinal").innerHTML=fallos+" Fallos "; //Muestra los fallos totales
}
//Se activa al darle click a los patos normales y suma la constante de los patos normales 
function sumarPuntosN(){
	if(balas!=0){
		puntos += PATO_NORMAL;
		document.getElementById("matar").volume=1;
		document.getElementById("matar").play(); //reproduce un sonido especifico
		document.getElementById("Puntos").innerHTML="Puntos: "+puntos;
	}
}
//Se activa al darle click a los patos especiales y suma la constante de los patos especiales
function sumarPuntosE(){
	puntos += PATO_ESPECIAL;
	document.getElementById("matarEspecial").volume=1;
	document.getElementById("matarEspecial").play(); //reproduce un sonido especifico
	document.getElementById("Puntos").innerHTML="Puntos: "+puntos;
}
//Se activa al darle click a los patos negros y suma la constante de los patos negros
function restarPuntos(){
	puntos -= PATO_NEGRO;
	document.getElementById("matarNegro").volume=1;
	document.getElementById("matarNegro").play(); //reproduce un sonido especifico
	document.getElementById("Puntos").innerHTML="Puntos: "+puntos;
}
//Se acitva al darle click en algun pato o en el fondo
function disparar(){
	if(balas==1){
		recargar(); //cuando las balas estan en 1 ejecuta la funcion recargar
	} else{
	balas -= 1; //va restando valas al contador de balas
	document.getElementById("juego").style.cursor="url(Imagenes/Disparo.png) 16 16, auto";//cambia el cursor 
	document.getElementById("disparo").volume=0.1;//pone el volumen del audio bajo
	document.getElementById("disparo").play();//activa el audio de disparar
	document.getElementById("Balas").innerHTML="Balas: "+balas;//actualiza el contador de balas
	setTimeout(volverMira,200);//ejecuta  la funcion volverMira() (que devuelve el cursor a la mira) despues de 200 milisegundos
	}
}

function recargar(){
	balas=6;//Cambia el contador de balas a 6
	document.getElementById("juego").style.cursor="url(Imagenes/Recargando.png) 16 16, auto";//cambia el cursos a uno que muestra que estas recargando
	document.getElementById("Balas").innerHTML="Balas: "+balas;//actualiza el contador de balas
	document.getElementById("recargar").volume=1;
	document.getElementById("recargar").play();//reproduce un sonido que muestra que estas recargando
	setTimeout(volverMira,1000);//ejecuta la funcion de volverMira tras un segundo de espera
}
//devuelve el cursos a la normalidad
function volverMira(){
	document.getElementById("juego").style.cursor="url(Imagenes/Mira.png) 16 16, auto";
}
//devuelve el color del fondo a la normalidad
function volverFondo(){
	document.getElementById("juego").style.backgroundColor="#1E93D6"
}
//se activa al clicar en el fondo
function fallo(){
	if(balas!=0){//si las balas no son 0 suma 1 al contador de fallos, lo actualiza y cambia el fondo a rojo
		fallos ++;
		document.getElementById("Fallos").innerHTML="Fallos: "+fallos;
		document.getElementById("juego").style.backgroundColor="red";
		setTimeout(volverFondo, 100);//devuelve el fondo a su color inicial tras 100 milisegundos
	}
	disparar();//ejecuta la funcion de disparar
}
//recoge el valor del pato en el que has clikcado(1,2,3,...) y lo oculta
function ocultar(a){
	a.style.display="none";
}
//esta activa desde que se va la pantalla de carga
function volarPatos(){
	if(puntos>=0){
		pato=[Math.floor(Math.random()*15)+0];//selecciona un pato al azar de la array de patos
		document.getElementById(patos[pato]).style.display="block";//muestra ese pato, lo que hace que comienze su animacion predefinida en el css
	}
	setTimeout(volarPatos,tiempomili);//vuelve a ejecurar esta funcion despues de los segundos selsccionados al elgir la dificultad
}
//activa o desactiva una cancion en 8 bits sin copyright 
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

 