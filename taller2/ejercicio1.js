function reclutar(padawan)
{
   let padawan={
        nombre=juan,
        planeta=ABH431,
        edad=10,
        estatura=1.70
    }
    if(edad<15)
    {
        let mensaje=("Manejo de la fuerza");
        padawan(mensaje,true);
    }
    else
    {
        let mensaje=("Manejo de la fuerzasable de luz");
        padawan(mensaje,false);
    }
}
reclutar(function(mensaje,bandera){
    console.log(mensaje);
    if(bandera)
    {
        console.log("entrenamiento abansado");
    }
    else{
        console.log("entrenamiento principal");
    }
})
