//vercion 1
function coneccion(correo,contraseña,entrar) {
   const Correo="migueld2000@gmail.com";
   const Contraseña="lunatamayo15";
   console.log("mirando credenciales");


   setTimeout(function() {
    if(correo == Correo && contraseña == Contraseña)
    {
        entrar(200)
    }
    else{
        entrar(404)
        
    }
   },5000)
}

coneccion("migueld2000@gmail.com","lunatamayo15", function(estado) {
    if(estado==200){
        console.log("Biembenido");
    }
    else{
        console.log("Error a entrar");
    }
})