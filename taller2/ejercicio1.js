function reclutar(nombre, planeta, edad, estatura, padawan) {
  if (edad < 15) {
    let mensaje = "Manejo de la fuerza";
    padawan(mensaje, true);
  } else {
    let mensaje = "Manejo del sable de luz";
    padawan(mensaje, false);
  }
}
reclutar("juan", "ABH431", 16, 1.7, function (mensaje, bandera)
{
  console.log(mensaje);
  if (bandera) 
  {
    console.log("entrenamiento principal");
  } 
  else 
  {
    console.log("entrenamiento abansado");
  }
});
