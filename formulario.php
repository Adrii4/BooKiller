<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="preconnect" href="https://fonts.gstatic.com">
	<link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet">
	<link rel="stylesheet" href="Estilos/styles.css">
	<link rel="stylesheet" href="Estilos/header.css">
	<link rel="stylesheet" href="Estilos/formulario.css">
  <link rel="stylesheet" href="Estilos/footer.css">
	<title>BooKiller - Formulario</title>
</head>
<body>
	 <nav>
      <div class="imagen">
          <a href="index.php"><img class="logo" src="Imagenes/Logo.png" alt="Logo empresa"></a>
      </div>
      <ul class="nav-links">
      <li><a href="libros.php">Libros</a></li>
      <li><a href="manga.php">Manga</a></li>
      <li><a href="formulario.php">Formulario</a></li>
      <li><a href="ocio.php">Ocio</a></li>
      </ul>
      <div class="burger">
          <div class="line1"></div>
          <div class="line2"></div>
          <div class="line3"></div>
      </div>
  </nav>

	<div id="main">
  		<h1>Encuesta de satisfacción</h1>
  		<form id="survey-form" action="Php/guardar.php" method="POST">
   			<div class="form-group">
      			<label class="pregunta" for="name">Nombre<span class="obligatorio">*</span></label><br>
      			<input class="field" name="name" type="text" placeholder="Introduce tu nombre" required/> <!--usar el atributo required al final hace que no se pueda dejar en blanco-->
    		</div>
    		<div class="form-group">
     			  <label class="pregunta" for="telephone">Telefono<span class="obligatorio">*</span></label><br>
      			<input class="field" name="telefono" type="number" placeholder="Introduce tu telefono" required/> <!--usar el type email nos obliga a introducir un formato de email valido-->
    		</div>
    		<div class="form-group">
      			<label class="pregunta" for="number">Edad<span class="obligatorio">*</span></label><br>
      			<input class="field" name="number" type="number" min="1" max="99" placeholder="Introduce tu edad" required/> <!--usar el type number hace que solo se puedan introducir numeros-->
    		</div>
    		<div class="form-group">
      			 <label class="pregunta" for="dropdown">Género</label><br> <!--dropdown crear una lista desplegable con distintas opciones-->
      			 <select  class="field" name="dropdown" name="gender">
        			<option value="" disabled selected>Selecciona una opción</option> <!--esto crea un placeholder para el dropdown-->
        			<option value="hombre">Hombre</option> <!--diferentes opciones para el dropdown-->
        			<option value="mujer">Mujer</option>
        			<option value="otro">Otro</option>
      			</select>
    		</div>
    		<div class="form-group">
            <label class="pregunta" for="valoracion">Como valorarías el trabajo de nuestro equipo?<span class="obligatorio">*</span></label>
      			<br>
      			<input class="radio" type="radio" name="valoracion" value="10"> Excelente<br> <!--con class radio solo se puede elegir una opcion-->
      			<input class="radio" type="radio" name="valoracion" value="7"> Bueno<br>
      			<input class="radio" type="radio" name="valoracion" value="5"> Normal<br>
      			<input class="radio" type="radio" name="valoracion" value="3"> Mejorable<br>
      			<input class="radio" type="radio" name="valoracion" value="1"> Malo<br>
    		</div>
    		<div class="form-group">
            <label class="pregunta" for="mejora">Que aspectos mejorarías de nuestra web?<span class="obligatorio">*</span></label>
      			<br>
      			<input type="checkbox" class="checkbox" name="mejoras" value="Diseño"> Diseño<br> <!--con class checkbox se pueden marcar mas de una opcion-->
            <input type="checkbox" class="checkbox" name="mejoras" value="Categorias"> Categorias<br>
      			<input type="checkbox" class="checkbox" name="mejoras" value="Productos"> Mas productos<br>
      			<input type="checkbox" class="checkbox" name="mejoras" value="Contacto"> Mas métodos de contacto<br>
    		</div>
       		<div class="form-group">
            <label class="pregunta" for="recomendacion">Nos recomendarias a un amigo o familiar?<span class="obligatorio">*</span></label>
      			<br>
      			<input type="radio" class="radio" name="recomendacion" value="Si"> Si<br>
            <input type="radio" class="radio" name="recomendacion" value="Quizas"> Quizás<br>
      			<input type="radio" class="radio" name="recomendacion" value="No"> No<br>
    		</div>
    		<div class="form-group">
     	 		   <label for="comentario">Deja un comentario</label>
      			 <textarea name="comment" class="field"></textarea> <!--con class field creamos un campo en el que el usuario puede escribir-->
    		</div>
    		<div class="form-group">
      			<button class="field" id="submit" type="submit" value="enviar">Enviar</button> <!--boton para enviar los resultados del formulario-->
    		</div>
  		</form>
	</div>

    <footer>
    <div id="info">
      <nav class="redes">
        <a href="https://www.facebook.com/dudas.pegas.7/" target="_blank"><img src="Imagenes/facebook.png" alt="FACEBOOK"></a>
        <a href="https://twitter.com/hardware_eco" target="_blank"><img src="Imagenes/twitter.png" alt="TWITTER"></a>
        <a href="https://www.instagram.com/eco.hardware/" target="_blank"><img src="Imagenes/instagram.png" alt="INSTAGRAM"></a>
        <a href="https://wa.me/688660077" target="_blank"><img src="Imagenes/whatsapp.png" alt="WHATSAPP"></a>
      </nav>
      <p>BooKiller©</p>
      <div class="w3c">
        <img src="Imagenes/w3ccss.png" alt="W3C CSS">
        <img src="Imagenes/w3chtml.png" alt="W3C HTML">   
      </div>
    </div>
    <h2 id="ubicacion">¿Donde estamos?</h2>
    <div id="mapa"> <!--Importamos el mapa desde Google maps -->
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1451.020328217631!2d-2.951459708438086!3d43.334338297988715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4e5b269a943841%3A0xacbb9da78016e9da!2sDegollene-Andramariturri%20Kalea%2C%206-8%2C%2048950%20Erandio%2C%20Bizkaia!5e0!3m2!1ses-419!2ses!4v1612882499670!5m2!1ses-419!2ses" width="400" height="250" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
    </div>
    <div id="extra">
      <div id="faq">
        <h2 id="ubicacion">Preguntas frecuentes</h2>
        <li id="pregunta">¿Se pueden comprar libros online?</li>
        <li id="respuesta">Actualmente no, pero estamos trabajando en ello</li>
        <li id="pregunta">¿Cuantos libros puedo alquilar simultaneamente?</li>
        <li id="respuesta">El numero de libros que se pueden aquilar simultaneamente es 3</li>
        <li id="pregunta">¿Cuantos dias puedo tener un libro alquilado?</li>
        <li id="respuesta">El numero de dias que se puede tener un libro en alquiler es 30</li>
        <li id="pregunta">¿Se relizan entregas de libros a domicilio?</li>
        <li id="respuesta">Debido a la situacion de pandemia que vivimos este servicio no esta disponible</li>

      </div>
      <div id="contacto">
        <h2 id="ubicacion">Contactanos</h2>
        <div id="contacto-interior">
          <img src="Imagenes/casa.png" alt="Direccion"><p>Degollene-Andramariturri Kalea, 6-8</p>
        </div>
        <div id="contacto-interior">
          <img src="Imagenes/reloj.png" alt="Horario"><p>09:30-14:00 16:30-21:00</p>
        </div>
        <div id="contacto-interior">
          <img src="Imagenes/telefono.png" alt="Telefono"><p>688 66 00 77</p>
        </div>
        <div id="contacto-interior">
          <img src="Imagenes/email.png" alt="Email"><p>bookillersl@gmail.com</p>
        </div>
      </div>
    </div>
  </footer>

  <button class="button-to-top button-to-top_hidden" type="button" onclick="window.open('formulario.php', '_self');Alerta()">⯅</button> <!--Boton  que aparece al hacer scroll y nos lleva a la parte superior -->
	<script src="Javascript/app.js"></script>	
</body>
</html>