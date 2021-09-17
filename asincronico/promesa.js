//vercion 2
function coneccion(correo, contraseña) {

    let promesa = new Promise(function (resolve, reject) {
        const Correo = "migueld2000@gmail.com";
        const Contraseña = "lunatamayo15";
        console.log("mirando credenciales");

        setTimeout(function () {
            if (correo == Correo && contraseña == Contraseña) {
                resolve("Biembenido")
            }
            else {
                reject("Error a entrar")

            }
        }, 5000)
    })
    return promesa
}
coneccion("migueld200@gmail.com","lunatamayo15")
.then(function (respuesta){
    console.log(respuesta);
})
.catch(function (error){
    console.log(error);
})