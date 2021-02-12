 <?php   

// Recibimos por POST los datos procedentes del formulario   

$Nombre=$_POST['name'];
$Telefono=$_POST['telefono'];
$Edad=$_POST['number'];
$Genero=$_POST['dropdown'];
$Valoracion=$_POST['valoracion'];
$Mejora=$_POST['mejoras'];
$Recomendacion=$_POST['recomendacion'];
$Comentario=$_POST['comment'];

// Abrimos la conexion a la base de datos   
include("abre_conexion.php");   

$_GRABAR_SQL = "INSERT INTO $tabla_db1 VALUES('$Nombre','$Telefono','$Edad','$Genero','$Valoracion','$Mejora','$Recomendacion','$Comentario')";   
mysqli_query($conexion_db,$_GRABAR_SQL);  


// Cerramos la conexion a la base de datos   
include("cierra_conexion.php");   

// Confirmamos que el registro ha sido insertado con exito   

echo "   
<p>Los datos han sido guardados con exito.</p>   

<p><a href='javascript:history.go(-1)'>VOLVER ATRÁS</a></p>   
";   
?>   
