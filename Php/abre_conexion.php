<?php



$hostdb = "localhost";    // sera el valor de nuestro HOST
$basededatos = "id16128012_usuarios";    // sera el valor de nuestra BD

$usuariodb = "id16128012_root2";    // sera el valor de nuestro usuario
$clavedb = "gWc64Of6EjFsdI4@";    // sera el valor de nuestra clave

$tabla_db1 = "encuesta";    // sera el valor de una tabla

// Fin de los parametros a configurar para la conexion de la base de datos

$conexion_db = mysqli_connect($hostdb,$usuariodb,$clavedb,$basededatos)
    or die ("Conexión denegada, el Servidor de Base de datos que solicitas NO EXISTE");
    //$db = mysqli_select_db("$basededatos", $conexion_db)
    //or die ("La Base de Datos <b></b> NO EXISTE");
?>


