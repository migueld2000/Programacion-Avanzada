//Metodo 1
function robarPlano(id,despegarNave)
{
    if(id>0 && id<=10)
    {
        let mensaje="Plano robado: "+id;
        despegarNave(mensaje,true);
    }
    else
    {
        let mensaje="Plano falso: "+id;
        despegarNave(mensaje,false);
    }
}

robarPlano(5,function(mensaje,bandera){
    console.log(mensaje);
    if(bandera)
    {
        console.log("Despegando...");
    }
    else{
        console.log("Error al despegar...");
    }
})

//Metodo 2

let robarPlano2=(id,despegarNave)=>{
    if(id>0 && id<=10)
    {
        let mensaje="Plano robado: "+id;
        console.log(mensaje);
        despegarNave(true);
    }
    else
    {
        let mensaje="Plano falso: "+id;
        console.log(mensaje);
        despegarNave(false);
    }
}
robarPlano2 (15,bandera=> bandera ? console.log("Despegando...") : console.log("Error al despegar..."));